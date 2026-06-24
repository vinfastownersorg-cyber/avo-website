const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Credentials': 'true',
};

function corsHeaders(env) {
  return { ...CORS_HEADERS, 'Access-Control-Allow-Origin': env.SITE_URL };
}

function jsonResponse(data, status, env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(env) },
  });
}

// --- Cookie helpers ---

async function signToken(payload, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const data = JSON.stringify(payload);
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
  const sigHex = [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, '0')).join('');
  return btoa(data) + '.' + sigHex;
}

async function verifyToken(token, secret) {
  const encoder = new TextEncoder();
  const [dataB64, sigHex] = token.split('.');
  if (!dataB64 || !sigHex) return null;
  const data = atob(dataB64);
  const key = await crypto.subtle.importKey(
    'raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
  );
  const sigBytes = new Uint8Array(sigHex.match(/.{2}/g).map(h => parseInt(h, 16)));
  const valid = await crypto.subtle.verify('HMAC', key, sigBytes, encoder.encode(data));
  if (!valid) return null;
  return JSON.parse(data);
}

function getSessionId(request) {
  const cookies = request.headers.get('Cookie') || '';
  const match = cookies.match(/avo_session=([^;]+)/);
  return match ? match[1] : null;
}

function sessionCookie(token, maxAge = 86400 * 7) {
  return `avo_session=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${maxAge}`;
}

// --- Route: Form Proxy ---

const FORM_TYPES = {
  membership: 'DISCORD_WEBHOOK_MEMBERSHIP',
  'warranty-survey': 'DISCORD_WEBHOOK_MEMBERSHIP',
  'open-letter': 'DISCORD_WEBHOOK_OPEN_LETTER',
};

async function handleFormSubmit(request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(env) });
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405, env);
  }

  const url = new URL(request.url);
  const formType = url.searchParams.get('type');
  const webhookVar = FORM_TYPES[formType];

  if (!webhookVar || !env[webhookVar]) {
    return jsonResponse({ error: 'Invalid form type' }, 400, env);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON' }, 400, env);
  }

  if (!body.embeds && !body.content) {
    return jsonResponse({ error: 'Missing payload' }, 400, env);
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const rateLimitKey = `rate:${formType}:${ip}`;
  const existing = await env.SESSIONS.get(rateLimitKey);
  if (existing) {
    return jsonResponse({ error: 'Please wait before submitting again' }, 429, env);
  }
  await env.SESSIONS.put(rateLimitKey, '1', { expirationTtl: 30 });

  const webhookUrl = env[webhookVar];
  const resp = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    return jsonResponse({ error: 'Submission failed' }, 502, env);
  }

  return jsonResponse({ success: true }, 200, env);
}

// --- Route: Discord OAuth ---

function discordAuthUrl(env, state) {
  const params = new URLSearchParams({
    client_id: env.DISCORD_CLIENT_ID,
    redirect_uri: `${new URL('/', env.WORKER_URL || 'https://avo-api.vinfastownersorg.workers.dev').origin}/auth/callback`,
    response_type: 'code',
    scope: 'identify guilds guilds.members.read',
    state,
    prompt: 'consent',
  });
  return `https://discord.com/api/oauth2/authorize?${params}`;
}

async function handleAuthStart(request, env) {
  const state = crypto.randomUUID();
  await env.SESSIONS.put(`oauth_state:${state}`, '1', { expirationTtl: 600 });

  return new Response(null, {
    status: 302,
    headers: { Location: discordAuthUrl(env, state) },
  });
}

async function handleAuthCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const error = url.searchParams.get('error');

  if (error || !code || !state) {
    return Response.redirect(`${env.SITE_URL}?auth_error=denied`, 302);
  }

  const stateValid = await env.SESSIONS.get(`oauth_state:${state}`);
  if (!stateValid) {
    return Response.redirect(`${env.SITE_URL}?auth_error=invalid_state`, 302);
  }
  await env.SESSIONS.delete(`oauth_state:${state}`);

  const callbackUrl = `${url.origin}/auth/callback`;

  // Exchange code for token
  const tokenResp = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.DISCORD_CLIENT_ID,
      client_secret: env.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: callbackUrl,
    }),
  });

  if (!tokenResp.ok) {
    return Response.redirect(`${env.SITE_URL}?auth_error=token_exchange`, 302);
  }

  const tokenData = await tokenResp.json();
  const accessToken = tokenData.access_token;

  // Fetch user profile
  const userResp = await fetch('https://discord.com/api/users/@me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const user = await userResp.json();

  // Fetch guild member info to get roles
  let tier = 'member';
  let roles = [];

  try {
    const memberResp = await fetch(
      `https://discord.com/api/users/@me/guilds/${env.DISCORD_GUILD_ID}/member`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (memberResp.ok) {
      const memberData = await memberResp.json();
      roles = memberData.roles || [];
      if (roles.includes(env.DISCORD_VERIFIED_ROLE_ID)) {
        tier = 'verified';
      }
    } else {
      tier = 'guest';
    }
  } catch {
    tier = 'guest';
  }

  // Store session
  const sessionId = crypto.randomUUID();
  const session = {
    userId: user.id,
    username: user.username,
    displayName: user.global_name || user.username,
    avatar: user.avatar
      ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
      : null,
    tier,
    roles,
    createdAt: Date.now(),
  };

  await env.SESSIONS.put(`session:${sessionId}`, JSON.stringify(session), {
    expirationTtl: 86400 * 7,
  });

  const token = await signToken({ sid: sessionId }, env.SESSION_SECRET);

  return new Response(null, {
    status: 302,
    headers: {
      Location: `${env.SITE_URL}?auth_success=1`,
      'Set-Cookie': sessionCookie(token),
    },
  });
}

async function handleAuthMe(request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(env) });
  }

  const token = getSessionId(request);
  if (!token) {
    return jsonResponse({ authenticated: false }, 401, env);
  }

  const payload = await verifyToken(token, env.SESSION_SECRET);
  if (!payload || !payload.sid) {
    return jsonResponse({ authenticated: false }, 401, env);
  }

  const sessionData = await env.SESSIONS.get(`session:${payload.sid}`);
  if (!sessionData) {
    return jsonResponse({ authenticated: false }, 401, env);
  }

  const session = JSON.parse(sessionData);
  return jsonResponse({
    authenticated: true,
    user: {
      username: session.username,
      displayName: session.displayName,
      avatar: session.avatar,
      tier: session.tier,
    },
  }, 200, env);
}

async function handleAuthLogout(request, env) {
  const token = getSessionId(request);
  if (token) {
    const payload = await verifyToken(token, env.SESSION_SECRET);
    if (payload?.sid) {
      await env.SESSIONS.delete(`session:${payload.sid}`);
    }
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: env.SITE_URL,
      'Set-Cookie': sessionCookie('', 0),
      ...corsHeaders(env),
    },
  });
}

// --- Router ---

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }

    if (path === '/submit-form') return handleFormSubmit(request, env);
    if (path === '/auth/discord') return handleAuthStart(request, env);
    if (path === '/auth/callback') return handleAuthCallback(request, env);
    if (path === '/auth/me') return handleAuthMe(request, env);
    if (path === '/auth/logout') return handleAuthLogout(request, env);

    if (path === '/health') {
      return jsonResponse({ status: 'ok', version: '1.0.0' }, 200, env);
    }

    return jsonResponse({ error: 'Not found' }, 404, env);
  },
};

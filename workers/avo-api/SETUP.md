# AVO API Worker — Setup Guide

Worker URL: `https://avo-api.vinfastownersorg.workers.dev`

## What This Worker Does

1. **Form Proxy** (`/submit-form`) — accepts form submissions from the website and forwards them to Discord webhooks. The webhook URLs are stored as secrets, not exposed in client-side code.
2. **Discord OAuth** (`/auth/*`) — handles member login via Discord, checks roles to determine access tier (guest / member / verified owner).
3. **Health Check** (`/health`) — returns status for monitoring.

## Endpoints

| Path | Method | Purpose |
|------|--------|---------|
| `/submit-form?type=membership` | POST | Proxy membership form to Discord |
| `/submit-form?type=warranty-survey` | POST | Proxy warranty survey to Discord |
| `/submit-form?type=open-letter` | POST | Proxy open letter feedback to Discord |
| `/auth/discord` | GET | Start Discord OAuth login |
| `/auth/callback` | GET | OAuth callback (Discord redirects here) |
| `/auth/me` | GET | Get current user info + tier |
| `/auth/logout` | GET | Log out, clear session |
| `/health` | GET | Health check |

## Setup Steps

### 1. Create KV Namespace

In the Cloudflare dashboard:
1. Go to **Workers & Pages → KV**
2. Click **Create a namespace**
3. Name it `avo-sessions`
4. Copy the **Namespace ID**
5. Edit `wrangler.toml` and replace `REPLACE_WITH_KV_NAMESPACE_ID` with the ID

### 2. Create Discord Application

1. Go to https://discord.com/developers/applications
2. Click **New Application** → name it "AVO Website"
3. Go to **OAuth2** tab
4. Copy **Client ID** and **Client Secret**
5. Add redirect URL: `https://avo-api.vinfastownersorg.workers.dev/auth/callback`

### 3. Get Discord IDs

In Discord (enable Developer Mode in Settings → Advanced):
- **Guild (Server) ID**: Right-click the AVO server name → Copy Server ID
- **Verified Owner Role ID**: Server Settings → Roles → right-click "Verified Owner" → Copy Role ID

Edit `wrangler.toml` and replace:
- `REPLACE_WITH_GUILD_ID` with your server ID
- `REPLACE_WITH_ROLE_ID` with the verified owner role ID

### 4. Set Secrets

From your terminal (requires `npm install -g wrangler` and `wrangler login`):

```bash
cd workers/avo-api

# Discord OAuth credentials
wrangler secret put DISCORD_CLIENT_ID
wrangler secret put DISCORD_CLIENT_SECRET

# Discord webhook URLs (copy from your current site code)
wrangler secret put DISCORD_WEBHOOK_MEMBERSHIP
wrangler secret put DISCORD_WEBHOOK_OPEN_LETTER

# Session signing key (generate a random string)
# On Mac/Linux: openssl rand -hex 32
wrangler secret put SESSION_SECRET
```

### 5. Deploy

```bash
cd workers/avo-api
npx wrangler deploy
```

### 6. Update the Website

After deploying, update the 3 form handlers on the website to point at the Worker instead of the raw Discord webhook URLs:

**join.html & warranty-survey.html:**
```js
// Old:
fetch('https://discord.com/api/webhooks/...')
// New:
fetch('https://avo-api.vinfastownersorg.workers.dev/submit-form?type=membership', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(discordPayload)
})
```

**open-letter.html:**
```js
// Old:
fetch('https://discord.com/api/webhooks/...')
// New:
fetch('https://avo-api.vinfastownersorg.workers.dev/submit-form?type=open-letter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload)
})
```

### 7. Rotate Webhook Tokens

After confirming the proxy works, regenerate the Discord webhook URLs in Discord (Server Settings → Integrations → Webhooks) so the old exposed URLs stop working.

## Testing

After deployment, test with:

```bash
# Health check
curl https://avo-api.vinfastownersorg.workers.dev/health

# Auth flow (open in browser)
# https://avo-api.vinfastownersorg.workers.dev/auth/discord
```

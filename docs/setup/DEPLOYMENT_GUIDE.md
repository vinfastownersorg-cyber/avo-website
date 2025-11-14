# Website Deployment Guide

Complete guide for deploying the VinFastOwners.org website from GitHub to a production server.

---

## Table of Contents

- [Hosting Options](#hosting-options)
- [Prerequisites](#prerequisites)
- [Option 1: GitHub Pages (Recommended for Testing)](#option-1-github-pages-recommended-for-testing)
- [Option 2: Netlify (Recommended for Production)](#option-2-netlify-recommended-for-production)
- [Option 3: Shared Hosting (cPanel/FTP)](#option-3-shared-hosting-cpanelftp)
- [Option 4: VPS/Cloud Server](#option-4-vpscloud-server)
- [Domain Configuration](#domain-configuration)
- [SSL/HTTPS Setup](#sslhttps-setup)
- [Auto-Deployment from GitHub](#auto-deployment-from-github)
- [Testing Deployment](#testing-deployment)
- [Troubleshooting](#troubleshooting)

---

## Hosting Options

### Comparison Table

| Option | Cost | Difficulty | Auto-Deploy | Custom Domain | SSL | Best For |
|--------|------|------------|-------------|---------------|-----|----------|
| GitHub Pages | Free | Easy | Yes | Yes | Yes | Testing, staging |
| Netlify | Free | Easy | Yes | Yes | Yes | Production, recommended |
| Vercel | Free | Easy | Yes | Yes | Yes | Production alternative |
| Shared Hosting | $3-15/mo | Medium | No* | Yes | Yes | Traditional hosting |
| VPS (DigitalOcean, etc) | $5-20/mo | Hard | Yes* | Yes | Yes | Full control needed |

**Recommended:** Netlify or Vercel for production (free, automatic deployments, CDN, SSL included)

---

## Prerequisites

### What You Need

1. **GitHub Repository Access**
   - Repository: `https://github.com/vinfastownersorg-cyber/avo-website`
   - Read access (collaborator or public repo)

2. **Domain Name** (if using custom domain)
   - Example: `vinfastowners.org`
   - Access to DNS settings

3. **Hosting Account** (depends on chosen option)
   - Netlify/Vercel account (free)
   - Or cPanel/FTP credentials
   - Or VPS server access

### Tools Needed

**For all deployments:**
- Web browser
- GitHub account

**For manual deployments:**
- Git installed locally
- Terminal/command line access
- FTP client (FileZilla, Cyberduck) for shared hosting
- SSH client for VPS

---

## Option 1: GitHub Pages (Recommended for Testing)

**Best for:** Testing, staging environment, quick preview

### Setup Steps

**Method 1: Via GitHub Web Interface**

1. **Go to repository settings:**
   ```
   https://github.com/vinfastownersorg-cyber/avo-website/settings/pages
   ```

2. **Configure GitHub Pages:**
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
   - Click **Save**

3. **Wait for deployment:**
   - Takes 1-2 minutes
   - Green checkmark when ready

4. **Access your site:**
   ```
   https://vinfastownersorg-cyber.github.io/avo-website/
   ```

**Method 2: Via GitHub Actions (Advanced)**

Already configured if you have `.github/workflows/pages-build-deployment.yml`

### Custom Domain on GitHub Pages

1. **Add CNAME record** in your domain DNS:
   ```
   Type: CNAME
   Name: www
   Value: vinfastownersorg-cyber.github.io
   ```

2. **In GitHub Pages settings:**
   - Custom domain: `www.vinfastowners.org`
   - Check "Enforce HTTPS"
   - Wait for DNS check (can take up to 24 hours)

### Limitations

- ❌ No server-side processing
- ❌ Limited to 100GB bandwidth/month
- ❌ 1GB max repository size
- ✅ Good for static sites (perfect for this project)

---

## Option 2: Netlify (Recommended for Production)

**Best for:** Production deployments, automatic updates, CDN, free SSL

### Why Netlify?

- ✅ Free tier includes everything you need
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificate
- ✅ Global CDN (fast worldwide)
- ✅ Custom domain support
- ✅ Deploy previews for pull requests
- ✅ Form handling (useful for contact forms)
- ✅ Instant rollback if issues

### Setup Steps

**1. Create Netlify Account**

- Go to: https://netlify.com
- Click **"Sign up"**
- Choose **"Sign up with GitHub"** (recommended)
- Authorize Netlify to access GitHub

**2. Import Repository**

- Click **"Add new site"** → **"Import an existing project"**
- Choose **"Deploy with GitHub"**
- Select repository: `vinfastownersorg-cyber/avo-website`

**3. Configure Build Settings**

```
Build command: [leave empty]
Publish directory: [leave empty or type: /]
```

Since this is a static HTML site, no build step is needed.

**4. Deploy**

- Click **"Deploy site"**
- Netlify generates a random subdomain: `random-name-12345.netlify.app`
- First deployment takes 30-60 seconds

**5. Test Your Site**

- Click the generated URL
- Verify all pages load correctly
- Test navigation and bilingual toggle

**6. Configure Custom Domain**

**In Netlify:**
- Go to **Site settings** → **Domain management**
- Click **"Add custom domain"**
- Enter: `vinfastowners.org`
- Netlify will show DNS configuration

**In Your Domain Registrar (e.g., Namecheap, GoDaddy):**

**Option A: Netlify DNS (Recommended)**
```
Nameservers:
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

**Option B: Keep Your DNS (Use A Records)**
```
Type: A
Name: @
Value: 75.2.60.5

Type: A
Name: www
Value: 75.2.60.5
```

**7. Enable HTTPS**

- Netlify automatically provisions SSL certificate
- Takes 30 seconds to a few minutes
- Click **"Verify DNS configuration"**
- Check **"Force HTTPS"** when available

**8. Configure Auto-Deployment**

✅ **Already configured!**

Every time you push to `main` branch:
1. Netlify detects the push
2. Automatically builds and deploys
3. Site updates in ~30 seconds
4. You get email notification

### Netlify Configuration File (Optional)

Create `netlify.toml` in repository root for advanced config:

```toml
[build]
  publish = "."
  command = ""

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
    [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/*.css"
    [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "/*.js"
    [headers.values]
    Cache-Control = "public, max-age=31536000"
```

### Netlify Tips

**View Deployment Logs:**
- Dashboard → Deploys → Click on latest deploy
- See build log, deploy preview

**Rollback Deployment:**
- Deploys → Previous deploys → Click **"Publish deploy"**

**Branch Deploys:**
- Deploy preview for each pull request
- Test changes before merging

**Environment Variables:**
- If you add server-side functions later
- Site settings → Environment variables

---

## Option 3: Shared Hosting (cPanel/FTP)

**Best for:** Traditional hosting, existing hosting account

### Via cPanel File Manager

**1. Download Repository**

```bash
# Clone locally
git clone https://github.com/vinfastownersorg-cyber/avo-website.git
cd avo-website

# Create zip file (exclude .git folder)
zip -r website.zip . -x "*.git*" -x "*.github*"
```

**2. Upload to cPanel**

- Log into cPanel
- Navigate to **File Manager**
- Go to `public_html` or your domain folder
- Click **Upload**
- Select `website.zip`
- Wait for upload to complete

**3. Extract Files**

- Right-click `website.zip`
- Click **Extract**
- Extract to current directory
- Delete `website.zip` after extraction

**4. Set Permissions**

```
Folders: 755
Files: 644
```

- Right-click folders → **Change Permissions** → 755
- Right-click files → **Change Permissions** → 644

**5. Test**

- Visit: `https://yourdomain.com`
- Verify all pages work

### Via FTP (FileZilla, Cyberduck)

**1. Get FTP Credentials**

From your hosting provider:
- FTP Host: `ftp.yourdomain.com` or IP address
- Username: Usually your cPanel username
- Password: Your cPanel password
- Port: 21 (standard) or 22 (SFTP)

**2. Clone Repository Locally**

```bash
git clone https://github.com/vinfastownersorg-cyber/avo-website.git
cd avo-website
```

**3. Connect with FTP Client**

**FileZilla:**
- File → Site Manager → New Site
- Host: `ftp.yourdomain.com`
- Protocol: `FTP` or `SFTP`
- Encryption: `Use explicit FTP over TLS`
- User: your username
- Password: your password
- Click **Connect**

**4. Upload Files**

- Local site: Navigate to `avo-website` folder
- Remote site: Navigate to `public_html` or domain folder
- Select all files/folders
- Right-click → **Upload**
- Wait for transfer to complete

**5. Verify**

- Visit `https://yourdomain.com`
- Test all pages and navigation

### Auto-Update Script (Advanced)

Create `deploy.sh` on your server:

```bash
#!/bin/bash
cd /home/username/public_html
git pull origin main
```

Set up cron job in cPanel:
```
*/15 * * * * /home/username/deploy.sh
```

This pulls updates from GitHub every 15 minutes.

---

## Option 4: VPS/Cloud Server

**Best for:** Full control, custom configurations, high traffic

### Platforms

- **DigitalOcean** - Droplets from $5/month
- **Linode** - $5/month entry tier
- **Vultr** - $2.50/month minimum
- **AWS Lightsail** - $3.50/month
- **Google Cloud** - Free tier available

### Prerequisites

- VPS with Ubuntu 22.04 or similar
- SSH access
- Root or sudo privileges
- Domain pointed to server IP

### Full Setup Process

**1. Initial Server Setup**

```bash
# SSH into server
ssh root@your-server-ip

# Update system
apt update && apt upgrade -y

# Install required packages
apt install -y git nginx certbot python3-certbot-nginx

# Create website user (optional, for security)
adduser www-deploy
usermod -aG sudo www-deploy
```

**2. Clone Repository**

```bash
# Switch to deployment user
su - www-deploy

# Clone repository to web root
cd /var/www/
sudo git clone https://github.com/vinfastownersorg-cyber/avo-website.git vinfastowners
sudo chown -R www-deploy:www-data vinfastowners
cd vinfastowners
```

**3. Configure Nginx**

```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/vinfastowners
```

**Add this configuration:**

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name vinfastowners.org www.vinfastowners.org;

    root /var/www/vinfastowners;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Main location
    location / {
        try_files $uri $uri/ =404;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }
}
```

**Enable site:**

```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/vinfastowners /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

**4. Install SSL Certificate**

```bash
# Get Let's Encrypt SSL certificate
sudo certbot --nginx -d vinfastowners.org -d www.vinfastowners.org

# Follow prompts:
# Enter email address
# Agree to terms
# Choose to redirect HTTP to HTTPS (option 2)

# Verify auto-renewal
sudo certbot renew --dry-run
```

**5. Set Up Auto-Deployment**

**Create deployment script:**

```bash
sudo nano /usr/local/bin/deploy-website.sh
```

**Add:**

```bash
#!/bin/bash
cd /var/www/vinfastowners
git pull origin main
sudo systemctl reload nginx
echo "Deployment completed at $(date)" >> /var/log/website-deploy.log
```

**Make executable:**

```bash
sudo chmod +x /usr/local/bin/deploy-website.sh
```

**Option A: GitHub Webhook (Recommended)**

Install webhook listener:

```bash
npm install -g webhook
```

Create webhook config:

```bash
sudo nano /etc/webhook.conf
```

```json
[
  {
    "id": "deploy-website",
    "execute-command": "/usr/local/bin/deploy-website.sh",
    "command-working-directory": "/var/www/vinfastowners",
    "response-message": "Deploying website...",
    "trigger-rule": {
      "match": {
        "type": "payload-hash-sha1",
        "secret": "your-webhook-secret-here",
        "parameter": {
          "source": "header",
          "name": "X-Hub-Signature"
        }
      }
    }
  }
]
```

Start webhook service:

```bash
webhook -hooks /etc/webhook.conf -verbose
```

**In GitHub:**
- Repository → Settings → Webhooks → Add webhook
- Payload URL: `http://your-server-ip:9000/hooks/deploy-website`
- Content type: `application/json`
- Secret: your-webhook-secret-here
- Events: `Just the push event`

**Option B: Cron Job (Simpler)**

```bash
# Edit crontab
crontab -e

# Add line to pull updates every 15 minutes
*/15 * * * * /usr/local/bin/deploy-website.sh
```

**6. Firewall Configuration**

```bash
# Allow SSH, HTTP, HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable

# Verify
sudo ufw status
```

**7. Test Deployment**

```bash
# Visit your domain
curl -I https://vinfastowners.org

# Should return: HTTP/2 200
```

### Monitoring and Maintenance

**Check Nginx logs:**
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

**Check SSL certificate expiry:**
```bash
sudo certbot certificates
```

**Update website manually:**
```bash
cd /var/www/vinfastowners
git pull origin main
sudo systemctl reload nginx
```

---

## Domain Configuration

### DNS Records Setup

**For Netlify/Vercel (Recommended):**

Use their nameservers (see provider instructions above)

**For VPS/Shared Hosting:**

**A Records (IPv4):**
```
Type: A
Name: @
Value: YOUR_SERVER_IP
TTL: 3600
```

```
Type: A
Name: www
Value: YOUR_SERVER_IP
TTL: 3600
```

**AAAA Records (IPv6, if available):**
```
Type: AAAA
Name: @
Value: YOUR_IPv6_ADDRESS
TTL: 3600
```

**CNAME for www (Alternative to A record for www):**
```
Type: CNAME
Name: www
Value: vinfastowners.org
TTL: 3600
```

### Common Domain Registrars

**Namecheap:**
- Dashboard → Domain List → Manage → Advanced DNS

**GoDaddy:**
- My Products → DNS → Manage Zones

**Cloudflare:**
- Select domain → DNS → Records

**Google Domains:**
- My domains → DNS

### DNS Propagation

- Changes take 1-48 hours to propagate globally
- Check status: https://dnschecker.org
- Use `dig` command: `dig vinfastowners.org`

---

## SSL/HTTPS Setup

### Netlify/Vercel (Automatic)

✅ **Done automatically** - no action needed

### Let's Encrypt (Free SSL)

**For VPS:**

Already covered in VPS setup section above.

**For cPanel:**

- cPanel → SSL/TLS Status
- Click **Run AutoSSL**
- Wait for certificate provisioning

**Manual Certificate:**

```bash
# Install Certbot
sudo apt install certbot

# Get certificate (for Nginx)
sudo certbot --nginx -d vinfastowners.org -d www.vinfastowners.org

# For Apache
sudo certbot --apache -d vinfastowners.org -d www.vinfastowners.org
```

### Force HTTPS

**Nginx:**
Already included in config above.

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST%{REQUEST_URI} [L,R=301]
```

**Netlify:**
- Site settings → Domain management → HTTPS
- Check **"Force HTTPS"**

---

## Auto-Deployment from GitHub

### Netlify/Vercel

✅ **Already automatic** - deploys on every push to `main`

### VPS with Webhook

See "Option 4: VPS/Cloud Server" section above for webhook setup.

### Shared Hosting with Git

**If your host supports SSH:**

```bash
# SSH to server
ssh user@yourdomain.com

# Navigate to web root
cd public_html

# Initialize git (first time only)
git init
git remote add origin https://github.com/vinfastownersorg-cyber/avo-website.git
git pull origin main

# Create update script
nano update.sh
```

**Add to update.sh:**
```bash
#!/bin/bash
cd /home/username/public_html
git pull origin main
```

**Make executable and run:**
```bash
chmod +x update.sh
./update.sh
```

**Set up cron job:**
```bash
crontab -e

# Add: Pull updates every 15 minutes
*/15 * * * * /home/username/public_html/update.sh >> /home/username/deploy.log 2>&1
```

---

## Testing Deployment

### Pre-Deployment Checklist

- [ ] All HTML files present
- [ ] CSS and JavaScript loading correctly
- [ ] Images displaying
- [ ] Navigation working on all pages
- [ ] Bilingual toggle functioning (EN/FR)
- [ ] Forms submitting (if applicable)
- [ ] Email obfuscation working
- [ ] No console errors (F12 → Console)
- [ ] Mobile responsive (test various screen sizes)
- [ ] HTTPS working (green padlock)
- [ ] All internal links working
- [ ] External links opening correctly

### Testing Tools

**1. Browser Testing**

Desktop browsers:
- Chrome
- Firefox
- Safari
- Edge

Mobile browsers:
- iOS Safari
- Chrome Mobile
- Samsung Internet

**2. Responsive Design**

```
Chrome DevTools: F12 → Toggle device toolbar
Sizes to test:
- 320px (iPhone SE)
- 375px (iPhone 12)
- 768px (iPad)
- 1024px (iPad Pro)
- 1920px (Desktop)
```

**3. Performance Testing**

- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **WebPageTest:** https://www.webpagetest.org/

**4. SSL/Security Testing**

- **SSL Labs:** https://www.ssllabs.com/ssltest/
- **Security Headers:** https://securityheaders.com/

**5. Link Checking**

```bash
# Install link checker
npm install -g broken-link-checker

# Check all links
blc https://vinfastowners.org -ro
```

**6. Accessibility**

- **WAVE:** https://wave.webaim.org/
- **aXe DevTools** (browser extension)
- **Lighthouse** (Chrome DevTools → Lighthouse)

### Common Issues

**Issue: Images not loading**
- Check file paths (case-sensitive on Linux)
- Verify images committed to GitHub
- Check `.gitignore` isn't excluding images

**Issue: CSS not applying**
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check CSS file path in HTML
- Verify cache-busting parameter updated

**Issue: 404 errors**
- Check file names match exactly (case-sensitive)
- Ensure all files uploaded
- Check server configuration

**Issue: HTTPS certificate errors**
- Wait for DNS propagation
- Verify domain pointed to correct IP
- Check certificate includes www and non-www

---

## Troubleshooting

### Deployment Failed

**Netlify/Vercel:**
- Check deploy logs in dashboard
- Look for error messages
- Verify repository permissions

**FTP:**
- Verify credentials correct
- Check disk space on server
- Ensure correct remote directory

### Site Not Loading

**Check DNS:**
```bash
dig vinfastowners.org
nslookup vinfastowners.org
```

**Check if server is up:**
```bash
ping vinfastowners.org
curl -I https://vinfastowners.org
```

**Check web server:**
```bash
# Nginx
sudo systemctl status nginx
sudo nginx -t

# Apache
sudo systemctl status apache2
sudo apachectl configtest
```

### SSL Certificate Issues

**Certificate not installing:**
- Verify domain DNS points to server
- Check firewall allows port 80 and 443
- Ensure web server running

**Mixed content warnings:**
- Change all `http://` to `https://` or `//` (protocol-relative)
- Update external resources to HTTPS

**Certificate expired:**
```bash
# Renew Let's Encrypt
sudo certbot renew
sudo systemctl reload nginx
```

### Performance Issues

**Slow loading:**
- Enable gzip compression
- Optimize images (compress before upload)
- Use CDN (Cloudflare, Netlify CDN)
- Enable browser caching

**High bandwidth:**
- Check for bot traffic
- Enable Cloudflare (free plan)
- Optimize image sizes

---

## Quick Start Summary

### For Quick Testing (5 minutes)

**GitHub Pages:**
1. Repository → Settings → Pages
2. Source: `main` branch, `/ (root)` folder
3. Save
4. Visit `https://vinfastownersorg-cyber.github.io/avo-website/`

### For Production (15 minutes)

**Netlify:**
1. Sign up at netlify.com with GitHub
2. New site → Import from GitHub → Select repo
3. Deploy site
4. Add custom domain in settings
5. Update DNS to Netlify nameservers
6. Done! Auto-deploys on every push.

### For Traditional Hosting (30 minutes)

**cPanel/FTP:**
1. Clone repo locally: `git clone https://github.com/vinfastownersorg-cyber/avo-website.git`
2. Zip files (exclude .git folder)
3. Upload to cPanel File Manager or via FTP
4. Extract in `public_html`
5. Set permissions: folders 755, files 644
6. Install SSL in cPanel
7. Test site

---

## Recommended Setup

**For VinFastOwners.org Production:**

✅ **Use Netlify:**
- Free
- Automatic deployments from GitHub
- Global CDN (fast worldwide)
- Free SSL certificate
- Zero server maintenance
- Deploy previews for testing
- Instant rollback capability

**Backup/Staging:**
- GitHub Pages for testing branches
- Easy to set up staging URLs

---

## Getting Help

### Resources

- **Netlify Docs:** https://docs.netlify.com/
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Let's Encrypt:** https://letsencrypt.org/
- **Nginx Docs:** https://nginx.org/en/docs/

### Support

- **Discord:** Post in an appropriate Discord channel
- **Email:** board@vinfastowners.org
- **GitHub Issues:** Report deployment problems

### Deployment Checklist

Save this checklist for each deployment:

```
Deployment for: vinfastowners.org
Date: YYYY-MM-DD
Method: [Netlify/VPS/Shared/Pages]

Pre-deployment:
[ ] Repository up to date
[ ] All changes committed
[ ] Changes tested locally
[ ] No broken links
[ ] Images optimized
[ ] Cache-busting updated

Deployment:
[ ] Files uploaded/deployed
[ ] SSL certificate active
[ ] HTTPS redirect enabled
[ ] Custom domain configured
[ ] DNS propagated

Testing:
[ ] Homepage loads
[ ] All pages accessible
[ ] Navigation works
[ ] Language toggle works
[ ] Mobile responsive
[ ] Forms functional
[ ] No console errors
[ ] Performance acceptable

Post-deployment:
[ ] Auto-deployment configured
[ ] Monitoring enabled
[ ] Team notified
[ ] Documentation updated
```

---

**Last Updated:** 2025-11-14

---

**Questions?**
- Check this guide first
- Review hosting provider documentation
- Ask in an appropriate Discord channel
- Email board@vinfastowners.org

**Happy deploying! 🚀**

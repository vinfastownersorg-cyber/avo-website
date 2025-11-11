# Deploying AVO Website to GitHub Pages

This guide will help you deploy the AVO website to GitHub Pages for **free hosting** with a custom domain (vinfastowners.org).

## Quick Deploy (5 Minutes)

### Step 1: Create GitHub Repository

1. Go to **https://github.com** and log in
2. Click the **"+"** button (top right) → **"New repository"**
3. Repository settings:
   - **Name**: `avo-website` (or `vinfastowners-website`)
   - **Description**: "Association of VinFast Owners North America - Official Website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README (we already have files)
4. Click **"Create repository"**

### Step 2: Push Code to GitHub

GitHub will show you commands. Run these in your terminal:

```bash
# Navigate to website folder
cd /Users/michaelbivens/Vinfast/vinfastowners-website

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/avo-website.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

**Example** (if your username is "johndoe"):
```bash
git remote add origin https://github.com/johndoe/avo-website.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your GitHub repository, click **"Settings"** (top menu)
2. Scroll down and click **"Pages"** (left sidebar)
3. Under **"Source"**:
   - Branch: Select `main`
   - Folder: Select `/ (root)`
4. Click **"Save"**
5. Wait 1-2 minutes for deployment

Your site will be live at: `https://YOUR_USERNAME.github.io/avo-website/`

## Custom Domain Setup (vinfastowners.org)

### Step 1: Configure GitHub Pages for Custom Domain

1. In GitHub Pages settings (Settings → Pages)
2. Under **"Custom domain"**, enter: `vinfastowners.org`
3. Click **"Save"**
4. Check **"Enforce HTTPS"** (wait a few minutes for it to become available)

### Step 2: Configure DNS at Your Domain Registrar

Go to where you registered `vinfastowners.org` and add these DNS records:

**Option A: Using A Records (Recommended)**

Add these 4 A records pointing to GitHub Pages servers:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Add CNAME for www subdomain:**

```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**Option B: Using CNAME Record (Alternative)**

```
Type: CNAME
Name: @
Value: YOUR_USERNAME.github.io
```

### Step 3: Wait for DNS Propagation

- DNS changes can take 1-24 hours to propagate
- Check status at: https://www.whatsmydns.net/#A/vinfastowners.org
- Once propagated, your site will be live at **https://vinfastowners.org**

## Updating the Website

After making changes to your website files:

```bash
# Stage changes
git add .

# Commit with a message
git commit -m "Update board member profiles"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy within 1-2 minutes.

## Common DNS Registrars Setup

### GoDaddy

1. Go to **DNS Management**
2. Delete existing A and CNAME records for `@` and `www`
3. Add the 4 GitHub A records above
4. Add CNAME record for `www`

### Namecheap

1. Go to **Advanced DNS**
2. Delete default parking page records
3. Add the 4 GitHub A records
4. Add CNAME record for `www`

### Cloudflare

1. Go to **DNS** tab
2. Delete existing A/CNAME records
3. Add the 4 GitHub A records
4. Add CNAME record for `www`
5. Set SSL/TLS mode to **"Full"**

### Google Domains

1. Go to **DNS** settings
2. Under **Custom resource records**
3. Add the 4 A records
4. Add CNAME for `www`

## Verifying Deployment

### Check 1: GitHub Pages Status

1. Go to Settings → Pages
2. You should see: **"Your site is live at https://vinfastowners.org"**

### Check 2: Test the Website

Visit these URLs to confirm everything works:

- Homepage: `https://vinfastowners.org`
- Board: `https://vinfastowners.org/board.html`
- Documents: `https://vinfastowners.org/documents.html`
- Join: `https://vinfastowners.org/join.html`

### Check 3: HTTPS Certificate

- Ensure the padlock icon appears in browser
- If not, wait a few hours and check "Enforce HTTPS" in GitHub Pages settings

## Advanced: Using GitHub Actions for Auto-Deploy

GitHub Pages automatically deploys on push, but you can add custom build steps if needed in the future.

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## Troubleshooting

### Issue: "404 Not Found"

**Solution**:
- Make sure `index.html` is in the root directory
- Check that GitHub Pages is enabled with `main` branch, `/ (root)` folder

### Issue: "DNS_PROBE_FINISHED_NXDOMAIN"

**Solution**:
- DNS not propagated yet - wait up to 24 hours
- Verify DNS records are correct at your registrar
- Use https://www.whatsmydns.net to check propagation

### Issue: "Your connection is not private"

**Solution**:
- Wait for GitHub to issue SSL certificate (up to 24 hours)
- Make sure "Enforce HTTPS" is checked in GitHub Pages settings
- Try accessing via http first, then https later

### Issue: CSS/Images Not Loading

**Solution**:
- All links in HTML should be relative (e.g., `css/styles.css`, not `/css/styles.css`)
- Our website already uses relative links, so this should work fine

### Issue: Custom Domain Not Working

**Solution**:
- Create `CNAME` file in root with domain name:
  ```bash
  echo "vinfastowners.org" > CNAME
  git add CNAME
  git commit -m "Add CNAME for custom domain"
  git push
  ```

## Free Alternative: Netlify

If you prefer Netlify over GitHub Pages:

1. Go to **https://netlify.com**
2. Drag & drop the `vinfastowners-website` folder
3. Configure custom domain in Netlify settings
4. Netlify handles DNS automatically (easier than GitHub Pages)

See `DEPLOYMENT_GUIDE.md` for full Netlify instructions.

## Costs

**GitHub Pages**:
- ✅ Hosting: FREE
- ✅ HTTPS: FREE
- ✅ Bandwidth: FREE (soft limit: 100GB/month)
- ✅ Builds: FREE (100 builds/hour)
- 💰 Domain: $12-15/year (vinfastowners.org)

**Total: ~$12-15/year for domain only**

## Maintenance Checklist

### Monthly
- [ ] Update board minutes after each meeting
- [ ] Add new events to events section
- [ ] Review and approve new member signups

### Quarterly
- [ ] Update member count in stats bar
- [ ] Review and update bylaws if needed
- [ ] Check all links still work

### Annually
- [ ] Renew vinfastowners.org domain
- [ ] Update board member profiles after elections
- [ ] Publish annual financial report

## Summary

Your AVO website is ready for GitHub Pages deployment:

✅ Git repository initialized
✅ All files committed
✅ .gitignore configured
✅ Ready to push to GitHub

**Next Steps:**
1. Create GitHub repository
2. Push code using commands above
3. Enable GitHub Pages in repository settings
4. Configure DNS for vinfastowners.org
5. Site goes live!

**Need Help?**
- GitHub Pages Docs: https://docs.github.com/pages
- GitHub Community: https://github.community
- DNS Help: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Questions?** Contact the board at board@vinfastowners.org or ask in Discord #tech-support

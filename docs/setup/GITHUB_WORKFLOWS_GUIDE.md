# GitHub Workflows & Actions Guide

Complete guide for working with GitHub Actions workflows in the VinFastOwners.org repository.

---

## Table of Contents

- [What are GitHub Workflows?](#what-are-github-workflows)
- [Active Workflows](#active-workflows)
- [One-Time Setup: GitHub Token](#one-time-setup-github-token)
- [Working with Workflows](#working-with-workflows)
- [Viewing Workflow Runs](#viewing-workflow-runs)
- [Troubleshooting](#troubleshooting)
- [Workflow Files Reference](#workflow-files-reference)

---

## What are GitHub Workflows?

GitHub Actions workflows are automated processes that run on GitHub's servers. Our workflows handle:

- **Daily VinFast News** - Fetches and posts news articles to Discord
- **Daily Stock Prices** - Posts VinFast & VinGroup stock prices to Discord
- **YouTube Monitor** - Detects new VinFast owner videos and posts to Discord
- **Pull Request Checks** - Validates code quality and security

### How They Work

1. Workflows are defined in `.github/workflows/*.yml` files
2. They run on a schedule (cron) or on specific events (push, PR, manual trigger)
3. They execute Python scripts that fetch data and post to Discord
4. Secrets (API keys, webhook URLs) are stored securely in GitHub

---

## Active Workflows

### 1. Daily VinFast News Updates
- **File:** `.github/workflows/daily-vinfast-news.yml`
- **Schedule:** Daily at 12:00 AM UTC (7:00 PM EST)
- **Purpose:** Fetches latest VinFast news from multiple sources
- **Output:** Posts top 5 articles to Discord #stock-and-news

### 2. Daily Stock Prices - VinFast & VinGroup
- **File:** `.github/workflows/daily-stock-prices.yml`
- **Schedule:** Daily at 1:00 PM UTC (8:00 AM EST)
- **Purpose:** Fetches VFS and VIC stock prices
- **Output:** Posts price summary to Discord #stock-and-news

### 3. YouTube VinFast Content Monitor
- **File:** `.github/workflows/youtube-monitor.yml`
- **Schedule:** Twice daily - 5:00 PM UTC (12:00 PM EST) and 1:00 AM UTC (8:00 PM EST)
- **Purpose:** Monitors priority VinFast owner YouTube channels for new videos
- **Output:** Posts video announcements to Discord #youtube

### 4. Pull Request Checks
- **File:** `.github/workflows/pr-checks.yml`
- **Trigger:** On pull request creation/update
- **Purpose:** Validates HTML, checks for security issues, runs tests
- **Output:** Pass/fail status on PR

---

## One-Time Setup: GitHub Token

To edit workflows and trigger them manually, you need a GitHub Personal Access Token (PAT) with proper permissions.

### Why You Need This

GitHub requires the `workflow` scope to:
- Push changes to workflow files (`.github/workflows/*.yml`)
- Manually trigger workflow runs
- View detailed workflow logs

**You only need to do this setup ONCE.** The token will persist across sessions.

### Step 1: Create GitHub Personal Access Token

1. **Go to GitHub Settings:**
   - Navigate to: https://github.com/settings/tokens
   - Or: GitHub → Profile Picture → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate new token (classic):**
   - Click **"Generate new token"** → **"Generate new token (classic)"**
   - **Note:** Enter "VinFast Workflows" or similar
   - **Expiration:** Choose "No expiration" or 1 year

3. **Select scopes:**
   - ✅ **`repo`** (Full control of private repositories)
     - This includes: `repo:status`, `repo_deployment`, `public_repo`, `repo:invite`, `security_events`
   - ✅ **`workflow`** (Update GitHub Action workflows)

   **Only these two scopes are needed.** Do not select additional scopes.

4. **Generate token:**
   - Scroll down and click **"Generate token"**
   - **Copy the token immediately** - you won't see it again!
   - Token format: `ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

### Step 2: Configure GitHub CLI with Token

**In VS Code or Terminal:**

```bash
# Authenticate with GitHub CLI
gh auth login

# Follow the prompts:
# ? What account do you want to log into? GitHub.com
# ? What is your preferred protocol for Git operations? HTTPS
# ? Authenticate Git with your GitHub credentials? Yes
# ? How would you like to authenticate GitHub CLI? Paste an authentication token

# Paste your token when prompted
ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Verify authentication:**

```bash
gh auth status
```

**Expected output:**
```
✓ Logged in to github.com as your-username (oauth_token)
✓ Git operations for github.com configured to use https protocol.
✓ Token: ghp_************************************
✓ Token scopes: repo, workflow
```

### Step 3: Test Your Access

**Verify you can edit workflows:**

```bash
# This should work without permission errors
gh workflow list
```

**Expected output:**
```
Daily Stock Prices - VinFast & VinGroup	active	206017014
Daily VinFast News Updates	active	206019586
Pull Request Checks	active	206031658
YouTube VinFast Content Monitor	active	206059201
```

**Test manual workflow trigger:**

```bash
# Trigger the news workflow
gh workflow run daily-vinfast-news.yml
```

**Expected output:**
```
✓ Created workflow_dispatch event for daily-vinfast-news.yml at main
```

✅ **Setup complete!** You're now ready to work with workflows.

---

## Working with Workflows

### Manually Trigger a Workflow

**Trigger with `gh` CLI:**

```bash
# News workflow
gh workflow run daily-vinfast-news.yml

# Stock prices workflow
gh workflow run daily-stock-prices.yml

# YouTube monitor
gh workflow run youtube-monitor.yml
```

**View the run:**

```bash
# List recent runs
gh run list --workflow=daily-vinfast-news.yml --limit 5

# Watch a run in real-time
gh run watch
```

### Edit a Workflow File

**Example: Update news workflow schedule**

1. **Open file in VS Code:**
   ```bash
   code .github/workflows/daily-vinfast-news.yml
   ```

2. **Make changes:**
   ```yaml
   on:
     schedule:
       # Change from midnight to 6 AM UTC
       - cron: '0 6 * * *'
   ```

3. **Commit and push:**
   ```bash
   git add .github/workflows/daily-vinfast-news.yml
   git commit -m "Change news workflow to run at 6 AM UTC"
   git push origin main
   ```

   **This will work** because you have the `workflow` scope! ✅

### Common Workflow Edits

#### Update Schedule (Cron)

```yaml
on:
  schedule:
    # Run at 9:00 AM EST (2:00 PM UTC)
    - cron: '0 14 * * *'

    # Run twice daily: 6 AM and 6 PM EST
    - cron: '0 11 * * *'  # 6 AM EST
    - cron: '0 23 * * *'  # 6 PM EST
```

**Cron format:** `minute hour day month weekday`
- `0 0 * * *` = Midnight UTC daily
- `0 12 * * *` = Noon UTC daily
- `0 0 * * 1` = Midnight UTC every Monday

**Timezone:** All cron times are in UTC. Convert EST/EDT:
- EST = UTC - 5 hours
- EDT = UTC - 4 hours

#### Add/Update Discord Webhook

Workflows use GitHub Secrets for Discord webhooks. Never hardcode webhooks!

**To update a secret:**

```bash
# List current secrets
gh secret list

# Update a secret
gh secret set DISCORD_WEBHOOK_URL

# Paste webhook URL when prompted
```

#### Add a New YouTube Channel

**Edit:** `.github/workflows/youtube-monitor.yml`

**Find the channel ID first:**

```bash
# Method 1: From a video URL
curl -s "https://www.youtube.com/watch?v=VIDEO_ID" | grep -o '"channelId":"[^"]*"' | head -1 | cut -d'"' -f4

# Method 2: Visit channel page
# https://www.youtube.com/@ChannelHandle
# View page source, search for "channelId"
```

**Add to workflow:**

```python
PRIORITY_OWNER_CHANNELS = {
    'Natalie Ly': 'UCVt-MpNUSwjHDS9RZ0lf2EA',
    'SuperNamn': 'UCagFWLt5ensDownQAaph2RQ',
    'New Channel': 'UC_NEW_CHANNEL_ID_HERE',  # Add this line
}
```

**Commit and push:**

```bash
git add .github/workflows/youtube-monitor.yml
git commit -m "Add new YouTube channel to monitor"
git push origin main
```

---

## Viewing Workflow Runs

### List Recent Runs

```bash
# All workflows
gh run list --limit 10

# Specific workflow
gh run list --workflow=youtube-monitor.yml --limit 5

# Only failed runs
gh run list --status failure --limit 10
```

### View Run Details

```bash
# View summary
gh run view 19353251751

# View full logs
gh run view 19353251751 --log

# View logs for specific job
gh run view --job=55369399051 --log

# Follow a running workflow
gh run watch
```

### Check Workflow Status

```bash
# View all workflows
gh workflow list

# View specific workflow runs
gh workflow view daily-vinfast-news.yml

# Enable/disable a workflow
gh workflow enable daily-vinfast-news.yml
gh workflow disable daily-vinfast-news.yml
```

---

## Troubleshooting

### Error: Permission denied when pushing workflow

**Error message:**
```
! [remote rejected] main -> main (refusing to allow an OAuth App to create
or update workflow `.github/workflows/youtube-monitor.yml` without `workflow` scope)
```

**Solution:**
You need to set up a GitHub token with `workflow` scope. See [One-Time Setup](#one-time-setup-github-token) above.

### Error: Workflow not found

**Error message:**
```
could not find workflow 'daily-news.yml'
```

**Solution:**
Check exact filename:
```bash
ls .github/workflows/
```

Use the full filename:
```bash
gh workflow run daily-vinfast-news.yml
```

### Error: Workflow dispatch event not configured

**Error message:**
```
workflow does not have 'workflow_dispatch' trigger
```

**Solution:**
Add manual trigger to workflow file:

```yaml
on:
  schedule:
    - cron: '0 0 * * *'
  workflow_dispatch:  # Add this line
```

### Workflow runs but fails immediately

**Check logs:**

```bash
# Get recent run ID
gh run list --workflow=youtube-monitor.yml --limit 1

# View logs
gh run view RUN_ID --log
```

**Common issues:**
- Missing GitHub Secret (API key, webhook URL)
- Invalid Python syntax
- Network timeout
- API rate limiting

**Fix missing secrets:**

```bash
# List secrets
gh secret list

# Set missing secret
gh secret set SECRET_NAME
```

### Workflow not running on schedule

**Check workflow status:**

```bash
gh workflow view youtube-monitor.yml
```

**Ensure workflow is enabled:**

```bash
gh workflow enable youtube-monitor.yml
```

**Note:** Scheduled workflows only run on the default branch (`main`).

### How to re-authenticate GitHub CLI

**If token expires or you need to change it:**

```bash
# Logout
gh auth logout

# Login again
gh auth login

# Paste your new token when prompted
```

---

## Workflow Files Reference

### File Structure

```
.github/
└── workflows/
    ├── daily-stock-prices.yml      # Stock price bot
    ├── daily-vinfast-news.yml      # News aggregator bot
    ├── youtube-monitor.yml         # YouTube content monitor
    └── pr-checks.yml               # Pull request validation
```

### Workflow Anatomy

**Example workflow structure:**

```yaml
name: Workflow Name

# When to run
on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight UTC
  workflow_dispatch:     # Allow manual trigger

# What to do
jobs:
  job-name:
    name: Job Display Name
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: pip install requests feedparser

      - name: Run script
        env:
          API_KEY: ${{ secrets.API_KEY }}
        run: python3 script.py
```

### GitHub Secrets Used

| Secret Name | Used By | Purpose |
|-------------|---------|---------|
| `YOUTUBE_API_KEY` | youtube-monitor.yml | YouTube Data API v3 access |
| `DISCORD_WEBHOOK_URL` | youtube-monitor.yml | Post videos to #youtube |
| `DISCORD_STOCK_WEBHOOK_URL` | daily-stock-prices.yml<br>daily-vinfast-news.yml | Post to #stock-and-news |

**View secrets:**
```bash
gh secret list
```

**Set/update a secret:**
```bash
gh secret set SECRET_NAME
# Paste value when prompted
```

**Delete a secret:**
```bash
gh secret delete SECRET_NAME
```

---

## Best Practices

### 1. Always Test Workflows Manually First

Before committing workflow changes:

```bash
# Make changes to workflow file
code .github/workflows/youtube-monitor.yml

# Test with manual trigger
gh workflow run youtube-monitor.yml

# Watch the run
gh run watch

# Check logs
gh run view --log
```

### 2. Use Descriptive Commit Messages

```bash
# Good
git commit -m "Update YouTube monitor to check every 6 hours"
git commit -m "Add new VinFast owner channel: TechReviewer"
git commit -m "Fix news workflow Discord webhook formatting"

# Bad
git commit -m "Update workflow"
git commit -m "Changes"
```

### 3. Monitor Workflow Runs

**Set up notifications:**
- GitHub emails you when scheduled workflows fail
- Check Discord for bot posts to verify workflows are working

**Regular checks:**
```bash
# Check for failed runs weekly
gh run list --status failure --limit 20
```

### 4. Document Workflow Changes

When adding/modifying workflows, update documentation:
- Add notes to workflow YAML file comments
- Update bot setup guides in `docs/bots/`
- Post major changes in Discord

### 5. Keep Secrets Secure

**Never commit:**
- API keys
- Webhook URLs
- Passwords
- Tokens

**Always use GitHub Secrets:**
```yaml
env:
  API_KEY: ${{ secrets.API_KEY }}  # ✅ Correct
  API_KEY: 'abc123xyz'             # ❌ WRONG!
```

---

## Quick Reference

### Common Commands

```bash
# List all workflows
gh workflow list

# List recent runs
gh run list --limit 10

# Trigger workflow manually
gh workflow run WORKFLOW_FILE.yml

# Watch a running workflow
gh run watch

# View workflow logs
gh run view RUN_ID --log

# List secrets
gh secret list

# Set a secret
gh secret set SECRET_NAME
```

### Cron Schedule Examples

```yaml
# Daily at midnight UTC
- cron: '0 0 * * *'

# Daily at 9 AM EST (2 PM UTC)
- cron: '0 14 * * *'

# Twice daily: 8 AM and 8 PM EST
- cron: '0 13 * * *'  # 8 AM EST
- cron: '0 1 * * *'   # 8 PM EST

# Every 6 hours
- cron: '0 */6 * * *'

# Weekdays only at noon UTC
- cron: '0 12 * * 1-5'

# First day of month at midnight
- cron: '0 0 1 * *'
```

### Timezone Conversion

**EST/EDT → UTC:**
- EST (Winter): Add 5 hours
  - 8:00 AM EST = 1:00 PM UTC (13:00)
  - 7:00 PM EST = 12:00 AM UTC (00:00)
- EDT (Summer): Add 4 hours
  - 8:00 AM EDT = 12:00 PM UTC (12:00)
  - 7:00 PM EDT = 11:00 PM UTC (23:00)

---

## Getting Help

### Resources

- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **GitHub CLI Docs:** https://cli.github.com/manual/
- **Cron Expression Generator:** https://crontab.guru/
- **Python Docs:** https://docs.python.org/3/

### Support

- **Discord:** Post in an appropriate Discord channel
- **Email:** board@vinfastowners.org
- **GitHub Issues:** Report workflow bugs with detailed logs

### Debugging Workflow Issues

**Step 1: Get logs**
```bash
gh run list --workflow=WORKFLOW.yml --limit 1
gh run view RUN_ID --log
```

**Step 2: Check secrets**
```bash
gh secret list
```

**Step 3: Test locally**
```bash
# Copy Python code from workflow
# Create test.py
# Add secrets as environment variables
export API_KEY="your-key-here"
python3 test.py
```

**Step 4: Ask for help**
- Include workflow name
- Include error messages from logs
- Include what you've already tried

---

## Workflow Change Checklist

Before pushing workflow changes:

- [ ] Tested manually with `gh workflow run`
- [ ] Checked logs with `gh run view --log`
- [ ] Verified secrets are set correctly
- [ ] Updated documentation if needed
- [ ] Used clear commit message
- [ ] Notified team in Discord if major change

---

**Last Updated:** 2025-11-14

---

**Questions?**
- Check this guide first
- Search GitHub Actions documentation
- Ask in an appropriate Discord channel
- Email board@vinfastowners.org

**Happy automating! 🤖**

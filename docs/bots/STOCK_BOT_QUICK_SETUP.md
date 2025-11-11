# Stock Price Bot - Quick Setup (5 Minutes)

## What You're Setting Up

Daily automated Discord posts with VinFast (VFS) and VinGroup (VIC) stock closing prices.

---

## Setup Steps

### 1. Create Discord Webhook (2 min)

1. Go to Discord channel (e.g., #stocks)
2. Click ⚙️ → **Integrations** → **Webhooks**
3. Click **New Webhook**
4. Name it: `Stock Bot`
5. Click **Copy Webhook URL**
6. Click **Save**

**Keep the webhook URL - you need it for step 2!**

---

### 2. Add Webhook to GitHub (2 min)

1. Go to: https://github.com/vinfastownersorg-cyber/avo-website/settings/secrets/actions

2. Click **New repository secret**

3. Fill in:
   - **Name:** `DISCORD_STOCK_WEBHOOK_URL`
   - **Secret:** [Paste your webhook URL]

4. Click **Add secret**

---

### 3. Test It (1 min)

1. Go to: https://github.com/vinfastownersorg-cyber/avo-website/actions

2. Click **Daily Stock Prices - VinFast & VinGroup**

3. Click **Run workflow** → **Run workflow**

4. Wait 30 seconds

5. Check Discord - you should see stock prices! ✅

---

## That's It!

**It will now post automatically:**
- Every weekday (Monday-Friday)
- At 4:00 PM EST / 1:00 PM PST
- After US market close

---

## Quick Reference

**Manual run:**
GitHub → Actions → Daily Stock Prices → Run workflow

**Change schedule:**
Edit `.github/workflows/daily-stock-prices.yml`

**Disable:**
GitHub → Actions → Daily Stock Prices → ⋯ → Disable workflow

**Change channel:**
Create new webhook in different channel, update secret

---

## Example Output

```
📊 VinFast & VinGroup Stock Update

📈 Daily Closing Prices - November 11, 2024

🟢 VinFast Auto (VFS)
   Price: $4.25
   Change: +$0.15 (+3.66%)

🔴 VinGroup (VIC)
   Price: 45,200 ₫
   Change: -800 ₫ (-1.74%)
```

---

## Troubleshooting

**Nothing posts to Discord?**
- Check webhook URL is correct in GitHub secrets
- Check webhook is enabled in Discord
- Try manual run to test

**See full documentation:** STOCK_PRICE_BOT_SETUP.md

---

## Cost

**FREE!** Everything is free:
- GitHub Actions (2,000 minutes/month free)
- Yahoo Finance API (free, no key needed)
- Discord webhooks (free, unlimited)

---

**Questions? Check STOCK_PRICE_BOT_SETUP.md or ask in Discord #development**

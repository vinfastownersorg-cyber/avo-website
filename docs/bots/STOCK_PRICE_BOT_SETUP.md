# Stock Price Bot Setup Guide

This guide explains how to set up the automated daily stock price bot that posts VinFast and VinGroup stock prices to Discord.

---

## What It Does

**Automatically posts to Discord:**
- VinFast Auto (VFS) - NASDAQ stock price
- VinGroup (VIC) - Vietnam Stock Exchange price
- Daily closing prices
- Price changes and percentage changes
- Color-coded (green for up, red for down)
- Runs Monday-Friday after market close

**Example Discord Message:**
```
📊 VinFast & VinGroup Stock Update

📈 Daily Closing Prices - November 11, 2024

🟢 VinFast Auto (VFS) (VFS)
   Price: $4.25
   Change: +$0.15 (+3.66%)

🔴 VinGroup (VIC) (VIC.VN)
   Price: 45,200 ₫
   Change: -800 ₫ (-1.74%)

Data from Yahoo Finance | Automated by VinFastOwners.org
```

---

## Setup Instructions

### Step 1: Create Discord Webhook (5 minutes)

1. **Go to your Discord server**
2. **Select the channel** where you want stock prices posted (e.g., #stocks, #market-updates, #general)
3. **Click the gear icon** next to channel name → **Integrations**
4. **Click Webhooks** → **New Webhook**
5. **Configure webhook:**
   - Name: `Stock Bot` (or whatever you prefer)
   - Choose channel
   - Optional: Upload AVO logo as avatar
6. **Click "Copy Webhook URL"** - You'll need this!
7. **Click Save**

**Webhook URL format:** `https://discord.com/api/webhooks/123456789/abcdefgh...`

---

### Step 2: Add Webhook to GitHub Secrets (3 minutes)

1. **Go to your GitHub repository:** https://github.com/vinfastownersorg-cyber/avo-website

2. **Click Settings** (top right)

3. **Click "Secrets and variables"** (left sidebar) → **Actions**

4. **Click "New repository secret"** (green button)

5. **Add the secret:**
   - Name: `DISCORD_STOCK_WEBHOOK_URL`
   - Value: [Paste the Discord webhook URL you copied]
   - Click **Add secret**

**Important:** The name must be exactly `DISCORD_STOCK_WEBHOOK_URL`

---

### Step 3: Test the Workflow (2 minutes)

1. **Go to your GitHub repository**

2. **Click the "Actions" tab** (top menu)

3. **Click "Daily Stock Prices - VinFast & VinGroup"** (left sidebar)

4. **Click "Run workflow"** dropdown (right side)

5. **Click the green "Run workflow" button**

6. **Wait 30-60 seconds**

7. **Check your Discord channel** - you should see the stock prices!

**If it works:** ✅ Setup complete!
**If it doesn't work:** See troubleshooting section below

---

## Schedule

**Default schedule:** Runs automatically Monday-Friday at:
- **4:00 PM EST** (9:00 PM UTC)
- **1:00 PM PST** (9:00 PM UTC)

This is after US market close and during Vietnam trading hours.

**Runs on:** Weekdays only (Monday-Friday)
**Doesn't run:** Weekends and holidays

---

## Customization

### Change the Schedule

Edit `.github/workflows/daily-stock-prices.yml`:

```yaml
schedule:
  # Current: 9:00 PM UTC (4:00 PM EST)
  - cron: '0 21 * * 1-5'
```

**Cron format:** `minute hour day month weekday`

**Examples:**
```yaml
# 5:00 PM EST (10:00 PM UTC)
- cron: '0 22 * * 1-5'

# 12:00 PM EST (5:00 PM UTC)
- cron: '0 17 * * 1-5'

# Multiple times per day
- cron: '0 14 * * 1-5'  # 9:00 AM EST
- cron: '0 21 * * 1-5'  # 4:00 PM EST

# Every day including weekends
- cron: '0 21 * * *'
```

**Cron helper:** https://crontab.guru/

### Change Discord Channel

1. Create a new webhook in different channel
2. Update `DISCORD_STOCK_WEBHOOK_URL` secret with new webhook URL
3. Next run will post to new channel

### Add More Stocks

Edit the workflow file and add to the `tickers` dictionary:

```python
tickers = {
    "VinFast Auto (VFS)": "VFS",
    "VinGroup (VIC)": "VIC.VN",
    "Tesla (TSLA)": "TSLA",  # Add more stocks
    "Ford (F)": "F"
}
```

**Find ticker symbols:** https://finance.yahoo.com

### Change Message Format

Edit the Python script in the workflow file to customize:
- Embed colors
- Message text
- Data displayed
- Formatting

---

## How It Works

### Technical Details

1. **GitHub Actions** runs the workflow on schedule
2. **Python script** fetches stock data using `yfinance` library
3. **Yahoo Finance API** provides the stock data (free, no API key needed)
4. **Discord Webhook** posts the formatted message
5. **Runs on GitHub servers** (free for public repositories)

### Stock Tickers

**VinFast Auto (VFS):**
- Exchange: NASDAQ
- Currency: USD
- Trading hours: 9:30 AM - 4:00 PM EST

**VinGroup (VIC.VN):**
- Exchange: Ho Chi Minh Stock Exchange (HOSE)
- Currency: VND (Vietnamese Dong)
- Trading hours: 9:00 AM - 2:30 PM ICT (Vietnam time)

### Data Source

- **Provider:** Yahoo Finance (via yfinance Python library)
- **Cost:** Free
- **API Key:** Not required
- **Rate Limits:** Should not be an issue for daily queries
- **Reliability:** Very high

---

## Troubleshooting

### Bot Doesn't Post to Discord

**Check 1: Webhook URL is correct**
```bash
# In GitHub: Settings → Secrets → Actions
# Verify DISCORD_STOCK_WEBHOOK_URL exists
```

**Check 2: Webhook is active in Discord**
- Go to Discord channel → Integrations → Webhooks
- Verify webhook is enabled

**Check 3: Check workflow logs**
1. GitHub → Actions tab
2. Click latest "Daily Stock Prices" run
3. Click "Fetch stock prices and post to Discord"
4. Look for error messages

### "No data available" Error

**Possible causes:**
- Stock market is closed (weekend, holiday)
- Stock ticker symbol is wrong
- Yahoo Finance API is temporarily down

**Solution:**
- Wait and try again during market hours
- Check if ticker symbols are correct

### Workflow Doesn't Run Automatically

**Check 1: Is it a weekday?**
- Workflow only runs Monday-Friday by default

**Check 2: Check Actions tab**
- GitHub → Actions → Make sure Actions are enabled

**Check 3: Check schedule time**
- Verify cron schedule is correct
- Remember: GitHub Actions uses UTC time

### Stock Prices Look Wrong

**Check 1: Time zone difference**
- VFS shows US market closing price (4:00 PM EST)
- VIC shows Vietnam market price (may be from earlier in day)

**Check 2: Currency**
- VFS is in USD
- VIC is in VND (Vietnamese Dong)

**Check 3: Delayed data**
- Yahoo Finance may have 15-minute delays for some markets

---

## Manual Testing

### Run Manually Anytime

1. **Go to:** GitHub → Actions tab
2. **Click:** "Daily Stock Prices - VinFast & VinGroup"
3. **Click:** "Run workflow" → "Run workflow" button
4. **Wait:** 30-60 seconds
5. **Check:** Discord channel for message

**Use this to:**
- Test after setup
- Check current prices outside schedule
- Debug issues

---

## Discord Message Customization

### Change Bot Name and Avatar

Edit the workflow file:

```python
payload = {
    "username": "Your Bot Name",  # Change this
    "avatar_url": "URL to image",  # Change this
    "embeds": embeds
}
```

### Change Embed Color

Colors are in hexadecimal:

```python
"color": 0x00539C,  # VinFast blue (current)
"color": 0x00FF00,  # Green
"color": 0xFF0000,  # Red
"color": 0x0099FF,  # Light blue
```

### Add Additional Information

You can add more fields to the embed:

```python
"fields": [
    {
        "name": "Market Cap",
        "value": "$X Billion",
        "inline": True
    },
    {
        "name": "Volume",
        "value": "X shares",
        "inline": True
    }
]
```

---

## Cost

**Everything is free:**
- ✅ GitHub Actions: Free for public repositories (2,000 minutes/month)
- ✅ Yahoo Finance API: Free, no API key required
- ✅ Discord Webhooks: Free, unlimited
- ✅ Data: Real-time for NASDAQ, may be delayed for Vietnam stocks

**This workflow uses:** ~1 minute per run = ~20 minutes/month

---

## Privacy & Security

**What's stored:**
- Nothing! The bot doesn't store any data
- Stock prices are fetched in real-time
- Webhook URL is stored securely in GitHub Secrets

**What's shared:**
- Stock prices are public information
- Posted to Discord channel (visible to channel members)
- No personal data collected or transmitted

**Security:**
- Webhook URL is kept secret (not in code)
- Only authorized GitHub collaborators can modify workflow
- Discord webhook can be regenerated anytime if compromised

---

## Disabling the Bot

### Temporarily Disable

1. **Go to:** GitHub → Actions
2. **Click:** "Daily Stock Prices - VinFast & VinGroup"
3. **Click:** ⋯ (three dots) → "Disable workflow"

### Permanently Remove

1. **Delete the workflow file:**
   ```bash
   rm .github/workflows/daily-stock-prices.yml
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Remove stock price bot"
   git push origin main
   ```

3. **Optional:** Delete Discord webhook

---

## Advanced Configuration

### Add Market Status Check

Add code to check if market is open before posting:

```python
import datetime

# Check if US market is open
now = datetime.datetime.now()
if now.weekday() >= 5:  # Weekend
    print("Market closed (weekend)")
    sys.exit(0)
```

### Add Price Alerts

Modify script to send notifications when price changes exceed threshold:

```python
if abs(change_pct) > 5:  # 5% change
    # Send @everyone mention
    payload["content"] = "@everyone Large price movement detected!"
```

### Store Historical Data

Add code to save prices to a file for tracking:

```python
import json

# Save to file
with open('price_history.json', 'a') as f:
    json.dump(stock_data, f)
    f.write('\n')
```

---

## Support

**If you need help:**

1. **Check workflow logs:** GitHub → Actions → View run logs
2. **Test manually:** Use "Run workflow" button
3. **Discord:** Ask in #development channel
4. **Email:** board@vinfastowners.org

**Common issues:**
- Wrong webhook URL → Update secret
- Market closed → Wait for market hours
- Workflow disabled → Re-enable in Actions tab

---

## Example Use Cases

**For members:**
- Quick daily update on VinFast stock performance
- Track VinGroup parent company
- No need to check multiple stock websites
- Historical tracking in Discord chat

**For board:**
- Monitor company performance
- Inform community discussions
- Reference in board meetings
- Track trends over time

**For community:**
- Easy access to stock info
- Conversation starter
- Investment discussions
- Company news context

---

## Files

**Workflow file:**
```
.github/workflows/daily-stock-prices.yml
```

**This documentation:**
```
STOCK_PRICE_BOT_SETUP.md
```

---

## Changelog

**v1.0** - November 11, 2024
- Initial release
- VinFast (VFS) and VinGroup (VIC) support
- Daily posting after market close
- Discord webhook integration
- Color-coded price changes
- Automated via GitHub Actions

---

**Questions? Ask in Discord #development or email board@vinfastowners.org**

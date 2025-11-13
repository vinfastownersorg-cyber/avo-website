# VinFast News Bot Setup

Automated daily VinFast news updates posted to Discord.

---

## What It Does

**Automatically posts to Discord daily:**
- Top 5 VinFast news articles from last 24 hours
- Aggregates from Google News
- Shows article title, source, and time posted
- Includes links to read more
- Runs at **7:00 PM EST every day**

**Example Discord Message:**
```
🚗 VinFast Daily News Roundup

📰 Latest VinFast News - November 11, 2024

Top stories from the last 24 hours

1. VinFast Announces Q3 Earnings Results
   📍 Reuters • 🕒 2h ago

2. VinFast Expands California Dealership Network
   📍 Automotive News • 🕒 5h ago

3. VF8 Receives Updated Safety Rating
   📍 InsideEVs • 🕒 8h ago

📰 More News Sources
• VinFast Newsroom
• VinFastTalk.com
• Google News Search

News from Google News | Automated by VinFastOwners.org
```

---

## Setup (Already Done!)

The bot uses the **same Discord webhook** as the stock bot:
- ✅ Webhook already configured
- ✅ Posts to #news-and-stocks channel
- ✅ No additional setup needed!

---

## Schedule

**Runs automatically:**
- **Every day** at **7:00 PM EST** (midnight UTC)
- **7 days a week** (including weekends)
- No action needed from you

---

## Manual Run

Want to check news right now?

1. Go to: https://github.com/vinfastownersorg-cyber/avo-website/actions/workflows/daily-vinfast-news.yml
2. Click "Run workflow"
3. Check Discord in 30 seconds

---

## News Sources

**Primary source:**
- Google News RSS feed for "VinFast"
- Aggregates from all major news outlets
- Updated continuously

**Includes articles from:**
- Reuters
- Bloomberg
- Automotive News
- InsideEVs
- Electrek
- And many more

---

## Features

✅ **Filters to last 24 hours** - Only recent news
✅ **Top 5 articles** - Most relevant stories
✅ **Removes duplicates** - Same story from multiple sources
✅ **Time stamps** - Shows how long ago posted
✅ **Direct links** - Click to read full article
✅ **No news message** - Posts even on slow news days

---

## Customization

### Change the Time

Edit `.github/workflows/daily-vinfast-news.yml`:

```yaml
schedule:
  # Current: Midnight UTC (7:00 PM EST)
  - cron: '0 0 * * *'

  # Examples:
  # 8:00 PM EST (1:00 AM UTC)
  - cron: '0 1 * * *'

  # 6:00 PM EST (11:00 PM UTC)
  - cron: '0 23 * * *'

  # Multiple times per day
  - cron: '0 12 * * *'  # Noon EST
  - cron: '0 0 * * *'   # 7 PM EST
```

### Change Number of Articles

Edit the workflow file, find:
```python
sorted_articles = sorted(...)[: 5]  # Top 5
```

Change `5` to any number you want.

### Add More Keywords

Search for more specific topics:
```python
# Current:
google_news_url = "https://news.google.com/rss/search?q=VinFast&..."

# Add more keywords:
google_news_url = "https://news.google.com/rss/search?q=VinFast+OR+VF8+OR+VF9&..."
```

---

## How It Works

1. **GitHub Actions** runs at 7 PM EST daily
2. **Python script** fetches Google News RSS feed
3. **Filters** articles from last 24 hours
4. **Sorts** by most recent
5. **Posts top 5** to Discord
6. **If no news:** Posts "No major news today"

---

## Cost

**FREE!** Everything is free:
- ✅ GitHub Actions (2,000 minutes/month free)
- ✅ Google News RSS (free, no API key)
- ✅ Discord webhook (free, unlimited)

**This bot uses:** ~2 minutes/day = ~60 minutes/month

---

## Troubleshooting

### No News Posted

**Check workflow logs:**
1. GitHub → Actions → Daily VinFast News Updates
2. Click latest run
3. Check for errors

**Common causes:**
- No VinFast articles in last 24 hours (rare)
- Google News temporarily down
- Webhook URL issue

### Old News Showing

Google News sometimes has delays. The bot filters to last 24 hours, but:
- Some sources update slower
- International sources may have timezone differences

### Duplicate Stories

The bot tries to remove duplicates, but:
- Same story with different titles may appear
- Different angles on same event may both show

---

## Disable the Bot

### Temporarily
1. GitHub → Actions
2. Click "Daily VinFast News Updates"
3. ⋯ → Disable workflow

### Permanently
Delete the file:
```bash
rm .github/workflows/daily-vinfast-news.yml
git commit -m "Remove news bot"
git push origin main
```

---

## Privacy & Data

**What's collected:**
- Nothing! Bot doesn't store data
- Fetches news in real-time
- Posts to Discord and exits

**What's shared:**
- Public news articles (already public)
- Article titles and links
- Source names

---

## Future Enhancements

**Possible additions:**
- Filter by topic (earnings, products, recalls)
- Sentiment analysis (positive/negative news)
- Weekly summary instead of daily
- Email digest option
- Filter specific sources

**Want these features? Let me know!**

---

## Questions?

**Discord:** an appropriate Discord channel
**Email:** board@vinfastowners.org
**Documentation:** This file

---

**Last Updated:** November 11, 2024

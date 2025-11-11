# YouTube VinFast Content Monitor - Setup Guide

## Overview

The YouTube Monitor automatically discovers high-quality VinFast content on YouTube every 2 hours and posts it to your Discord #news channel. It filters out spam, low-quality videos, and ensures only engaging, relevant content gets through.

## Features

- ⭐ **Priority VinFast Owner Channels** - Always post from Supernamm, Natalie Ly, and other priority owners
- 🏢 **Official Channel Monitoring** - Tracks VinFast US, Canada, and Official channels
- ✅ **Smart Quality Filtering** - Only videos with real engagement (views, comments, likes)
- ✅ **Credible Channel Whitelist** - Prioritizes trusted automotive reviewers
- 🚫 **Spam Detection** - Blocks investment spam, clickbait, and junk content
- 🔄 **Deduplication** - Tracks posted videos to avoid reposts
- 💬 **Auto-posting to Discord** - Beautiful embeds with stats and thumbnails

## Setup Instructions

### Step 1: Get YouTube API Key (2 minutes)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **YouTube Data API v3**:
   - Go to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "+ CREATE CREDENTIALS" > "API Key"
   - Copy the API key
5. (Optional) Restrict the API key:
   - Click on the API key
   - Under "API restrictions", select "Restrict key"
   - Choose "YouTube Data API v3"
   - Save

**Cost**: FREE - 10,000 quota units/day (plenty for our usage ~600-800 units/day)

### Step 2: Add GitHub Secret

1. Go to your GitHub repository
2. Navigate to: **Settings** > **Secrets and variables** > **Actions**
3. Click **"New repository secret"**
4. Name: `YOUTUBE_API_KEY`
5. Value: Paste your YouTube API key
6. Click **"Add secret"**

### Step 3: Verify Discord Webhook

The workflow uses the same Discord webhook as your news/stock bot:
- Secret name: `DISCORD_STOCK_WEBHOOK_URL`
- Should already be configured

If not set up:
1. Go to Discord channel settings (the #news or #stock channel)
2. Integrations > Webhooks > New Webhook
3. Copy webhook URL
4. Add as `DISCORD_STOCK_WEBHOOK_URL` in GitHub Secrets

### Step 4: Add Priority Channels (Optional)

Add Supernamm, Natalie Ly, and other VinFast owners to get their content posted immediately:

See [HOW_TO_ADD_YOUTUBE_CHANNELS.md](HOW_TO_ADD_YOUTUBE_CHANNELS.md) for detailed instructions on:
- Finding YouTube channel IDs
- Adding priority VinFast owners
- Adding credible reviewers

### Step 5: Test the Workflow

1. Go to **Actions** tab in GitHub
2. Select "YouTube VinFast Content Monitor"
3. Click "Run workflow" > "Run workflow"
4. Wait ~30 seconds
5. Check your Discord channel for posts!

## How It Works

### Quality Thresholds

```python
min_views: 500           # At least 500 views
min_comments: 5          # At least 5 comments
min_engagement_score: 0.3%  # Comments+Likes / Views ratio
min_channel_subs: 500    # Channel must have 500+ subscribers
max_video_age_hours: 24  # Only last 24 hours
```

### Engagement Score Calculation

```
Engagement Score = ((Comments + Likes) / Views) × 100

Quality Levels:
🔥 Viral:        ≥ 2.0%
⭐ High Quality:  ≥ 1.0%
✓ Good:          ≥ 0.3%
```

### Credible Channels (Verified with ✅)

The whitelist includes:
- **Throttle House** - Canadian automotive review channel
- **Out of Spec Reviews** - EV specialists
- **InsideEVs** - Electric vehicle news
- **Engineering Explained** - Technical automotive content
- **The Straight Pipes** - Canadian reviewers
- **MKBHD / Marques Brownlee** - Tech reviewer
- **Doug DeMuro** - Automotive personality
- **MotorTrend Channel** - Established automotive media
- **Edmunds Cars** - Automotive research
- **Kelley Blue Book** - Vehicle valuation experts
- **Consumer Reports** - Product testing organization
- And 15+ more credible sources

**Credible channels get +100 quality boost** and bypass stricter filters.

### Spam Filters

**Blocked Keywords:**
- Stock/investment spam
- "Crash compilation", "fails"
- "You won't believe", "shocking" (clickbait)
- Meme content

**Blocked Channel Patterns:**
- Channels with 4+ consecutive numbers (e.g., "Cars12345")
- Channels with 5+ consecutive capitals (spam pattern)
- Channels under 500 subscribers (unless credible)

### Search Queries

The monitor searches for:
- "VinFast VF8 review"
- "VinFast VF9 review"
- "VinFast test drive"
- "VinFast 2024"
- "VinFast 2025"
- "VinFast news"

## Schedule

**Runs twice daily:**
- **12:00 PM EST** (5:00 PM UTC / 9:00 AM PST)
- **8:00 PM EST** (1:00 AM UTC / 5:00 PM PST)

**Why twice daily?**
- Catches midday and evening content releases
- Stays well under YouTube API quota (~120-160 units/day)
- Provides timely updates without overwhelming Discord
- Covers both US business hours and evening engagement peaks

## Posting Behavior

- **Maximum 3 videos per run** - Prevents spam
- **Only new videos** - Tracks posted videos in `youtube_posted.json`
- **Best videos first** - Sorted by engagement + credibility score

## Channel Priority System

The monitor treats channels differently based on their importance:

### ⭐ Priority VinFast Owners (Gold Embeds)
- **Examples**: Supernamm, Natalie Ly
- **Badge**: "⭐ Priority VinFast Owner"
- **Color**: Gold (#FFD700)
- **Filters**: NONE - always posted
- **Purpose**: Highlight authentic owner experiences

### 🏢 Official VinFast Channels (Blue Embeds)
- **Examples**: VinFast US, VinFast Canada, VinFast Official
- **Badge**: "🏢 Official VinFast Channel"
- **Color**: VinFast Blue (#00539C)
- **Filters**: NONE - always posted
- **Purpose**: Official announcements and updates

### ✅ Credible Reviewers (Red Embeds + Checkmark)
- **Examples**: Throttle House, Out of Spec, MKBHD
- **Badge**: "✅ Verified Channel"
- **Color**: YouTube Red (#FF0000)
- **Filters**: Relaxed thresholds, +100 quality boost
- **Purpose**: Trusted automotive journalism

### 🎥 General Content (Red Embeds)
- **Examples**: Any VinFast-related content
- **Badge**: None
- **Color**: YouTube Red (#FF0000)
- **Filters**: Full quality filters applied
- **Purpose**: Community discoveries

## Discord Embed Format

Each video post includes:
- 🎥/🏢/⭐ **Title** with direct YouTube link (color-coded by priority)
- **Channel name** (with badge: ⭐/🏢/✅)
- **Video thumbnail**
- **Description preview** (first 200 chars)
- **Stats**: Views, comments, likes
- **Channel stats**: Subscriber count
- **Published time**: How long ago
- **Quality indicator**: Viral/High Quality/Good + engagement %

## Monitoring & Logs

### View Workflow Runs

1. Go to **Actions** tab in GitHub
2. Click on any workflow run to see logs
3. Logs show:
   - Videos found
   - Videos filtered out (with reasons)
   - Videos posted to Discord
   - API quota usage

### Troubleshooting

**No videos posted?**
- Check if any quality videos were found (see logs)
- May need to lower thresholds if too restrictive
- VinFast content may be slow some days

**API quota exceeded?**
- Each run uses ~60-80 quota units
- Daily limit: 10,000 units
- At 10 runs/day: ~800 units used (plenty of room)

**Videos not showing in Discord?**
- Verify `DISCORD_WEBHOOK_URL` is correct
- Check Discord channel permissions
- Review workflow logs for errors

## Customization

### Adjust Quality Thresholds

Edit [youtube-monitor.yml](.github/workflows/youtube-monitor.yml), find:

```python
THRESHOLDS = {
    'min_views': 500,           # Lower = more videos
    'min_comments': 5,          # Lower = more videos
    'min_engagement_score': 0.3,  # Lower = more videos
    'min_channel_subs': 500,    # Lower = more channels
    'max_video_age_hours': 24   # Higher = older videos
}
```

**Recommendations:**
- **Getting too many videos?** Raise thresholds
- **Getting too few videos?** Lower thresholds
- **Want older videos?** Increase `max_video_age_hours` to 48 or 72

### Add More Credible Channels

Edit `CREDIBLE_CHANNELS` list in the workflow file:

```python
CREDIBLE_CHANNELS = [
    'throttle house',
    'out of spec reviews',
    # Add your trusted channels here (lowercase)
    'your channel name',
]
```

### Change Posting Frequency

Edit the cron schedule:

```yaml
schedule:
  # Every 4 hours instead of 2:
  - cron: '0 6,10,14,18,22 * * *'

  # Once per day at 12 PM UTC:
  - cron: '0 12 * * *'
```

## File Structure

```
.github/
├── workflows/
│   └── youtube-monitor.yml      # Main workflow file
└── YOUTUBE_MONITOR_SETUP.md     # This file

youtube_posted.json               # Tracks posted videos (auto-generated)
```

## API Quota Breakdown

**Per workflow run (~60-80 units):**
- Search query (×6 queries): ~60 units (10 units each)
- Video statistics (1 request): ~1 unit
- Channel information (1 request): ~1 unit

**Daily usage (2 runs/day): ~120-160 units**
**Monthly usage: ~3,600-4,800 units**
**Monthly limit: 310,000 units (10k/day × 31 days)**

✅ **Plenty of headroom! Only using ~1.5% of daily quota.**

## Need Help?

1. **Check workflow logs** in GitHub Actions
2. **Review Discord webhook** in channel settings
3. **Verify API key** is correct and YouTube Data API v3 is enabled
4. **Check quota** in [Google Cloud Console](https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas)

## Future Enhancements

Potential improvements:
- [ ] Email digest of weekly top videos
- [ ] Support for specific channel monitoring
- [ ] Advanced AI content quality scoring
- [ ] Multi-language support
- [ ] Video transcript analysis
- [ ] Sentiment analysis of comments

---

**Created**: November 2025
**Last Updated**: November 11, 2025
**Maintained by**: VinFastOwners.org GitHub Actions

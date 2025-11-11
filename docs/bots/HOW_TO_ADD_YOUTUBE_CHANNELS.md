# How to Add YouTube Channels to the Monitor

This guide shows you how to add priority VinFast owner channels and other YouTubers to the monitoring system.

## Quick Steps

1. Find the YouTube channel ID
2. Add it to the workflow file
3. Commit and push changes

---

## Method 1: Using YouTube Channel URL (Easiest)

### Step 1: Go to the Channel's About Page

1. Visit the YouTube channel (e.g., `youtube.com/@supernamm`)
2. Click the **"About"** tab
3. Click **"Share"** button (or the share icon)
4. Click **"Copy channel ID"**

The channel ID will look like: `UCzKjl-p7WlKBVMxR6eCBpMw`

### Step 2: Add to Workflow File

Edit [`.github/workflows/youtube-monitor.yml`](.github/workflows/youtube-monitor.yml):

```python
PRIORITY_OWNER_CHANNELS = {
    'Supernamm': 'UC_PASTE_CHANNEL_ID_HERE',  # @supernamm
    'Natalie Ly': 'UC_PASTE_CHANNEL_ID_HERE',  # Natalie Ly's channel
    # Add more channels below:
    'Another Owner': 'UC_THEIR_CHANNEL_ID',
}
```

---

## Method 2: From Channel Page Source

If the "Share" method doesn't work:

1. Go to the YouTube channel
2. Right-click anywhere → **"View Page Source"** (or press `Ctrl+U` / `Cmd+U`)
3. Search for `"channelId"` (Ctrl+F / Cmd+F)
4. Copy the ID that looks like: `"channelId":"UCzKjl-p7WlKBVMxR6eCBpMw"`

---

## Method 3: Using a Browser Extension

Install **"YouTube Channel ID Finder"** extension for Chrome/Firefox:
- [Chrome Extension](https://chrome.google.com/webstore/detail/youtube-channel-id-finder)
- The extension adds a button to copy channel IDs directly

---

## Common YouTube Handle to Channel ID

If you only have the **@username** handle:

| Handle Format | How to Get Channel ID |
|--------------|----------------------|
| `youtube.com/@username` | Visit channel → About → Share → Copy ID |
| `youtube.com/c/CustomName` | Same as above |
| `youtube.com/channel/UC123456` | The `UC123456` part IS the channel ID! |

---

## Adding Channels to the Workflow

### For Priority VinFast Owners (Top Priority)

Edit line 161-165 in [`youtube-monitor.yml`](.github/workflows/youtube-monitor.yml):

```python
PRIORITY_OWNER_CHANNELS = {
    'Supernamm': 'UCxxxxxxxxxxxxxxx',  # Replace with real ID
    'Natalie Ly': 'UCxxxxxxxxxxxxxxx',  # Replace with real ID
    'John Doe VinFast': 'UCxxxxxxxxxxxxxxx',  # Add more owners
}
```

**Priority owners get:**
- ⭐ Gold-colored embeds
- Always posted (bypass all filters)
- Labeled as "Priority VinFast Owner"

### For Official VinFast Channels

Edit line 168-172:

```python
OFFICIAL_CHANNELS = {
    'VinFast US': 'UCzKjl-p7WlKBVMxR6eCBpMw',
    'VinFast Canada': 'UCXrH8l4q0IgK1bNvSyIFvkg',
    'VinFast Official': 'UCaK5H-EjPJQJhH8bBZs8C6Q'
    # Add more official channels here
}
```

**Official channels get:**
- 🏢 Blue VinFast-colored embeds
- Always posted (bypass all filters)
- Labeled as "Official VinFast Channel"

### For Credible Automotive Reviewers

Edit line 73-99:

```python
CREDIBLE_CHANNELS = [
    'throttle house',
    'out of spec reviews',
    # Add channel names here (lowercase)
    'your trusted reviewer name',
]
```

**Credible channels get:**
- ✅ Verified badge
- +100 quality boost
- Lower filtering thresholds

---

## Testing Your Changes

### 1. Commit Your Changes

```bash
git add .github/workflows/youtube-monitor.yml
git commit -m "Add Supernamm and Natalie Ly to priority channels"
git push
```

### 2. Manually Trigger the Workflow

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select "YouTube VinFast Content Monitor"
4. Click **"Run workflow"** dropdown
5. Click **"Run workflow"** button
6. Wait ~30 seconds
7. Check the logs to see if the channels were monitored

### 3. Check Discord

If the channels have recent videos (last 24 hours), they should appear in your Discord channel with gold stars! ⭐

---

## Example: Adding Supernamm

Let's say you found Supernamm's channel ID: `UCabc123def456ghi789jkl`

**Before:**
```python
PRIORITY_OWNER_CHANNELS = {
    'Supernamm': 'CHANNEL_ID_HERE',  # TODO: Add @supernamm channel ID
    'Natalie Ly': 'CHANNEL_ID_HERE',  # TODO: Add Natalie Ly's channel ID
}
```

**After:**
```python
PRIORITY_OWNER_CHANNELS = {
    'Supernamm': 'UCabc123def456ghi789jkl',  # @supernamm
    'Natalie Ly': 'CHANNEL_ID_HERE',  # TODO: Add Natalie Ly's channel ID
}
```

Save, commit, push, and test!

---

## Channel Priority Levels

The monitor checks channels in this order:

1. **⭐ Priority VinFast Owners** (Gold embeds)
   - Always posted immediately
   - No filters applied
   - Highest visibility

2. **🏢 Official VinFast Channels** (Blue embeds)
   - Always posted immediately
   - No filters applied
   - Official announcements

3. **✅ Credible Automotive Reviewers** (Red embeds with checkmark)
   - Quality filters applied
   - +100 quality boost
   - Trusted sources

4. **🎥 General VinFast Content** (Red embeds)
   - Full quality filters
   - Must meet engagement thresholds
   - Spam filtered

---

## Finding VinFast Owners on YouTube

### Search Tips

1. Search YouTube for:
   - "VinFast owner review"
   - "VinFast VF8 ownership"
   - "VinFast daily driver"
   - "Living with VinFast"

2. Look for channels with:
   - Multiple VinFast videos
   - Real ownership experiences
   - Consistent uploads
   - Engaged community

3. Check comments sections on popular VinFast videos for owners who post frequently

### Community Channels to Consider

- VinFast owner groups on Facebook
- r/VinFast subreddit
- VinFastTalk.com forum users
- VinFast owners at car meets/events

---

## Troubleshooting

### "Skipping [Channel] - No channel ID configured"

This warning means the channel ID is still `CHANNEL_ID_HERE`. Replace it with the real ID.

### Channel Not Posting Videos

Check:
- Does the channel have videos from the last 24 hours?
- Is the channel ID correct? (should start with `UC`)
- Are there any errors in the GitHub Actions logs?

### Wrong Channel Being Monitored

Double-check you copied the correct channel ID. Some channels have similar names!

---

## Quick Reference

| Task | File | Line Number |
|------|------|-------------|
| Add priority owners | `youtube-monitor.yml` | 161-165 |
| Add official channels | `youtube-monitor.yml` | 168-172 |
| Add credible reviewers | `youtube-monitor.yml` | 73-99 |
| Adjust quality thresholds | `youtube-monitor.yml` | 47-53 |

---

**Need Help?**

Check the workflow logs in GitHub Actions for detailed error messages and monitoring status.

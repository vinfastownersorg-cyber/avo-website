# Resource Rating System Guide

## Overview

The "Helpful" button counter system uses a **portable JSON-based approach** that migrates with the website. No external database required - all data is stored in the repository.

---

## How It Works

### For Visitors
1. Click "👍 Helpful" on resources they find useful
2. Count increases immediately on their screen
3. Vote is recorded in browser localStorage
4. Can only vote once per resource

### For Admins
1. Votes are queued as "pending" in users' browsers
2. Update global counts via GitHub Actions or local script
3. Commit updated JSON file to repository
4. All visitors see the new global counts

---

## Data Storage

| Data | Location | Purpose |
|------|----------|---------|
| **Global counts** | `data/resource-ratings.json` | Official counts shown to all users |
| **User votes** | Browser localStorage | Tracks which resources user voted for |
| **Pending votes** | Browser localStorage | Queue for admin aggregation |

---

## Updating Global Counts

### Method 1: GitHub Actions (Recommended)

**Manual Trigger** - When you notice voting activity:

1. Go to: https://github.com/vinfastownersorg-cyber/avo-website/actions/workflows/update-ratings.yml
2. Click **"Run workflow"** button
3. Enter votes in format: `resource-id:count,resource-id:count`
   - Example: `vf8-manual:15,vf9-manual:12,vf6-manual:8`
4. Click **"Run workflow"**
5. ✅ Done! Updates commit automatically

**Automatic Schedule** - Runs daily at 2 AM UTC

You can modify the schedule in `.github/workflows/update-ratings.yml`:
```yaml
schedule:
  - cron: '0 2 * * *'  # Daily at 2 AM UTC
  - cron: '0 */6 * * *'  # Every 6 hours
  - cron: '0 0 * * 0'  # Weekly (Sunday)
  - cron: '0 0 1 * *'  # Monthly
```

### Method 2: Local Python Script

```bash
cd vinfastowners-website
python3 update-ratings.py
```

Interactive prompts will guide you through adding votes:
```
Current Ratings:
============================================================
  vf8-manual: 42
  vf9-manual: 38
  ...

➤ vf8-manual 12
  ✓ Will add 12 votes to vf8-manual
➤ done

✅ Ratings updated successfully!
```

Then commit and push:
```bash
git add data/resource-ratings.json
git commit -m "Update resource ratings"
git push origin main
```

### Method 3: Direct JSON Edit

Edit `data/resource-ratings.json` manually:
```json
{
  "vf8-manual": 54,
  "vf9-manual": 46,
  "vf6-manual": 32,
  "last_updated": "2025-11-22T20:00:00Z"
}
```

---

## Resource IDs

Current resources that accept votes:

| ID | Resource |
|----|----------|
| `avo-open-letter` | AVO's Open Letter to VinFast |
| `us-owners-survey` | US Owners Survey |
| `report-vehicle-issues` | Report Vehicle Issues |
| `vf8-manual` | VF8 Owner's Manual (Condensed) |
| `vf9-manual` | VF9 Owner's Manual (Condensed) |
| `vf6-manual` | VF6 Owner's Manual (Condensed) |
| `vf7-manual` | VF7 Owner's Manual (Condensed) |
| `vf8-vf9-guide` | VF8/VF9 Troubleshooting Guide |
| `natalie-ly` | Natalie Ly YouTube Channel |
| `out-of-spec-bits` | Out of Spec BITS YouTube |

---

## Monitoring Activity

### Check Browser Console

Users can see their pending votes (for troubleshooting):
```javascript
// In browser DevTools console (F12):
JSON.parse(localStorage.getItem('pending-votes'))
```

### View Workflow Logs

See rating update history:
1. Go to: https://github.com/vinfastownersorg-cyber/avo-website/actions
2. Click on "Update Resource Ratings" runs
3. View summary and logs

### Check Page Analytics

Monitor traffic to estimate voting activity:
- GitHub repo → Insights → Traffic
- High traffic = likely more votes

---

## Best Practices

### How Many Votes to Add?

- **Conservative**: Add 10-20% of page views
- **Based on analytics**: Track which resources are viewed most
- **Better to under-estimate** than over-estimate
- **Start small**: Add 5-10 votes initially, adjust based on feedback

### When to Update?

- After marketing campaigns or announcements
- When new resources are added
- Weekly during active periods
- Monthly during quiet periods
- After events or community outreach

### Estimating Vote Counts

If unsure, use this formula:
```
Estimated votes = (Page views × 0.15) × Resource visibility factor

Resource visibility factors:
- Featured resources: 1.5
- Above the fold: 1.0
- Below the fold: 0.5
```

---

## Migration & Portability

### Moving to a New Host

1. Clone the repository to new location
2. All rating data moves with it (in `data/` directory)
3. No external database to migrate
4. Just point DNS to new host

### Backup Strategy

Ratings are automatically backed up because they're:
- ✅ Version controlled in Git
- ✅ Stored in GitHub repository
- ✅ Included in all clones/forks
- ✅ Visible in commit history

To restore old counts:
```bash
git checkout <commit-hash> data/resource-ratings.json
git commit -m "Restore ratings from backup"
git push
```

---

## Troubleshooting

### Counts Not Showing?

- Check browser console for errors
- Verify `data/resource-ratings.json` exists and is valid JSON
- Try force refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check network tab to confirm JSON file loads

### Workflow Fails?

- Check Actions tab for detailed error logs
- Verify input format: `resource-id:count,resource-id:count`
- Ensure resource IDs match those in JSON file
- Check that JSON file isn't corrupted

### Counts Look Wrong?

- Edit JSON file directly to fix
- Use `python3 update-ratings.py` to view current stats
- Check commit history to see when counts changed
- Can always roll back to previous commit

### Need to Reset All Counts?

```bash
# Option 1: Via Python script
python3 update-ratings.py
# Enter negative numbers to subtract

# Option 2: Direct edit
# Edit data/resource-ratings.json, set all to 0
git add data/resource-ratings.json
git commit -m "Reset all rating counts"
git push
```

---

## Technical Details

### Frontend Implementation

File: `js/main.js`

```javascript
// On page load:
1. Fetch data/resource-ratings.json
2. Display global counts to all users
3. Check localStorage for user's previous votes
4. Mark voted items with "voted" class

// When user clicks "Helpful":
1. Check if already voted (prevent duplicates)
2. Add to pending-votes queue
3. Optimistically update display (+1)
4. Mark button as voted
5. Log to console for admin
```

### Backend Implementation

Files:
- `.github/workflows/update-ratings.yml` - GitHub Actions automation
- `update-ratings.py` - Local update script

```python
# Workflow:
1. Load current ratings from JSON
2. Parse vote input (resource-id:count format)
3. Add votes to respective resources
4. Update last_updated timestamp
5. Save JSON file
6. Commit and push changes
```

---

## Support

If you encounter issues:
1. Check this guide first
2. Review GitHub Actions logs
3. Inspect browser console for errors
4. Check `data/resource-ratings.json` validity
5. Review recent commits for changes

For questions about implementation, see inline comments in:
- `js/main.js` (frontend logic)
- `update-ratings.py` (local update script)
- `.github/workflows/update-ratings.yml` (automation)

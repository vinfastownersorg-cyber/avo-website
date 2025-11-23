# Resource Rating System

## Overview

The "Helpful" button counter system uses a **portable JSON-based approach** that migrates with the website.

## How It Works

### For Users
1. Users click "👍 Helpful" buttons on resources
2. Their vote is recorded locally (browser localStorage)
3. Count increases immediately (optimistic update)
4. Vote is queued in "pending votes" for aggregation

### For Admins
1. Votes are tracked in browser console: `📊 Pending votes to aggregate`
2. Periodically run the aggregation script to update global counts
3. Commit and push the updated JSON file
4. All users see the new global counts

## Data Storage

- **Global counts**: `data/resource-ratings.json` (in repo, migrates with site)
- **User votes**: Browser localStorage (tracks which resources user voted for)
- **Pending votes**: Browser localStorage (queued for aggregation)

## Updating Global Counts

### Method 1: Interactive Script (Recommended)

```bash
cd vinfastowners-website
python3 update-ratings.py
```

The script will:
- Show current rating statistics
- Prompt for vote counts to add
- Update the JSON file
- Show before/after counts

Example session:
```
Current Ratings:
============================================================
  vf8-manual: 0
  vf9-manual: 0
  ...

Enter vote counts to add:
Format: resource-id count
Example: vf8-manual 5

➤ vf8-manual 12
  ✓ Will add 12 votes to vf8-manual
➤ vf9-manual 8
  ✓ Will add 8 votes to vf9-manual
➤ done

Applying updates...
  vf8-manual: 0 → 12 (+12)
  vf9-manual: 0 → 8 (+8)

✅ Ratings updated successfully!
```

### Method 2: View Statistics Only

```bash
python3 update-ratings.py stats
```

### Method 3: Manual JSON Edit

Simply edit `data/resource-ratings.json` directly:

```json
{
  "vf8-manual": 42,
  "vf9-manual": 38,
  ...
  "last_updated": "2025-11-22T19:30:00Z"
}
```

## Collecting Vote Data

To see how many users have voted (from browser console):

1. Open browser DevTools (F12)
2. Go to Console tab
3. Type: `JSON.parse(localStorage.getItem('pending-votes'))`
4. See list of pending votes with timestamps

## Committing Updates

After updating ratings:

```bash
git add data/resource-ratings.json
git commit -m "Update resource ratings (add XX votes)"
git push origin main
```

The updated counts will be live for all users immediately.

## Migration

When moving the site to a new host:
1. The entire `data/` directory moves with the repo
2. No external database to migrate
3. All rating history is preserved
4. Just update DNS and you're done

## Troubleshooting

**Counts not showing?**
- Check browser console for errors
- Verify `data/resource-ratings.json` is accessible
- Try force refresh (Ctrl+Shift+R)

**Users not seeing updates?**
- Ensure JSON file is committed and pushed
- Check GitHub Pages deployment status
- Users may need to hard refresh

**Lost votes?**
- Votes are stored in browser localStorage
- Clearing browser data will reset user's votes
- Global counts in JSON are never lost (unless file is deleted)

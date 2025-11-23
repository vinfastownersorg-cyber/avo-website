# How to Update Resource Ratings

## Automated Updates (GitHub Actions)

### Method 1: Manual Trigger (Recommended)

When you notice voting activity, update ratings via GitHub:

1. Go to: https://github.com/vinfastownersorg-cyber/avo-website/actions/workflows/update-ratings.yml
2. Click **"Run workflow"** button
3. Enter votes in format: `resource-id:count,resource-id:count`
   - Example: `vf8-manual:12,vf9-manual:8,vf6-manual:5`
4. Click **"Run workflow"**
5. Workflow updates JSON and commits automatically
6. Changes go live immediately

### Method 2: Scheduled Updates

The workflow also runs automatically **daily at 2 AM UTC**.

You can modify the schedule in `.github/workflows/update-ratings.yml`:
```yaml
schedule:
  - cron: '0 2 * * *'  # Daily at 2 AM UTC
```

Common schedules:
- `0 */6 * * *` - Every 6 hours
- `0 0 * * 0` - Weekly (Sunday at midnight)
- `0 0 1 * *` - Monthly (1st of month)

## Manual Updates (Local)

If you prefer to update locally:

```bash
cd vinfastowners-website
python3 update-ratings.py
# Follow prompts to add votes
git add data/resource-ratings.json
git commit -m "Update resource ratings"
git push
```

## Monitoring Vote Activity

### Check Browser Console

Users can see their pending votes:
```javascript
// In browser DevTools console:
JSON.parse(localStorage.getItem('pending-votes'))
```

### Check GitHub Analytics

Monitor page views to estimate when ratings might need updating:
- Go to: https://github.com/vinfastownersorg-cyber/avo-website/graphs/traffic
- High traffic = likely more votes

### Discord/Analytics Integration

You could also:
1. Add analytics tracking when users vote
2. Send notification to Discord when vote count reaches threshold
3. Trigger the GitHub Action automatically

## Best Practices

**How many votes to add?**
- Conservative: Add 10-20% of page views
- Track via analytics which resources are popular
- Better to under-estimate than over-estimate

**When to update?**
- After marketing campaigns
- When new resources are added
- Weekly/bi-weekly during active periods
- Monthly during quiet periods

**What if you're unsure?**
- Run the workflow with 0 votes to see current stats
- Check the workflow summary for current counts
- Start small (5-10 votes) and adjust based on feedback

## Troubleshooting

**Workflow fails?**
- Check Actions tab for error logs
- Verify JSON file isn't corrupted
- Ensure format is correct: `resource-id:count,resource-id:count`

**Counts look wrong?**
- Edit `data/resource-ratings.json` directly
- Commit and push to fix manually
- Future workflow runs will use corrected values

**Need to reset counts?**
- Edit JSON file, set all to 0
- Commit and push
- Fresh start!

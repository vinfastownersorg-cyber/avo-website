# Option 1 Setup: Direct Push Workflow

## What You're Setting Up

A seamless collaboration workflow where trusted collaborators can push directly to `main` without requiring your approval for every change.

---

## Step 1: Configure GitHub Repository Settings

### A. Add Collaborators with Write Access

1. Go to: https://github.com/vinfastownersorg-cyber/avo-website
2. Click the **Settings** tab (top right)
3. Click **Collaborators and teams** (left sidebar)
4. Click the green **Add people** button

For each collaborator:
5. Enter their GitHub username
6. Select **Write** role from dropdown
7. Click **Add [username] to this repository**
8. They'll receive an email invitation

**They must accept the invitation to gain access.**

### B. Remove Branch Protection (if it exists)

1. While in **Settings**, click **Branches** (left sidebar)
2. Look for "Branch protection rules"
3. If you see a rule for `main`:
   - Click **Delete** or **Edit**
   - If editing, click **Delete rule** at bottom
4. Confirm deletion

**If there's no branch protection rule, you're good - skip this step.**

### C. Verify Settings

1. Go to **Settings** → **Collaborators and teams**
2. Confirm all collaborators show **Write** access
3. Go to **Settings** → **Branches**
4. Confirm no protection rules exist for `main`

**Done! Your repository is now configured for Option 1.**

---

## Step 2: Set Up Communication

### Discord Channels (Recommended)

Create these Discord channels for your team:

1. **#development**
   - Purpose: General development chat
   - Usage: "Working on about.html", "Just pushed CSS updates"

2. **#commits** (optional)
   - Purpose: Automated commit notifications
   - Setup: GitHub webhook → Discord
   - Shows who pushed what in real-time

3. **#urgent**
   - Purpose: Emergency issues
   - Usage: "Site is broken, need help!"

### GitHub Webhook to Discord (Optional but Helpful)

To see commits in Discord automatically:

**In Discord:**
1. Go to #commits channel settings → Integrations
2. Click **Webhooks** → **New Webhook**
3. Name it "GitHub Commits"
4. Copy the webhook URL

**In GitHub:**
1. Go to repository **Settings** → **Webhooks**
2. Click **Add webhook**
3. Paste Discord webhook URL + `/github` at the end
   - Example: `https://discord.com/api/webhooks/123456/abcdef/github`
4. Content type: `application/json`
5. Select: **Just the push event**
6. Click **Add webhook**

Now every push shows in Discord!

---

## Step 3: Onboard Your Collaborators

### What to Send Each New Collaborator

**Email Template:**

```
Subject: Welcome to VinFastOwners.org Website Team!

Hi [Name],

Welcome to the website development team! Here's how to get started:

1. Accept the GitHub invitation (check your email)

2. Clone the repository to your computer:
   git clone https://github.com/vinfastownersorg-cyber/avo-website.git
   cd avo-website

3. Configure your git identity:
   git config user.name "Your Name"
   git config user.email "your.email@example.com"

4. Read the workflow guide:
   https://github.com/vinfastownersorg-cyber/avo-website/blob/main/SIMPLE_WORKFLOW.md

5. Join our Discord server: [your Discord invite link]
   - Check #development channel for coordination

6. Make a test change to verify your access:
   git pull origin main
   echo "<!-- Test by [YourName] -->" >> test.html
   git add test.html
   git commit -m "Test commit by [YourName]"
   git push origin main

If you have any issues, reach out in Discord #development or email board@vinfastowners.org.

Looking forward to working with you!
```

### First Week Checklist for New Collaborators

Send them this checklist:

- [ ] GitHub invitation accepted
- [ ] Repository cloned to your computer
- [ ] Git identity configured
- [ ] Read SIMPLE_WORKFLOW.md
- [ ] Joined Discord #development
- [ ] Made successful test push
- [ ] Know how to pull, commit, push
- [ ] Know what to do if you get a conflict
- [ ] Know to communicate in Discord before editing

---

## Step 4: Team Guidelines

### Create a Quick Reference Card

Post this in Discord #development pinned messages:

```markdown
📋 **Quick Daily Workflow**

**Before starting work:**
git pull origin main

**After making changes:**
git add .
git commit -m "Clear description"
git push origin main

**If someone else pushed while you worked:**
git pull origin main
(fix any conflicts if needed)
git push origin main

**Communication:**
- Post in #development when working on major files
- Pull often (multiple times per day)
- Test changes locally before pushing
- Ask if unsure!

**Emergency:**
If you break something, post in #urgent immediately!
```

### Team Communication Rules

Establish these simple rules:

1. **Before editing a critical file** (privacy.html, board.html, bylaws):
   - Post in Discord: "Editing [filename], 30 mins"

2. **Pull frequently:**
   - Start of work session
   - After lunch break
   - Before pushing

3. **Clear commit messages:**
   - ✅ "Fix broken link in navigation"
   - ✅ "Update privacy policy with GDPR section"
   - ❌ "Updates"
   - ❌ "Fixed stuff"

4. **Test locally:**
   - Open HTML files in browser before pushing
   - Check console for errors (F12)
   - Verify mobile view

5. **Ask when unsure:**
   - Better to ask than to break things
   - No judgment for questions

---

## Step 5: Safety Measures

### Daily Backup Script (Optional but Recommended)

Create this script on your computer:

**backup-website.sh:**
```bash
#!/bin/bash

# Directory to store backups
BACKUP_DIR="/Users/michaelbivens/Vinfast/website-backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Navigate to repository
cd /Users/michaelbivens/Vinfast/vinfastowners-website

# Pull latest changes
git pull origin main

# Create compressed backup
tar -czf "$BACKUP_DIR/website-backup-$DATE.tar.gz" .

# Keep only last 30 backups
cd "$BACKUP_DIR"
ls -t website-backup-*.tar.gz | tail -n +31 | xargs rm -f

echo "✅ Backup created: website-backup-$DATE.tar.gz"
```

Make it executable:
```bash
chmod +x backup-website.sh
```

Run it daily or weekly:
```bash
./backup-website.sh
```

Or automate with cron:
```bash
crontab -e
# Add this line to run daily at 2 AM:
0 2 * * * /Users/michaelbivens/Vinfast/backup-website.sh
```

### Monitor the Repository

Set up notifications:

1. Go to: https://github.com/vinfastownersorg-cyber/avo-website
2. Click **Watch** (top right)
3. Select **All Activity**
4. You'll get email for every push

Or just check Discord #commits if you set up the webhook.

### Emergency Rollback Procedure

If someone pushes something broken:

```bash
# See recent commits
git log --oneline -10

# Identify the bad commit (e.g., abc1234)

# Option 1: Revert that specific commit
git revert abc1234
git push origin main

# Option 2: Reset to last known good commit (use carefully!)
git reset --hard xyz5678
git push origin main --force
```

**Post in Discord if you need to do this!**

---

## Step 6: Testing the Setup

### Test with First Collaborator

Before inviting everyone:

1. **Invite one trusted collaborator**
2. **Have them clone the repo**
3. **Both of you make simultaneous edits:**

**You:**
```bash
git pull origin main
echo "<!-- Test A -->" >> test.html
git add test.html
git commit -m "Test A"
git push origin main
```

**Them (at same time):**
```bash
git pull origin main
echo "<!-- Test B -->" >> test.html
git add test.html
git commit -m "Test B"
git push origin main  # Will be blocked
git pull origin main  # Merges your change
git push origin main  # Now works
```

4. **Verify test.html has both comments**
5. **If it works, invite rest of team**

---

## What to Expect

### Week 1-2: Learning Phase
- People will ask questions
- Small conflicts will happen (good learning!)
- Some confusion about pull/push
- **This is normal and expected**

### Week 3+: Smooth Sailing
- Everyone gets the rhythm
- Conflicts become rare
- Team communicates naturally
- Workflow becomes second nature

### Common First-Week Issues

**"I can't push!"**
→ Did you pull first? `git pull origin main`

**"Git says merge conflict!"**
→ See SIMPLE_WORKFLOW.md conflict section
→ Or ask in Discord

**"I pushed something broken!"**
→ No problem, we can revert it
→ Post in Discord #urgent

**"I'm scared to break things!"**
→ Git tracks everything, we can always undo
→ Breaking things is how we learn
→ Just communicate and ask when unsure

---

## Maintaining the Workflow

### Monthly Check-In

Once a month, review:

- Are people pulling before they push?
- Are commit messages clear?
- Are conflicts being resolved quickly?
- Is Discord communication working?
- Does anyone need refresher training?

### Quarterly Review

Every 3 months:

- Review who has access (remove inactive people)
- Update workflow docs if needed
- Celebrate team wins
- Address any friction points

---

## When to Consider Adding Protection

You might want to add branch protection later if:

- Team grows beyond 10 people
- Too many conflicts happening
- Quality issues (untested code being pushed)
- Governance files getting edited without oversight

At that point, switch to Option 2 (protected main with self-merge).

But for now, **Option 1 is perfect for small trusted teams.**

---

## Success Metrics

Your setup is working well if:

✅ People push multiple times per day
✅ Conflicts are resolved quickly
✅ Communication happens naturally
✅ Nobody is waiting on you for approval
✅ Site stays stable
✅ Team feels empowered

---

## Quick Start Checklist for You

- [ ] Add all collaborators with Write access in GitHub
- [ ] Remove branch protection from `main` branch
- [ ] Create Discord #development channel
- [ ] Set up GitHub → Discord webhook (optional)
- [ ] Send onboarding email to first collaborator
- [ ] Test with first collaborator
- [ ] Send onboarding email to rest of team
- [ ] Pin quick reference in Discord
- [ ] Set up backup script (optional)
- [ ] Watch repository for notifications
- [ ] Monitor #development for questions

---

## Resources for Your Team

Share these files with collaborators:

1. **SIMPLE_WORKFLOW.md** - Daily workflow (required reading)
2. **HOW_GIT_PREVENTS_OVERWRITES.md** - How git keeps work safe
3. **GIT_QUICK_REFERENCE.md** - Command cheat sheet
4. **CONTRIBUTING.md** - Full detailed guide (optional)

---

## Need Help?

If issues come up:

1. Check Discord #development
2. Review the troubleshooting section in SIMPLE_WORKFLOW.md
3. Check git log to see what happened: `git log --oneline -10`
4. Worst case, restore from backup

Remember: Git tracks everything. Nothing is ever truly lost.

---

## Final Notes

**This workflow trusts your team.** That trust is what makes it seamless.

The key ingredients for success:
- **Trust** your collaborators
- **Communicate** about what you're working on
- **Pull** frequently
- **Ask** when unsure

Git handles the technical safety. Your team handles the human coordination.

**You're ready to go! 🚀**

---

**Questions?** Post in Discord #development or email board@vinfastowners.org

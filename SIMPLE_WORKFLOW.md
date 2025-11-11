# Simple Collaboration Workflow for VinFastOwners.org

## For Most Collaborators - Direct Push Workflow

If you're a trusted collaborator working on content, HTML, or CSS changes, you can work directly and push without needing approval.

### Daily Workflow (Simple)

```bash
# 1. Get latest changes
git pull origin main

# 2. Make your changes
# Edit files, test in browser

# 3. Commit your changes
git add .
git commit -m "Clear description of what you changed"

# 4. Push directly to main
git push origin main
```

That's it! No branches, no pull requests, no waiting for approval.

### When to Use This
- Fixing typos or content updates
- Updating text (English/French)
- Small CSS/styling changes
- Adding/updating documents
- Most day-to-day changes

### Golden Rules
1. **Always pull first** - `git pull origin main` before you start
2. **Test your changes** - Open the HTML file in a browser
3. **Commit often** - Small commits are better than one giant commit
4. **Clear messages** - Describe what you changed and why

---

## When You Might Get a Conflict

If someone else pushed while you were working:

```bash
# You try to push
git push origin main

# Git says: "error: failed to push some refs"
```

**Don't panic! Easy fix:**

```bash
# 1. Pull their changes
git pull origin main

# 2. If there's no conflict, it merges automatically
# Then push again
git push origin main

# 3. If there IS a conflict:
# Git will tell you which files conflict
# Open them, look for these markers:

<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> origin/main

# 4. Edit the file to keep the right version
# Remove the <<<<<<, =======, >>>>>>> lines
# Save the file

# 5. Tell git you fixed it
git add conflicted-file.html
git commit -m "Merge changes"
git push origin main
```

---

## For Major Changes - Feature Branch Workflow (Optional)

If you're doing something big that might break things, use a branch:

```bash
# 1. Create a branch for your work
git checkout -b feature/big-change

# 2. Make changes, commit often
git add .
git commit -m "Working on big feature"

# 3. Push your branch
git push origin feature/big-change

# 4. When ready, merge it yourself
git checkout main
git pull origin main
git merge feature/big-change
git push origin main

# 5. Delete the branch
git branch -d feature/big-change
```

---

## Team Communication

**To avoid conflicts, just communicate:**

1. **In Discord #development:**
   - "Working on the about page, be back in 20 mins"
   - "Just updated privacy.html, FYI"
   - "Going to change the navigation - heads up!"

2. **If multiple people need same file:**
   - Coordinate in Discord
   - Take turns
   - Or one person makes their change, pushes, then next person pulls and makes theirs

---

## Emergency: "I Broke Something!"

```bash
# Undo your last commit (keep the files)
git reset --soft HEAD~1

# Or completely undo everything back to last working state
git reset --hard HEAD~1

# If you already pushed, create a new commit that fixes it
# Don't try to erase the bad commit
git revert HEAD
git push origin main
```

**Or just ask for help in Discord!**

---

## Tips for Seamless Collaboration

### Before Starting Work
```bash
git pull origin main
```

### Multiple Times Per Day
```bash
git pull origin main  # Get others' changes
```

### After Finishing
```bash
git add .
git commit -m "What you did"
git push origin main
```

### If You're Going to Edit a File Someone Else Uses
- Post in Discord first
- Or check recent commits: `git log --oneline -5`

---

## Common Commands You'll Use

```bash
# Get latest changes
git pull origin main

# See what you changed
git status
git diff

# Commit your work
git add .
git commit -m "Your message"

# Push to everyone
git push origin main

# See recent changes by others
git log --oneline -10
```

---

## When to Use Pull Requests (Optional)

You don't HAVE to use PRs, but they're helpful for:
- Major redesigns
- New features you want feedback on
- Changes to governance/legal documents
- When you're not sure if your change is right

To create a PR:
```bash
# Work on a branch
git checkout -b feature/my-idea
# ... make changes ...
git push origin feature/my-idea
# Then go to GitHub and click "Create Pull Request"
```

---

## FAQ

**Q: Do I need approval to push to main?**
A: No! If you're a collaborator, just push directly.

**Q: What if I make a mistake?**
A: No worries, git tracks everything. We can always undo it.

**Q: How do I know if someone else is editing the same file?**
A: Ask in Discord or check `git log`. Better to ask than conflict!

**Q: Can I work offline?**
A: Yes! Commit locally, then push when you're back online.

**Q: What if git says "merge conflict"?**
A: It's just asking you to choose between two versions. See the conflict section above, or ask for help!

**Q: Should I create a branch for everything?**
A: No! Only if:
  - You're trying something experimental
  - You want feedback before going live
  - It's a big change that might take days

**Q: What's the easiest workflow?**
A:
```bash
git pull origin main
# ... edit files ...
git add .
git commit -m "Fixed broken link"
git push origin main
```

---

## Visual Workflow

```
You                          GitHub (main)               Other Collaborator
│                                 │                              │
│  git pull ─────────────────────>│                              │
│                                 │                              │
│  (edit files)                   │                              │
│  (test changes)                 │                              │
│                                 │                              │
│  git add .                      │                              │
│  git commit                     │                              │
│  git push ─────────────────────>│                              │
│                                 │                              │
│                                 │<──────── git pull ───────────│
│                                 │                              │
│                                 │                   (edit files)│
│                                 │                              │
│                                 │<──────── git push ───────────│
│                                 │                              │
│  git pull ─────────────────────>│                              │
│  (gets their changes)           │                              │
│                                 │                              │
│  (edit files with new changes)  │                              │
│                                 │                              │
│  git push ─────────────────────>│                              │
│                                 │                              │
```

---

## The Real Secret to Avoiding Conflicts

**Communication > Technology**

- Say what you're working on
- Pull frequently
- Push when you're done
- Ask if unsure

That's it!

---

## Need Help?

- **Discord:** #development channel
- **Email:** board@vinfastowners.org
- **Git problems?** See [GIT_QUICK_REFERENCE.md](GIT_QUICK_REFERENCE.md)

---

**Remember:** Git is here to help, not hinder. The workflow should be as simple as possible while preventing people from accidentally overwriting each other's work.

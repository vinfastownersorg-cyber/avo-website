# Git Quick Reference for VinFastOwners.org

A cheat sheet for common git operations when collaborating on the website.

## Daily Workflow

### Starting Your Day

```bash
# 1. Switch to main branch
git checkout main

# 2. Get latest changes
git pull origin main

# 3. Create your feature branch
git checkout -b feature/your-feature-name
```

### While Working

```bash
# Check what you've changed
git status

# See detailed changes
git diff

# Add specific files
git add filename.html

# Add all changes
git add .

# Commit with a clear message
git commit -m "Add member profiles section to about page"

# Push your branch to GitHub
git push origin feature/your-feature-name
```

### End of Day (or when ready for review)

```bash
# Push latest changes
git push origin feature/your-feature-name

# Then go to GitHub and create a Pull Request
```

---

## Essential Commands

### Checking Status

```bash
# What files have changed?
git status

# Show changes in detail
git diff

# Show changes for a specific file
git diff filename.html

# Show commit history
git log --oneline -10
```

### Creating Branches

```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# Just switch to existing branch
git checkout branch-name

# List all branches
git branch -a

# See which branch you're on
git branch
```

### Staging and Committing

```bash
# Stage specific file
git add filename.html

# Stage all HTML files
git add *.html

# Stage everything
git add .

# Unstage a file
git reset filename.html

# Commit staged changes
git commit -m "Your descriptive message"

# Commit with longer message
git commit
# (This opens your editor for a detailed message)
```

### Syncing with Remote

```bash
# Get latest changes from main
git checkout main
git pull origin main

# Push your branch
git push origin your-branch-name

# Push and set upstream (first time)
git push -u origin your-branch-name
```

### Updating Your Branch

```bash
# When main has new changes and you need them:

# Option 1: Merge (creates merge commit)
git checkout main
git pull origin main
git checkout your-branch
git merge main

# Option 2: Rebase (cleaner history, more advanced)
git checkout main
git pull origin main
git checkout your-branch
git rebase main
```

---

## Fixing Mistakes

### Before Committing

```bash
# Discard changes in a specific file
git checkout -- filename.html

# Discard all changes (BE CAREFUL!)
git reset --hard HEAD

# Unstage a file (but keep changes)
git reset filename.html
```

### After Committing

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Change last commit message
git commit --amend -m "New message"

# Add more changes to last commit
git add forgotten-file.html
git commit --amend --no-edit
```

### Fixing a Pushed Commit

```bash
# If you pushed a bad commit:
# DO NOT use git push --force on main branch!

# Instead, create a new commit that reverses it
git revert HEAD
git push origin your-branch
```

---

## Resolving Merge Conflicts

### When You See a Conflict

```bash
# 1. Identify conflicting files
git status

# 2. Open the file and look for:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> main

# 3. Edit the file to keep what you want
# Remove the <<<<<<<, =======, >>>>>>> markers

# 4. Mark as resolved
git add conflicted-file.html

# 5. Complete the merge
git commit -m "Resolve merge conflict in conflicted-file.html"

# 6. Push to your branch
git push origin your-branch
```

---

## Branch Management

### Cleaning Up

```bash
# After your PR is merged:

# 1. Switch back to main
git checkout main

# 2. Get latest (includes your merged changes)
git pull origin main

# 3. Delete your local branch
git branch -d feature/old-feature

# 4. Delete remote branch (if not auto-deleted)
git push origin --delete feature/old-feature
```

### Listing Branches

```bash
# Local branches
git branch

# Remote branches
git branch -r

# All branches
git branch -a

# Branches with last commit info
git branch -v
```

---

## Stashing Changes

Sometimes you need to switch branches but aren't ready to commit:

```bash
# Save your changes temporarily
git stash

# Switch branches and do other work
git checkout other-branch
# ... do stuff ...

# Come back and restore your changes
git checkout your-branch
git stash pop

# List all stashes
git stash list

# Apply a specific stash
git stash apply stash@{0}

# Delete a stash
git stash drop stash@{0}
```

---

## Viewing History

```bash
# Last 10 commits, one line each
git log --oneline -10

# Detailed log
git log

# Show changes in last commit
git show HEAD

# Show changes in specific commit
git show abc1234

# Show who changed each line of a file
git blame filename.html

# Search commits for a keyword
git log --all --grep="bug fix"
```

---

## Working with Remote

```bash
# View remote repositories
git remote -v

# Add a remote
git remote add upstream https://github.com/original/repo.git

# Fetch changes without merging
git fetch origin

# See what's different from remote
git fetch origin
git log origin/main..main

# Set upstream branch
git branch --set-upstream-to=origin/main main
```

---

## Collaboration Tips

### Before Starting Work

1. Always pull latest main: `git checkout main && git pull origin main`
2. Create a new branch for your work
3. Check Discord to see what others are working on

### While Working

1. Commit frequently with clear messages
2. Push to your branch regularly
3. Keep your branch updated with main
4. Test your changes in a browser

### Creating a Pull Request

1. Push your branch: `git push origin your-branch`
2. Go to GitHub.com
3. Click "Compare & pull request"
4. Fill out the PR template
5. Request reviewers
6. Address any feedback

### After PR is Merged

1. Delete your branch
2. Pull latest main
3. Start new feature from fresh main branch

---

## Common Workflows

### Quick Fix

```bash
git checkout main
git pull origin main
git checkout -b fix/broken-link
# ... make your fix ...
git add .
git commit -m "Fix broken link in navigation"
git push origin fix/broken-link
# Create PR on GitHub
```

### Feature Development

```bash
git checkout main
git pull origin main
git checkout -b feature/member-profiles
# ... work on feature ...
git add .
git commit -m "Add member profile cards"
# ... more work ...
git add .
git commit -m "Add profile edit functionality"
# ... keep main updated ...
git checkout main
git pull origin main
git checkout feature/member-profiles
git merge main
# ... finish feature ...
git push origin feature/member-profiles
# Create PR on GitHub
```

### Emergency Hotfix

```bash
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug
# ... fix the bug ...
git add .
git commit -m "Fix critical security issue in contact form"
git push origin hotfix/critical-bug
# Create PR immediately, mark as urgent
```

---

## Troubleshooting

### "Your branch is behind origin/main"

```bash
git pull origin main
```

### "Your branch is ahead of origin/main"

```bash
git push origin your-branch
```

### "Your branch has diverged"

```bash
# If you want to keep your changes
git pull --rebase origin main

# If you want to discard your changes
git reset --hard origin/main
```

### "Permission denied" when pushing

- Check you have write access to the repository
- Verify your GitHub credentials
- Make sure you're pushing to the right remote

### "Failed to push some refs"

```bash
# Someone else pushed changes, pull first
git pull origin your-branch
# Resolve any conflicts
git push origin your-branch
```

### Accidentally committed to main

```bash
# If you haven't pushed yet:
git reset --soft HEAD~1
git checkout -b feature/should-be-on-branch
git commit -m "Your commit message"

# If you already pushed:
# Contact @michaelbivens immediately!
```

---

## Git Configuration

### One-Time Setup

```bash
# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default editor
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "nano"         # Nano

# Helpful aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Now you can use:
# git st instead of git status
# git co main instead of git checkout main
```

### Per-Repository Configuration

```bash
# Set identity for this project only
cd /path/to/vinfastowners-website
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

---

## GitHub-Specific

### Creating Pull Request from Command Line

```bash
# If you have GitHub CLI installed
gh pr create --title "Your PR title" --body "Description"

# View PRs
gh pr list

# Check out a PR locally
gh pr checkout 123
```

### Viewing Repository Info

```bash
# Open repo in browser
gh repo view --web

# Clone repo
gh repo clone vinfastownersorg-cyber/avo-website
```

---

## Help Commands

```bash
# Get help for any git command
git help <command>
git help commit
git help branch

# Quick reference
git <command> --help
```

---

## When in Doubt

1. **Don't panic** - Almost everything in git can be undone
2. **Ask for help** - an appropriate Discord channel
3. **Make a backup** - `git stash` or copy files before experimenting
4. **Read the error message** - Git usually tells you what went wrong
5. **Use git status** - Shows what's happening in your repository

---

## Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Contributing Guide](CONTRIBUTING.md)
- [Git Cheat Sheet PDF](https://education.github.com/git-cheat-sheet-education.pdf)

---

## Contact

Questions about git or the workflow?
- Discord: an appropriate Discord channel
- Email: board@vinfastowners.org

---

**Last Updated:** 2024-11-11

# Contributing to VinFastOwners.org Website

Thank you for contributing to the VinFastOwners.org community website! This guide will help you collaborate effectively and avoid conflicts when making changes.

---

## 🚀 Quick Start

**New to the project? Want the simple workflow?**

👉 **See [SIMPLE_WORKFLOW.md](SIMPLE_WORKFLOW.md)** for the easiest way to contribute.

This document contains the full detailed workflow. The simple workflow is recommended for most collaborators doing everyday edits.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Git Workflow](#git-workflow)
- [Branch Strategy](#branch-strategy)
- [Making Changes](#making-changes)
- [Pull Request Process](#pull-request-process)
- [Avoiding Conflicts](#avoiding-conflicts)
- [Code Review](#code-review)
- [Best Practices](#best-practices)

---

## Getting Started

### Prerequisites

- Git installed on your system
- GitHub account with access to the repository
- Text editor or IDE of your choice
- Basic knowledge of HTML, CSS, and JavaScript

### Initial Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vinfastownersorg-cyber/avo-website.git
   cd avo-website
   ```

2. **Configure your git identity:**
   ```bash
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

3. **Check the repository status:**
   ```bash
   git status
   git branch -a
   ```

---

## Git Workflow

We use a **feature branch workflow** to manage changes and prevent conflicts.

### Basic Workflow

```
main (production)
  └─> feature/your-feature (your work)
```

### Step-by-Step Process

1. **Always start with the latest main branch:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create a new branch for your changes:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit frequently:**
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

4. **Push your branch to GitHub:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request on GitHub**

6. **Wait for review and approval**

7. **After merge, delete your local branch:**
   ```bash
   git checkout main
   git pull origin main
   git branch -d feature/your-feature-name
   ```

---

## Branch Strategy

### Branch Naming Conventions

Use descriptive branch names that indicate what you're working on:

- `feature/add-member-profiles` - New features
- `fix/contact-form-validation` - Bug fixes
- `update/privacy-policy` - Content updates
- `docs/contributing-guide` - Documentation changes
- `style/mobile-responsive` - Styling changes

### Main Branch Protection

The `main` branch represents the production website:
- Never commit directly to `main`
- All changes must go through Pull Requests
- Requires at least one approval before merging
- Must pass any automated checks

---

## Making Changes

### Before You Start

1. **Check existing issues and Pull Requests** to avoid duplicate work
2. **Communicate with other collaborators** about what you're working on
3. **Pull the latest changes** from main before creating your branch

### While Working

1. **Commit frequently** with clear, descriptive messages:
   ```bash
   # Good commit messages
   git commit -m "Add member registration form to join.html"
   git commit -m "Fix mobile menu not closing on navigation"
   git commit -m "Update privacy policy with GDPR requirements"

   # Avoid vague messages
   git commit -m "Fixed stuff"
   git commit -m "Updates"
   ```

2. **Keep your branch up to date** with main:
   ```bash
   git checkout main
   git pull origin main
   git checkout feature/your-feature-name
   git merge main
   ```

3. **Test your changes** before committing:
   - Open HTML files in multiple browsers
   - Check mobile responsiveness
   - Verify all links work
   - Test forms and interactive elements

---

## Pull Request Process

### Creating a Pull Request

1. **Push your branch to GitHub:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Go to GitHub** and click "Compare & pull request"

3. **Fill out the PR template** with:
   - Clear description of what changed
   - Why the change was needed
   - Screenshots (if UI changes)
   - Testing steps
   - Any breaking changes or dependencies

4. **Request reviewers** from the team

### Pull Request Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Content update
- [ ] Documentation
- [ ] Style/UI change

## Changes Made
- List specific changes
- Include file names if relevant

## Testing
How to test these changes:
1. Step one
2. Step two

## Screenshots (if applicable)
Add screenshots for visual changes

## Checklist
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Updated documentation if needed
- [ ] Followed code style guidelines
```

---

## Avoiding Conflicts

### Prevention Strategies

1. **Pull frequently** from main:
   ```bash
   # Do this daily or before starting work
   git checkout main
   git pull origin main
   git checkout your-branch
   git merge main
   ```

2. **Communicate with collaborators:**
   - Use an appropriate Discord channel to coordinate
   - Check who else is working on similar files
   - Discuss major changes before starting

3. **Work on separate files when possible:**
   - Divide work so different people edit different files
   - If multiple people need to edit the same file, coordinate closely

4. **Make smaller, focused changes:**
   - Smaller PRs are easier to review and less likely to conflict
   - One feature or fix per branch

### Handling Merge Conflicts

If you get a merge conflict:

1. **Don't panic!** Conflicts are normal and fixable.

2. **Identify the conflicting files:**
   ```bash
   git status
   ```

3. **Open the conflicting files** and look for conflict markers:
   ```html
   <<<<<<< HEAD
   Your changes
   =======
   Their changes
   >>>>>>> main
   ```

4. **Resolve conflicts manually:**
   - Keep the correct version or combine both
   - Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
   - Test that everything still works

5. **Mark as resolved and commit:**
   ```bash
   git add conflicted-file.html
   git commit -m "Resolve merge conflict in conflicted-file.html"
   git push origin your-branch
   ```

6. **Ask for help if needed** - reach out on Discord!

---

## Code Review

### For Authors

- Be responsive to feedback
- Don't take criticism personally - it's about the code, not you
- Make requested changes promptly
- Ask questions if feedback is unclear

### For Reviewers

- Be constructive and kind
- Explain why changes are needed
- Approve PRs promptly when they're ready
- Test the changes locally if possible

### Review Checklist

- [ ] Code follows project style guidelines
- [ ] Changes are well-documented
- [ ] No sensitive information (passwords, API keys, personal data)
- [ ] HTML is valid and semantic
- [ ] CSS doesn't break existing styles
- [ ] JavaScript has no console errors
- [ ] Works on mobile and desktop
- [ ] Accessible (keyboard navigation, screen readers)
- [ ] Bilingual content (English and French) where applicable

---

## Best Practices

### File Organization

- Keep related files together
- Use clear, descriptive file names
- Don't commit temporary or generated files
- Update `.gitignore` for new file types to exclude

### HTML Best Practices

```html
<!-- Use semantic HTML -->
<header>, <nav>, <main>, <article>, <section>, <footer>

<!-- Include proper meta tags -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Use consistent indentation (2 or 4 spaces) -->
<div>
    <p>Consistent indentation</p>
</div>

<!-- Add comments for complex sections -->
<!-- Member Profile Cards -->
<div class="profile-cards">
    ...
</div>
```

### CSS Best Practices

```css
/* Use classes over IDs for styling */
.card { ... }

/* Keep selectors simple */
.nav-link { ... }

/* Group related styles */
/* === Navigation === */
.nav { ... }
.nav-link { ... }

/* Comment complex styles */
/* Fix Safari flexbox bug */
.flex-container {
    display: flex;
}
```

### JavaScript Best Practices

```javascript
// Use descriptive variable names
const membershipForm = document.getElementById('membership-form');

// Add error handling
try {
    // Your code
} catch (error) {
    console.error('Error:', error);
}

// Comment complex logic
// Calculate membership tier based on join date
function calculateTier(joinDate) {
    // ...
}
```

### Bilingual Content

The website supports English and French:

```html
<!-- Use lang attributes -->
<p lang="en">English text</p>
<p lang="fr">Texte français</p>

<!-- Keep both languages in sync -->
<h2>
    <span lang="en">About Us</span> /
    <span lang="fr">À Propos</span>
</h2>
```

### Security Guidelines

- Never commit sensitive data (passwords, API keys, tokens)
- Sanitize user inputs
- Use HTTPS for all external resources
- Keep dependencies updated
- Review code for XSS vulnerabilities

### Performance

- Optimize images before committing
- Minify CSS and JavaScript for production
- Avoid large file uploads
- Use lazy loading for images when appropriate

---

## Common Git Commands Reference

### Daily Workflow

```bash
# Get latest changes
git pull origin main

# See what you've changed
git status
git diff

# Stage and commit changes
git add filename.html
git commit -m "Your message"

# Push to your branch
git push origin your-branch
```

### Branch Management

```bash
# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main
git checkout feature/other-feature

# List all branches
git branch -a

# Delete local branch (after merge)
git branch -d feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature
```

### Syncing with Main

```bash
# Update your branch with latest main
git checkout main
git pull origin main
git checkout your-branch
git merge main
```

### Undoing Changes

```bash
# Discard changes in a file (before commit)
git checkout -- filename.html

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# View commit history
git log --oneline
```

---

## Communication Channels

### Discord Channels

- **#development** - Technical discussions and coordination
- **#board-questions** - Questions for leadership
- **#governance** - Policy and procedure discussions

### GitHub

- **Issues** - Bug reports and feature requests
- **Pull Requests** - Code reviews and discussions
- **Discussions** - General project conversations

### Email

- **board@vinfastowners.org** - General inquiries
- **privacy@vinfastowners.org** - Privacy concerns

---

## Getting Help

### Stuck on Git?

1. Check this guide first
2. Ask in an appropriate Discord channel
3. Search GitHub for similar issues
4. Contact board@vinfastowners.org

### Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## Project-Specific Notes

### Repository Information

- **GitHub:** https://github.com/vinfastownersorg-cyber/avo-website.git
- **Main Branch:** `main`
- **Production URL:** https://vinfastowners.org

### Important Files

- `index.html` - Homepage
- `privacy.html` - Privacy policy
- `board.html` - Board information
- `documents.html` - Governance documents
- `README.md` - Project documentation
- `DISCORD_WEBHOOK_GUIDE.md` - Discord integration setup

### Active Integrations

- Discord webhooks for form submissions
- GitHub Issues for problem tracking
- GitHub Actions workflows for automation (news, stock prices, YouTube monitoring)
- Netlify for deployment (if configured)

**Working with GitHub Actions?** See [GITHUB_WORKFLOWS_GUIDE.md](GITHUB_WORKFLOWS_GUIDE.md) for setup and usage.

---

## Code of Conduct

- Be respectful and professional
- Help others learn and grow
- Give credit where it's due
- Focus on constructive feedback
- Collaborate, don't compete

---

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

## Questions?

If you have questions about contributing, reach out:
- Discord: an appropriate Discord channel
- Email: board@vinfastowners.org
- GitHub: Open an issue or discussion

Thank you for contributing to VinFastOwners.org!

---

**Last Updated:** 2024-11-11

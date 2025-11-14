# VinFastOwners.org Documentation Index

Complete guide to all documentation for the Association of VinFast Owners website.

---

## 🚀 Getting Started

**New to the project?** Start here:

1. **[SIMPLE_WORKFLOW.md](git/SIMPLE_WORKFLOW.md)** - Quick start for making everyday edits (5 minutes)
2. **[CONTRIBUTING.md](setup/CONTRIBUTING.md)** - Full contribution workflow and best practices
3. **[CLAUDE_CODE_GUIDE.md](claude/CLAUDE_CODE_GUIDE.md)** - Using Claude Code AI assistant in VS Code

---

## 📚 Documentation by Category

### Setup & Deployment

**[DEPLOYMENT_GUIDE.md](setup/DEPLOYMENT_GUIDE.md)** - Deploy website to production
- GitHub Pages (free, testing/staging)
- **Netlify** (recommended: free, auto-deploy, CDN, SSL)
- Shared hosting (cPanel/FTP)
- VPS/cloud servers (DigitalOcean, Linode, etc.)
- Domain configuration, SSL setup
- Auto-deployment from GitHub

**[OPTION1_SETUP_INSTRUCTIONS.md](setup/OPTION1_SETUP_INSTRUCTIONS.md)** - GitHub repository collaboration setup
- Add collaborators with write access
- Configure branch protection
- Set up team communication

**[GITHUB_WORKFLOWS_GUIDE.md](setup/GITHUB_WORKFLOWS_GUIDE.md)** - Working with GitHub Actions
- **One-time token setup** (workflow scope)
- Managing automated workflows (news, stock, YouTube)
- Triggering workflows manually
- Viewing logs and troubleshooting
- Cron schedules and timezone conversion

---

### Git Workflows

**[SIMPLE_WORKFLOW.md](git/SIMPLE_WORKFLOW.md)** ⭐ - Recommended for daily use
- Pull → Edit → Commit → Push
- Quick reference for common tasks
- Conflict resolution
- Best for most contributors

**[GIT_QUICK_REFERENCE.md](git/GIT_QUICK_REFERENCE.md)** - Git commands cheat sheet
- Common git commands
- Branching strategies
- Undo changes
- Emergency fixes

**[HOW_GIT_PREVENTS_OVERWRITES.md](git/HOW_GIT_PREVENTS_OVERWRITES.md)** - Understanding git safety
- How git protects your work
- What happens during conflicts
- Why you can't accidentally overwrite

---

### Discord Bots & Automation

**[YOUTUBE_MONITOR_SETUP.md](bots/YOUTUBE_MONITOR_SETUP.md)** - YouTube content monitor
- Monitors VinFast owner channels
- Posts new videos to Discord #youtube
- Add/remove channels
- Troubleshooting

**[HOW_TO_ADD_YOUTUBE_CHANNELS.md](bots/HOW_TO_ADD_YOUTUBE_CHANNELS.md)** - Quick guide
- Find YouTube channel IDs
- Add to workflow
- Test monitoring

**[VINFAST_NEWS_BOT_SETUP.md](bots/VINFAST_NEWS_BOT_SETUP.md)** - News aggregator bot
- Fetches VinFast news from multiple sources
- Posts to Discord #stock-and-news daily
- Configuration and secrets

**[STOCK_PRICE_BOT_SETUP.md](bots/STOCK_PRICE_BOT_SETUP.md)** - Stock price monitor
- Tracks VFS (VinFast) and VIC (VinGroup)
- Daily price updates to Discord
- Alpha Vantage API setup

**[STOCK_BOT_QUICK_SETUP.md](bots/STOCK_BOT_QUICK_SETUP.md)** - Quick start
- Fast setup for stock bot
- Essential configuration only

---

### Claude Code / AI Development

**[CLAUDE_CODE_GUIDE.md](claude/CLAUDE_CODE_GUIDE.md)** - Using Claude Code
- Setup in VS Code
- Best practices for prompts
- Working sessions
- Security reminders

**[CLAUDE_SESSION_GUIDE.md](claude/CLAUDE_SESSION_GUIDE.md)** - For Claude to read
- Project guidelines
- Bilingual requirements (EN/FR)
- Privacy and security standards
- Accessibility requirements
- ⚠️ Start every Claude session by asking Claude to read this file

---

### GitHub Configuration

**[.github/LABELS.md](../.github/LABELS.md)** - GitHub issue labels
- Label definitions and usage
- Color coding scheme
- When to use each label

**[.github/pull_request_template.md](../.github/pull_request_template.md)** - PR template
- Standard format for pull requests
- Checklist for reviewers

---

### Additional Resources

**[SEO-RECOMMENDATIONS.md](../SEO-RECOMMENDATIONS.md)** - SEO optimization report
- Implemented SEO improvements
- Meta tags, schema.org data
- Multilingual SEO (EN/FR)
- Geographic targeting (US/Canada)

**[.claude/guide.md](../.claude/guide.md)** - Claude Code internal guide
- Auto-loaded by Claude Code
- Project-specific instructions

---

## 📋 Quick Reference by Task

### I want to...

**...make a simple content change**
→ [SIMPLE_WORKFLOW.md](git/SIMPLE_WORKFLOW.md)

**...deploy the website to production**
→ [DEPLOYMENT_GUIDE.md](setup/DEPLOYMENT_GUIDE.md) (use Netlify)

**...work with GitHub Actions workflows**
→ [GITHUB_WORKFLOWS_GUIDE.md](setup/GITHUB_WORKFLOWS_GUIDE.md)

**...add a new YouTube channel to monitor**
→ [HOW_TO_ADD_YOUTUBE_CHANNELS.md](bots/HOW_TO_ADD_YOUTUBE_CHANNELS.md)

**...use Claude Code to help**
→ [CLAUDE_CODE_GUIDE.md](claude/CLAUDE_CODE_GUIDE.md)
→ Ask Claude to read [CLAUDE_SESSION_GUIDE.md](claude/CLAUDE_SESSION_GUIDE.md) first

**...understand how git prevents overwrites**
→ [HOW_GIT_PREVENTS_OVERWRITES.md](git/HOW_GIT_PREVENTS_OVERWRITES.md)

**...set up a Discord bot**
→ [YOUTUBE_MONITOR_SETUP.md](bots/YOUTUBE_MONITOR_SETUP.md)
→ [VINFAST_NEWS_BOT_SETUP.md](bots/VINFAST_NEWS_BOT_SETUP.md)
→ [STOCK_PRICE_BOT_SETUP.md](bots/STOCK_PRICE_BOT_SETUP.md)

**...add collaborators to the repository**
→ [OPTION1_SETUP_INSTRUCTIONS.md](setup/OPTION1_SETUP_INSTRUCTIONS.md)

**...learn git commands**
→ [GIT_QUICK_REFERENCE.md](git/GIT_QUICK_REFERENCE.md)

---

## 🎯 Recommended Reading Order

### For New Contributors

1. [SIMPLE_WORKFLOW.md](git/SIMPLE_WORKFLOW.md) - Learn the basic workflow
2. [CLAUDE_CODE_GUIDE.md](claude/CLAUDE_CODE_GUIDE.md) - Set up AI assistant
3. [CONTRIBUTING.md](setup/CONTRIBUTING.md) - Understand contribution guidelines

### For Maintainers

1. [DEPLOYMENT_GUIDE.md](setup/DEPLOYMENT_GUIDE.md) - Deploy to production
2. [GITHUB_WORKFLOWS_GUIDE.md](setup/GITHUB_WORKFLOWS_GUIDE.md) - Manage automation
3. [OPTION1_SETUP_INSTRUCTIONS.md](setup/OPTION1_SETUP_INSTRUCTIONS.md) - Manage collaborators

### For Bot Developers

1. [YOUTUBE_MONITOR_SETUP.md](bots/YOUTUBE_MONITOR_SETUP.md)
2. [VINFAST_NEWS_BOT_SETUP.md](bots/VINFAST_NEWS_BOT_SETUP.md)
3. [STOCK_PRICE_BOT_SETUP.md](bots/STOCK_PRICE_BOT_SETUP.md)
4. [GITHUB_WORKFLOWS_GUIDE.md](setup/GITHUB_WORKFLOWS_GUIDE.md)

---

## 📁 Documentation Structure

```
docs/
├── INDEX.md                          # This file
│
├── setup/                            # Setup & Configuration
│   ├── DEPLOYMENT_GUIDE.md          # Website hosting & deployment
│   ├── GITHUB_WORKFLOWS_GUIDE.md    # GitHub Actions automation
│   ├── CONTRIBUTING.md              # Contribution guidelines
│   └── OPTION1_SETUP_INSTRUCTIONS.md # Repository collaboration setup
│
├── git/                              # Git Workflows
│   ├── SIMPLE_WORKFLOW.md           # Quick start workflow ⭐
│   ├── GIT_QUICK_REFERENCE.md       # Git commands cheat sheet
│   └── HOW_GIT_PREVENTS_OVERWRITES.md # Git safety explained
│
├── bots/                             # Discord Bots & Automation
│   ├── YOUTUBE_MONITOR_SETUP.md     # YouTube content monitor
│   ├── HOW_TO_ADD_YOUTUBE_CHANNELS.md # Add YouTube channels
│   ├── VINFAST_NEWS_BOT_SETUP.md    # News aggregator
│   ├── STOCK_PRICE_BOT_SETUP.md     # Stock price monitor
│   └── STOCK_BOT_QUICK_SETUP.md     # Quick setup guide
│
└── claude/                           # AI Development Tools
    ├── CLAUDE_CODE_GUIDE.md         # Using Claude Code
    └── CLAUDE_SESSION_GUIDE.md      # For Claude to read
```

---

## 🔍 Finding Documentation

### Search by Keyword

- **Deployment, hosting, server**: [DEPLOYMENT_GUIDE.md](setup/DEPLOYMENT_GUIDE.md)
- **GitHub Actions, workflows, automation**: [GITHUB_WORKFLOWS_GUIDE.md](setup/GITHUB_WORKFLOWS_GUIDE.md)
- **Git, version control, commits**: [SIMPLE_WORKFLOW.md](git/SIMPLE_WORKFLOW.md) or [GIT_QUICK_REFERENCE.md](git/GIT_QUICK_REFERENCE.md)
- **Discord, bots, webhooks**: Check [bots/](bots/) directory
- **AI, Claude, coding assistant**: [CLAUDE_CODE_GUIDE.md](claude/CLAUDE_CODE_GUIDE.md)
- **Collaborators, permissions, access**: [OPTION1_SETUP_INSTRUCTIONS.md](setup/OPTION1_SETUP_INSTRUCTIONS.md)
- **YouTube, videos, channels**: [YOUTUBE_MONITOR_SETUP.md](bots/YOUTUBE_MONITOR_SETUP.md)
- **News, RSS, articles**: [VINFAST_NEWS_BOT_SETUP.md](bots/VINFAST_NEWS_BOT_SETUP.md)
- **Stock prices, VFS, VIC**: [STOCK_PRICE_BOT_SETUP.md](bots/STOCK_PRICE_BOT_SETUP.md)
- **SEO, search engine, optimization**: [SEO-RECOMMENDATIONS.md](../SEO-RECOMMENDATIONS.md)

---

## 🆘 Getting Help

**Can't find what you need?**

1. **Check this index** - Use Cmd/Ctrl + F to search
2. **Read the relevant guide** - Guides are comprehensive
3. **Search the repository** - Use GitHub's search or `grep`
4. **Ask in Discord** - Post in an appropriate Discord channel
5. **Create an issue** - https://github.com/vinfastownersorg-cyber/avo-website/issues
6. **Email the board** - board@vinfastowners.org

---

## 📝 Keeping Documentation Updated

**When creating new documentation:**

1. Add it to the appropriate folder (`setup/`, `git/`, `bots/`, `claude/`)
2. Update this INDEX.md with a link and description
3. Update README.md if it's a major guide
4. Commit with clear message describing the documentation

**When updating existing documentation:**

1. Update the "Last Updated" date at bottom of file
2. Add changelog section if major changes
3. Commit with description of what changed

---

## 📊 Documentation Status

| Category | Files | Status | Last Updated |
|----------|-------|--------|--------------|
| Setup & Deployment | 4 | ✅ Complete | 2025-11-14 |
| Git Workflows | 3 | ✅ Complete | 2024-11-11 |
| Discord Bots | 5 | ✅ Complete | 2024-11-11 |
| Claude/AI Tools | 2 | ✅ Complete | 2024-11-11 |
| GitHub Config | 2 | ✅ Complete | 2024-11-11 |

**Total Documentation Files:** 19

---

## 🎓 Contributing to Documentation

Documentation contributions are welcome!

**Good documentation:**
- Clear, concise, scannable
- Includes examples
- Step-by-step instructions
- Screenshots where helpful
- Updated regularly

**See [CONTRIBUTING.md](setup/CONTRIBUTING.md) for full guidelines.**

---

**Last Updated:** 2025-11-14

**Maintained by:** VinFast Owners Association Board & Community

**Questions?** Discord: discord.gg/puQqaEZFAQ | Email: board@vinfastowners.org

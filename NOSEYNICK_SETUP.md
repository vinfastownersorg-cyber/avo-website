# Quick Setup Guide for @noseynick

**What is Claude Code?** It's an AI coding assistant that lives inside VS Code. Think of it as an expert developer who knows your codebase and can write code, fix bugs, and explain things. You type what you want in plain English, and Claude does the work.

**Goal:** Get Claude Code working in VS Code with GitHub integration for the AVO website project.

---

## What You'll Need

- VS Code installed
- A GitHub account (you probably have this)
- An Anthropic account (free - you'll create this)
- 10 minutes

---

## Step 1: Install Claude Code in VS Code (3 minutes)

1. **Open VS Code**
2. **Open the Extensions panel:**
   - Click the square icon in the left sidebar, OR
   - Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
3. **Search for "Claude Code"** in the search box at the top
4. **Click Install** on the "Claude Code" extension by Anthropic
5. **Sign in:**
   - Click "Sign in with Anthropic"
   - Don't have an account? Click "Create Account" (it's free)
   - Follow the prompts to create your account

**You'll see a new icon on the left sidebar** (looks like a chat bubble). That's Claude!

---

## Step 2: Meet Claude (2 minutes)

Click the Claude icon on the left sidebar. You'll see a chat interface.

**Try this first prompt to see how it works:**
```
Hi Claude! Can you explain what you can help me with?
```

Claude will respond in the chat. **This is how you'll work:** You type what you want, Claude responds and can make changes to your code.

**Key concept:** You're having a conversation with an AI that can read your files, write code, run commands, and explain things. You just tell it what you want in plain English (or ask questions).

---

## Step 3: Get the Project Code (Use Claude!)

Now let's get the AVO website code onto your computer. **Instead of googling git commands, just ask Claude:**

**Copy/paste this into Claude:**
```
Please help me clone this GitHub repository:
https://github.com/vinfastownersorg-cyber/avo-website

Then configure git with:
- Name: NoseyNick
- Email: noseynick@example.com

After setup, show me the repository structure and read the CLAUDE_SESSION_GUIDE.md file.
```

**What happens:** Claude will run the git commands, set up your credentials, download the code, and read the project guide so it understands how this project works.

**You'll see:** Claude shows you what it's doing in the chat, and you can see the files appear in VS Code's file explorer on the left.

**Understanding prompts:** The text you copy/paste above is called a "prompt." It's just instructions written in plain English. Claude reads it and does what you asked.

---

## Step 4: How to Talk to Claude (Important!)

**Claude is like talking to a senior developer who's patient and never judges.** Here's how conversations work:

### Claude can see your code
- It can read any file you ask about
- It can see your file structure
- It knows what's been modified

### You give instructions in plain English
- ✅ "Add a new section to the homepage about upcoming events"
- ✅ "Fix the broken link on the board page"
- ✅ "Explain what this CSS code does"
- ❌ Don't need to say technical commands unless you want to

### Claude will ask clarifying questions
If your request is vague, Claude asks for details. Just answer naturally.

### Claude shows you what it's doing
You'll see each change it makes. You can say "stop" or "undo that" anytime.

---

## Step 5: Your "Getting Started" Prompt

**Every time you sit down to work** (new day, new feature, etc.), start with this prompt:

**Copy/paste this into Claude:**
```
Please read CLAUDE_SESSION_GUIDE.md before we start working.

I'm @noseynick, collaborating on the AVO website.

Show me:
1. Current git status
2. Any recent commits I should know about
3. What should I work on today?

[Then describe what you want to work on, or ask "what needs to be done?"]
```

**Why this matters:**
- The `CLAUDE_SESSION_GUIDE.md` file teaches Claude about this specific project
- It learns the rules (bilingual, VinFast colors, security stuff)
- Without reading it, Claude is generic. After reading it, Claude is a VinFast website expert.

**Think of it like:** Handing a new developer the project documentation before they start coding.

---

## Examples: What to Ask Claude

Now that Claude knows the project, here are real examples of what you can ask. **Copy these or write your own in plain English:**

### When You Want to Add Something:
```
Add a new board member to the board.html page:
- Name: John Smith
- Title: Director at Large
- Vehicle: VF9 Plus in Crimson Red
- Bio: John has been a VinFast owner since 2023...
```

### When Something is Broken:
```
The Resources section accordion isn't expanding when I click it.
Can you debug and fix it?
```

### When You Want to Learn:
```
Explain how the language toggle works. I want to understand
how the EN/FR switching is implemented.
```

### When You're Not Sure:
```
I want to add a photo gallery for events. What's the best way
to do this given our current setup?
```

### Before You Push Changes:
```
Review all my changes and make sure they follow the project guidelines
(bilingual, mobile-friendly, etc.). Then commit and push.
```

---

## Daily Workflow (Simple)

**1. Start of day:** Give Claude the "Getting Started" prompt (from Step 5)

**2. Make your changes:** Tell Claude what you want in plain English

**3. End of day:** Ask Claude to commit and push:
```
Review my changes, make sure everything looks good,
then commit and push to GitHub with a clear message.
```

**That's it.** Claude handles all the git commands, file operations, etc.

---

## Understanding Git (Brief Explanation)

You'll hear these terms. Here's what they mean:

- **Repository (repo):** The project folder with all the code
- **Commit:** Saving your changes with a description of what you did
- **Push:** Uploading your commits to GitHub so others can see them
- **Pull:** Downloading others' changes from GitHub
- **Main branch:** The primary version of the code

**The workflow:**
1. Pull (get latest changes)
2. Make your edits
3. Commit (save with description)
4. Push (upload to GitHub)

**Good news:** Claude does all of this for you. Just ask it to "pull latest changes" or "commit and push."

---

## What If Something Goes Wrong?

### Don't panic. Ask Claude:
```
Something went wrong: [describe error or problem]
Help me fix it.
```

Claude can:
- Undo commits
- Restore deleted files
- Fix merge conflicts
- Explain what happened

### If Claude Can't Fix It:
- Discord: #development channel
- Tag @michaelbivens
- We'll help!

---

## Tips for Working with Claude

**DO:**
- ✅ Start each session with "read CLAUDE_SESSION_GUIDE.md"
- ✅ Be specific about what you want
- ✅ Ask "why?" if you don't understand something
- ✅ Let Claude read files instead of copying code
- ✅ Review changes before pushing

**DON'T:**
- ❌ Skip the getting started prompt
- ❌ Push without reviewing (ask Claude to show you what changed)
- ❌ Work on the same files as someone else at the same time (coordinate in Discord)

---

## Learning More

**Claude can teach you:** Just ask!
```
Explain [any concept] like I'm learning it for the first time.
```

Examples:
- "Explain how CSS works"
- "What is a git merge conflict and how do we fix them?"
- "How does the bilingual toggle work in this project?"

**Claude is a patient teacher.** Use it to learn while you work.

---

## Quick Reference Card (Bookmark This!)

**Every Session Start:**
```
Please read CLAUDE_SESSION_GUIDE.md before we start working.
I'm @noseynick. Show me git status and recent commits.
```

**Get Latest Code:**
```
Pull the latest changes from main branch.
```

**Preview Your Work:**
```
Start a local server so I can see my changes in the browser.
```

**Push Your Changes:**
```
Review my changes, then commit and push with a descriptive message.
```

**When Stuck:**
```
[Describe problem]. Help me fix it.
```

---

## Advanced: Let Claude Plan First

For bigger changes, ask Claude to plan before coding:

```
I want to add [big feature].
Before we start, create a plan:
1. What files need to change?
2. What are the steps?
3. Any potential issues?

Then we'll implement it step by step.
```

This helps you understand the scope before diving in.

---

## Common Prompts (Copy/Paste)

**Add content:**
```
Add [description] to [page/section].
Make sure it's bilingual and follows our design patterns.
```

**Fix a bug:**
```
[Description of bug]. Can you find and fix it?
```

**Learn something:**
```
Explain [concept/code/file] to me.
```

**Check your work:**
```
Review all my changes for:
- Bilingual compliance
- Mobile responsiveness
- Security issues
- Code quality
```

---

## Final Tips

1. **Claude remembers the conversation:** You can reference earlier in the chat ("as you mentioned before...")
2. **You can interrupt:** Say "stop" or "wait" if Claude is going the wrong direction
3. **Ask for explanations:** "Why did you do it this way?" is a great question
4. **Experiment:** Claude can't break anything permanently. Git tracks everything.
5. **Have fun:** This is way easier than traditional coding!

---

## Next Steps

1. ✅ Install Claude Code
2. ✅ Test it with "Hi Claude!"
3. ✅ Clone the repository (use the Step 3 prompt)
4. ✅ Read this guide
5. 🚀 Start building!

**Questions?**
- Discord: #development
- Tag @michaelbivens
- Or just ask Claude: "I'm confused about [thing]"

---

**Welcome to AI-assisted development, @noseynick!** 🚗

You now have a tireless coding partner who:
- Never gets frustrated
- Explains things clearly
- Writes code in seconds
- Never sleeps
- Knows this project inside out

**The future of coding is conversational.** Enjoy! 🎉

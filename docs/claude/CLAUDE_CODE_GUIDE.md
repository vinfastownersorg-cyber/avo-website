# Using Claude Code with VinFastOwners.org Website

---

## ⚠️ CRITICAL: Start Every Claude Session with This

**Before asking Claude to make ANY changes, start your session with:**

```
Please read CLAUDE_SESSION_GUIDE.md before we start working.
```

**Why this matters:**
- Ensures bilingual support (EN/FR) in all changes
- Prevents privacy/security violations
- Maintains accessibility standards
- Follows project guidelines
- Protects you from mistakes

**Example first message:**
```
Hi Claude! Please read CLAUDE_SESSION_GUIDE.md before we start.
Then I need help updating the board member profiles.
```

Claude will read the guide and acknowledge understanding before proceeding.

---

## What is Claude Code?

Claude Code is an AI coding assistant that works directly in VS Code (Visual Studio Code). It can help you:
- Write and edit HTML, CSS, and JavaScript
- Debug issues in your code
- Understand how the website works
- Make changes faster and with fewer errors
- Learn web development as you go

Think of it as having an expert developer pair programming with you!

---

## Prerequisites

### 1. Install VS Code

**Download:**
- Go to: https://code.visualstudio.com/
- Download for your operating system (Mac/Windows/Linux)
- Install and open VS Code

### 2. Install Claude Code Extension

**In VS Code:**
1. Click the Extensions icon (left sidebar, looks like 4 squares)
2. Search for "Claude Code"
3. Click "Install"
4. Sign in with your Anthropic account
5. You'll see Claude Code in the sidebar

### 3. Clone the Repository

**If you haven't already:**
```bash
git clone https://github.com/vinfastownersorg-cyber/avo-website.git
cd avo-website
```

**Then open in VS Code:**
```bash
code .
```

Or: File → Open Folder → Select `avo-website` folder

---

## Setting Up Your Workspace

### Recommended VS Code Extensions

In addition to Claude Code, install these helpful extensions:

1. **Live Server** - Preview HTML changes instantly
   - Search: "Live Server" by Ritwick Dey
   - Click Install
   - Right-click any HTML file → "Open with Live Server"

2. **Prettier** - Auto-format your code
   - Search: "Prettier - Code formatter"
   - Click Install
   - Format on save: Settings → Format On Save → Enable

3. **GitLens** - Better git integration
   - Search: "GitLens"
   - Click Install
   - See who changed what and when

### Workspace Layout

**Recommended setup:**
```
┌─────────────────────────────────────────────────┐
│ Explorer    │  Code Editor    │  Claude Code    │
│ (files)     │  (your work)    │  (AI assistant) │
│             │                 │                 │
│ index.html  │  <html>         │  > How can I   │
│ styles.css  │    <head>       │    help you?   │
│ board.html  │      ...        │                │
│ ...         │    </head>      │  [Your         │
│             │    <body>       │   question     │
│             │      ...        │   here]        │
│             │    </body>      │                │
│             │  </html>        │                │
└─────────────────────────────────────────────────┘
```

**To arrange:**
1. Claude Code: Click icon in left sidebar
2. Explorer: View → Explorer (or Cmd/Ctrl + Shift + E)
3. Drag panels to resize

---

## Using Claude Code: Basics

### Starting a Conversation

1. **Click Claude Code icon** (left sidebar)
2. **Type your request** in the chat box
3. **Review Claude's suggestions**
4. **Accept or modify** the changes

### Example Requests

**Simple text change:**
```
You: Change the homepage hero title from "Drive the Future" to "Drive Innovation"
```

**Add new content:**
```
You: Add a new event to the events section for a VinFast meetup in Seattle on December 15th
```

**Fix a bug:**
```
You: The language toggle button isn't working on mobile. Can you fix it?
```

**Styling:**
```
You: Make the board member cards have rounded corners and a subtle shadow
```

**Understand code:**
```
You: Explain how the bilingual language toggle works in main.js
```

---

## Best Practices with Claude Code

### 1. Be Specific

❌ **Vague:**
```
Make the site better
```

✅ **Specific:**
```
Add a hover effect to the navigation links that changes the color to electric blue (#00A3FF)
```

### 2. One Task at a Time

❌ **Too much:**
```
Update the entire homepage, add new events, fix the navigation, and redesign the board page
```

✅ **Focused:**
```
Update the statistics section on the homepage with new member count: 9,200 members
```

### 3. Reference Files

✅ **Include context:**
```
In board.html, update the President's bio to mention they drive a VF9 Plus in Hypersonic Blue
```

### 4. Test After Changes

**Always test:**
1. Save file (Cmd/Ctrl + S)
2. Open with Live Server or in browser
3. Check mobile view (browser dev tools)
4. Verify language toggle works (EN/FR)

### 5. Commit Frequently

After Claude makes changes:
```bash
git add .
git commit -m "Updated board member bios with Claude Code"
git push origin main
```

---

## Common Tasks with Claude Code

### Task 1: Update Content

**You:**
```
Update the member count in index.html from 8,500 to 9,200
```

**Claude will:**
- Find the stats section
- Update the number
- Show you the changes
- You review and accept

**Then you:**
```bash
git add index.html
git commit -m "Update member count to 9,200"
git push origin main
```

### Task 2: Add New Event

**You:**
```
Add a new event to the calendar section:
- Event: VinFast VF8 Road Rally
- Date: January 20, 2025
- Location: Portland, OR
- Time: 10:00 AM
- Description: Scenic drive through Columbia River Gorge with lunch stop
```

**Claude will:**
- Add properly formatted event HTML
- Match existing event styling
- Add date badge
- Include registration button

**You verify and commit.**

### Task 3: Style Changes

**You:**
```
In board.html, make the board member cards have:
- 8px border radius
- box-shadow: 0 2px 8px rgba(0,0,0,0.1)
- smooth hover effect that lifts the card slightly
```

**Claude will:**
- Update CSS in styles.css
- Add transition effects
- Ensure mobile compatibility

### Task 4: Fix Bugs

**You:**
```
The membership form in join.html doesn't show validation errors.
Can you add red border and error message when required fields are empty?
```

**Claude will:**
- Add form validation JavaScript
- Style error states
- Test all required fields
- Explain the solution

### Task 5: Understand Code

**You:**
```
I need to understand how the vehicle color selection works in join.html.
Can you explain it and show me where the colors are defined?
```

**Claude will:**
- Explain the code
- Point to relevant sections
- Show color definitions in CSS
- Suggest improvements

---

## Working with Claude Code + Git

### The Complete Workflow

```bash
# 1. Start with latest code
git pull origin main

# 2. Open in VS Code
code .

# 3. Ask Claude Code to make changes
"Add a new board member card for the Communications Director"

# 4. Review Claude's changes
# Accept if good, or ask for modifications

# 5. Test locally
# Open with Live Server or in browser

# 6. Commit changes
git add .
git commit -m "Add Communications Director to board page"

# 7. Push to GitHub
git push origin main

# 8. Verify on live site (if deployed)
```

### If You Make Multiple Changes

**Commit after each logical change:**

```bash
# Change 1: Update stats
git add index.html
git commit -m "Update member statistics"

# Change 2: Add event
git add index.html
git commit -m "Add Portland road rally event"

# Change 3: Fix mobile nav
git add css/styles.css
git commit -m "Fix mobile navigation dropdown"

# Push all at once
git push origin main
```

---

## Pro Tips

### 1. Use Claude to Learn

**Ask for explanations:**
```
Before you make that change, can you explain how the current language toggle works?
```

**Ask for alternatives:**
```
What are 3 different ways I could style this button?
```

### 2. Iterate with Claude

**First request:**
```
Add a new section to the homepage for testimonials
```

**Follow-up:**
```
Can you make the testimonial cards wider and add user avatars?
```

**Refinement:**
```
Actually, let's use VinFast vehicle colors for the avatar borders
```

### 3. Have Claude Review Your Code

**You wrote some HTML/CSS:**
```
I added this code to join.html: [paste code]
Can you review it for:
- Accessibility issues
- Mobile responsiveness
- Bilingual support
- Best practices
```

### 4. Batch Similar Changes

```
I need to update all 5 board member cards with new photos and bios.
Here's the new information: [paste list]
```

### 5. Use Claude for Documentation

```
Can you add comments to main.js explaining how each function works?
```

---

## Troubleshooting

### Claude's Changes Don't Work

**If something breaks:**

1. **Undo changes:**
   - Cmd/Ctrl + Z in VS Code
   - Or: `git checkout -- filename.html`

2. **Ask Claude to fix:**
   ```
   The change you made broke the navigation. Can you revert it and try a different approach?
   ```

3. **Ask for debugging help:**
   ```
   I'm getting this error in the console: [paste error]
   Can you help me fix it?
   ```

### Claude Doesn't Have Enough Context

**Provide more information:**

❌ **Too vague:**
```
Fix the form
```

✅ **Clear context:**
```
In join.html, the membership form's email validation isn't working.
When I enter "test" without @, it still submits.
Can you add proper email validation?
```

### Changes Look Wrong

**Be specific about what's wrong:**

```
The board cards you added are too narrow on desktop.
Can you make them 300px wide with 20px gap between them?
```

### Git Conflicts After Claude's Changes

**If you get a conflict:**

1. **Tell Claude:**
   ```
   I got a git conflict in styles.css after your changes.
   Can you help me resolve it?
   ```

2. **Or follow conflict resolution in SIMPLE_WORKFLOW.md**

---

## Security Reminders

### What to Tell Claude

✅ **Safe to share with Claude:**
- Website structure and layout
- Public content and text
- Styling requirements
- Public email addresses (board@vinfastowners.org)
- Feature requests

❌ **Never share with Claude:**
- Personal email addresses
- API keys or passwords
- Private member data
- Database credentials
- SSH keys

### Example Safe Request

✅ **Good:**
```
Add the contact email board@vinfastowners.org to the footer
```

❌ **Bad:**
```
Add my personal email john.doe@gmail.com to the footer
```

---

## Working Sessions with Claude Code

### Starting a Session

**Tell Claude about the project:**
```
I'm working on the VinFastOwners.org website. It's a bilingual (EN/FR)
static HTML site for a VinFast owners association. The main files are:
- index.html (homepage)
- board.html (board members)
- documents.html (governance docs)
- join.html (membership form)

I need to [your task here]
```

### Resuming Work

**Give Claude context:**
```
I'm continuing work on the VinFastOwners.org site. Last time I was working
on updating the events section. Now I need to add a new board member.
```

### Ending a Session

**Before closing:**
1. Save all files
2. Test changes
3. Commit to git:
   ```bash
   git add .
   git commit -m "Descriptive message of all changes"
   git push origin main
   ```
4. Close VS Code or start new task

---

## Example Session: Adding a New Board Member

### Full Workflow

**1. Pull latest:**
```bash
git pull origin main
code .
```

**2. Start Claude Code and request:**
```
I need to add a new board member to board.html.

Name: Sarah Johnson
Title: Communications Director
Vehicle: VF9 Plus, Hypersonic Blue
Bio: "Tech industry veteran with 15 years experience in community building.
Passionate about sustainable transportation and bringing VinFast owners together."

Can you add a new card for her in the same style as existing board members?
```

**3. Claude creates the card**

**4. You review and ask for refinement:**
```
Can you make her card use the Hypersonic Blue color accent (#1E3A8A)
to match her vehicle?
```

**5. Test in browser:**
- Right-click board.html → Open with Live Server
- Check desktop view
- Check mobile view
- Toggle EN/FR languages

**6. Looks good! Commit:**
```bash
git add board.html
git commit -m "Add Sarah Johnson as Communications Director"
git push origin main
```

**7. Done!**

---

## Advanced: Multi-File Changes

**When changes span multiple files:**

```
I need to add a new "Resources" section. This will require:

1. New page: resources.html with links to owner guides
2. Add navigation link in index.html, board.html, documents.html, join.html
3. Style the page consistently with existing design
4. Make it bilingual

Can you help me implement this step by step?
```

Claude will:
1. Create resources.html
2. Show you each file to update
3. Add navigation links
4. Style consistently
5. Add French translations

You review each change and commit:
```bash
git add resources.html
git commit -m "Create resources page"

git add *.html
git commit -m "Add resources link to navigation"

git push origin main
```

---

## Tips for Team Collaboration

### Before Making Big Changes

**Post in Discord #development:**
```
Working on adding a resources page with Claude Code.
Will update navigation on all pages. ETA 1 hour.
```

### After Making Changes

**Post in Discord:**
```
✅ Added resources page with owner manuals and guides
Changes: resources.html (new), all navigation updated
Commit: abc1234

Please pull latest before making changes!
```

### Share Claude Prompts

**If you find a great Claude prompt, share it:**
```
Discord: Pro tip - this prompt worked great for adding events:

"Add event to index.html with:
- Title, date, location, time, description
- Match existing event card styling
- Add registration button
- Include bilingual support"

Claude nailed it on first try!
```

---

## Resources

### Documentation
- **VS Code:** https://code.visualstudio.com/docs
- **Claude Code:** https://docs.claude.com/claude-code
- **HTML Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS

### Project Files
- **SIMPLE_WORKFLOW.md** - Git workflow
- **GIT_QUICK_REFERENCE.md** - Git commands
- **README.md** - Project overview
- **CLAUDE_SESSION_GUIDE.md** - For Claude to read at start of sessions

### Getting Help
- **Discord:** #development channel
- **Email:** board@vinfastowners.org
- **VS Code Help:** Help → Welcome
- **Claude Code Help:** Click ? icon in Claude panel

---

## Quick Reference

### Common Claude Prompts

**Update content:**
```
Update [file] line [number] to say "[new text]"
```

**Add section:**
```
Add a new [section] to [file] with [description]
Match the existing style
```

**Fix styling:**
```
Make [element] in [file] have [CSS properties]
```

**Debug:**
```
I'm getting this error: [error]
In file: [file]
Can you help fix it?
```

**Explain:**
```
Explain how [feature] works in [file]
```

### Git Commands

```bash
git pull origin main              # Get latest
code .                            # Open VS Code
# ... work with Claude ...
git add .                         # Stage changes
git commit -m "Description"       # Commit
git push origin main              # Push
```

---

## Success Checklist

For each task with Claude Code:

- [ ] Started with `git pull origin main`
- [ ] Opened VS Code with `code .`
- [ ] Gave Claude clear, specific instructions
- [ ] Reviewed Claude's changes
- [ ] Tested in browser (desktop + mobile)
- [ ] Checked bilingual support (EN/FR)
- [ ] Committed with clear message
- [ ] Pushed to GitHub
- [ ] Posted in Discord if major change

---

## Remember

**Claude Code is a tool, not magic:**
- Always review changes before committing
- Test everything locally
- Claude can make mistakes - you're the human QA
- Ask for clarification if you don't understand
- Iterate until you get exactly what you want

**You're in control:**
- Claude suggests, you decide
- You can undo any change
- Git tracks everything
- Team is there to help

**Have fun:**
- Experiment with ideas
- Learn as you go
- Share cool prompts with the team
- Build something great together!

---

**Happy coding with Claude! 🚀**

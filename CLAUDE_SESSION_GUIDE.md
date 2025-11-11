# Claude Session Guide - VinFastOwners.org Website

**FOR CLAUDE CODE / AI ASSISTANTS: Please read this entire document before making any changes to this codebase.**

---

## Project Overview

**Project Name:** VinFastOwners.org (AVO - Association of VinFast Owners North America)
**Type:** Static HTML website for member-governed VinFast EV owners association
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript (no frameworks)
**Repository:** https://github.com/vinfastownersorg-cyber/avo-website
**Deployment:** GitHub Pages / Netlify
**Status:** Active production website

### Mission

This is the official website for a North American VinFast owners association focused on:
- Board governance and transparency
- Member advocacy
- Community building
- Event coordination
- Bilingual support (English/French)

---

## Critical Guidelines - READ FIRST

### 1. Bilingual Requirement (MANDATORY)

**Every user-facing text must be bilingual (English and French).**

✅ **Correct format:**
```html
<h1>
    <span lang="en">Board of Directors</span> /
    <span lang="fr">Conseil d'Administration</span>
</h1>
```

❌ **Wrong (English only):**
```html
<h1>Board of Directors</h1>
```

**Always:**
- Use `lang="en"` and `lang="fr"` attributes
- Separate with ` / ` (space-slash-space)
- Keep both versions in sync
- Translate tooltips, alt text, and form labels

### 2. Privacy & Security (CRITICAL)

**Never include or suggest including:**
- ❌ Personal email addresses (except board@vinfastowners.org and privacy@vinfastowners.org)
- ❌ API keys, tokens, or credentials
- ❌ Personal phone numbers
- ❌ **FULL VIN NUMBERS (NEVER EVER - see VIN policy below)**
- ❌ Member data or PII
- ❌ SSH keys or certificates
- ❌ Google Analytics IDs or tracking codes (ask first)
- ❌ Social media embeds with tracking (ask first)

**🚨 CRITICAL VIN PRIVACY POLICY:**
- **NEVER ask for or collect full VIN numbers**
- **Maximum allowed: Last 4 digits of VIN ONLY**
- **Only collect last 4 digits if absolutely necessary for troubleshooting**
- **Preferred alternative: Email address associated with VinFast profile**
- If collecting last 4 digits VIN, MUST include privacy warning:
  ```
  "Privacy Note: Don't share your full VIN publicly. Last 4 digits only if needed."
  ```

**Safe to include:**
- ✅ board@vinfastowners.org
- ✅ privacy@vinfastowners.org
- ✅ Public Discord invite: https://discord.gg/puQqaEZFAQ
- ✅ Public Facebook group: https://www.facebook.com/share/g/17dH6oZRA4/
- ✅ VinFastTalk.com link: https://vinfasttalk.com

### 3. VinFast Brand Compliance

**This is an INDEPENDENT owner organization:**
- ✅ Use: "Association of VinFast Owners (AVO)"
- ✅ Include disclaimer: "Independent owner organization | Not affiliated with VinFast Auto"
- ❌ Don't imply official VinFast endorsement
- ❌ Don't use VinFast trademarks as if they're ours
- ✅ Can mention VinFast vehicles and models
- ✅ Can use authentic vehicle paint colors in design

### 4. Mobile-First & Responsive

**All changes must work on mobile:**
- Test responsive breakpoints: 320px, 768px, 1024px, 1440px
- Mobile navigation must be functional
- Touch targets minimum 44x44px
- No horizontal scrolling on mobile
- Images must scale appropriately

### 5. Accessibility (Required)

**All changes must be accessible:**
- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- ✅ Alt text for all images
- ✅ Proper heading hierarchy (h1 → h2 → h3, no skipping)
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Sufficient color contrast (WCAG AA minimum)
- ✅ Form labels for all inputs

### 6. No External Dependencies

**Keep it simple:**
- ❌ Don't add jQuery, React, Vue, or any frameworks
- ❌ Don't add Bootstrap or CSS frameworks
- ❌ Don't add external fonts without confirmation
- ✅ Vanilla JavaScript only
- ✅ Custom CSS only
- ✅ System fonts are fine

**Exception:** Icons and images are okay if necessary and properly licensed.

---

## Project Structure

### Main Pages

| File | Purpose | Key Features |
|------|---------|--------------|
| `index.html` | Homepage | Hero, stats, mission cards, events, community links |
| `board.html` | Board members | 5 board positions with profiles, contact info |
| `documents.html` | Governance | Bylaws, meeting minutes, policies |
| `join.html` | Membership signup | Form with vehicle selection, interests |
| `privacy.html` | Privacy policy | Comprehensive GDPR-compliant policy |
| `meeting-minutes.html` | Board minutes | Template for publishing minutes |
| `bylaws.html` | Full bylaws | Complete Articles I-X |

### Key Directories

```
vinfastowners-website/
├── css/
│   └── styles.css              # ALL styles (no separate files)
├── js/
│   └── main.js                 # Language toggle and utilities
├── images/
│   ├── backgrounds/            # Hero images (optional)
│   └── icons/
│       └── avo-logo.png        # AVO logo (present)
├── documents/
│   └── meeting-minutes.txt     # Plain text minutes display
└── .github/                    # GitHub config (don't modify)
```

### Important: Single CSS File

**All styles are in `css/styles.css`:**
- Don't create separate CSS files
- Don't add inline styles
- Use existing CSS classes when possible
- Follow established naming conventions

---

## Design System

### Colors (VinFast Vehicle Paint Colors)

**Defined in `:root` of `styles.css`:**

```css
--vinfast-blue: #00539C;        /* Brand primary */
--electric: #00A3FF;            /* VF8/VF9 Electric Blue */
--adventure: #FF6B35;           /* VF8 Adventure Red */
--ocean: #0077BE;               /* VF8 Ocean Blue */
--emerald: #059669;             /* VF9 Emerald Green */
--storm: #64748B;               /* VF8 Storm Grey */
--midnight: #1E293B;            /* VF9 Midnight Black */
--pearl: #F8FAFC;               /* VF8 Pearl White */
--hypersonic: #1E3A8A;          /* VF9 Hypersonic Blue */
```

**Usage:**
- Use these colors consistently
- Don't add new colors without asking
- Vehicle colors tie website to actual VinFast vehicles

### Typography

**Headers:**
- Font: System sans-serif stack
- Weight: 700 for h1-h3, 600 for h4-h6

**Body:**
- Font: System sans-serif stack
- Size: 1rem (16px base)
- Line height: 1.6

**No custom fonts** - keep it fast and simple

### Spacing

**Consistent spacing system:**
- 0.5rem (8px)
- 1rem (16px)
- 1.5rem (24px)
- 2rem (32px)
- 3rem (48px)
- 4rem (64px)

Use these values, don't create arbitrary spacing.

### Component Patterns

**Cards:**
```css
.card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Buttons:**
```css
.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-primary { /* Electric blue */ }
.btn-outline { /* Bordered version */ }
.btn-small { /* Smaller variant */ }
```

**Use existing classes when possible.**

---

## Language Toggle System

### How It Works

**JavaScript in `main.js`:**
- Reads user's `lang` preference from localStorage
- Shows/hides elements based on `lang="en"` or `lang="fr"` attributes
- Toggle button switches between languages
- Preference persists across pages

**HTML pattern:**
```html
<p>
    <span lang="en">English text</span>
    <span lang="fr">French text</span>
</p>
```

**Don't break this system:**
- Always include both `lang="en"` and `lang="fr"`
- Don't add language switching logic elsewhere
- Test toggle after changes

---

## Governance & Legal

### Documents Display

**All documents are display-only (NO downloads):**
- Bylaws: Displayed on `bylaws.html`
- Meeting minutes: Displayed on `meeting-minutes.html`
- Privacy policy: Displayed on `privacy.html`

**Don't suggest:**
- PDF downloads
- DOCX downloads
- Print functionality (unless specifically requested)

### Privacy Policy

**Comprehensive policy exists at `privacy.html`:**
- GDPR compliant
- CCPA compliant
- Bilingual (EN/FR)
- Covers data collection, member rights, cookies

**If adding data collection features:**
1. Mention it needs privacy policy update
2. Ask if board approval obtained
3. Implement with clear user consent

### Bug Tracking

**GitHub Issues integration:**
- Users can report issues via GitHub
- Form on website collects details
- Issue templates exist in `.github/ISSUE_TEMPLATE/`
- **Don't modify issue templates** without explicit request

---

## Collaboration Workflow

### Git Workflow (Option 1 - Direct Push)

**This project uses direct push to main:**
- Collaborators push directly to `main` branch
- No PRs required for most changes
- Git prevents overwrites automatically
- Communication happens in Discord

**When making changes via Claude Code:**
1. User should have run `git pull origin main`
2. Make changes
3. User will commit and push
4. Keep changes focused and testable

### File Changes

**When editing files:**
- Make surgical changes (don't rewrite entire files)
- Preserve existing formatting and style
- Keep consistent with surrounding code
- Test changes work on mobile

**After changes:**
- Remind user to test in browser
- Suggest clear commit message
- Note any files that need deployment

---

## Common Tasks & Patterns

### Adding a New Event

**Location:** `index.html`, events section (around line 226-312)

**Template:**
```html
<div class="event-card">
    <div class="event-date">
        <span class="date-day">15</span>
        <span class="date-month" lang="en">DEC</span>
        <span class="date-month" lang="fr">DÉC</span>
    </div>
    <div class="event-details">
        <h3>
            <span lang="en">Event Title</span>
            <span lang="fr">Titre de l'événement</span>
        </h3>
        <div class="event-meta">
            <span>📍 Location</span>
            <span>🕐 Time</span>
        </div>
        <p lang="en">English description</p>
        <p lang="fr">French description</p>
    </div>
    <a href="#" class="btn btn-small btn-outline">
        <span lang="en">Register</span>
        <span lang="fr">S'inscrire</span>
    </a>
</div>
```

### Updating Board Members

**Location:** `board.html`

**Pattern:**
```html
<div class="board-card">
    <div class="board-card-header" style="border-color: var(--color);">
        <div class="photo-placeholder"></div>
        <!-- Or if they have a photo: -->
        <!-- <img src="images/board/name.jpg" alt="Name"> -->
    </div>
    <div class="board-card-content">
        <h3>Name</h3>
        <p class="board-title">
            <span lang="en">English Title</span> /
            <span lang="fr">French Title</span>
        </p>
        <p class="vehicle-info">
            <span lang="en">Vehicle Model, Color</span>
            <span lang="fr">Modèle, Couleur</span>
        </p>
        <p class="bio" lang="en">English bio</p>
        <p class="bio" lang="fr">French bio</p>
    </div>
</div>
```

**Each card has a color accent** - use VinFast vehicle colors.

### Adding Form Fields

**Pattern (for forms like `join.html`):**
```html
<div class="form-group">
    <label for="field-id">
        <span lang="en">English Label</span>
        <span lang="fr">French Label</span>
    </label>
    <input
        type="text"
        id="field-id"
        name="field-name"
        placeholder="English / Français"
        required
    >
</div>
```

**Validation:**
- Use HTML5 validation where possible
- Add JavaScript validation if needed
- Show error messages bilingually

---

## Testing Checklist

**Before considering changes complete:**

### Functionality
- [ ] All links work
- [ ] Forms validate properly
- [ ] Language toggle works
- [ ] Navigation works on all pages

### Responsive
- [ ] Test at 320px width (mobile)
- [ ] Test at 768px width (tablet)
- [ ] Test at 1440px width (desktop)
- [ ] No horizontal scrolling
- [ ] Touch targets 44x44px minimum

### Accessibility
- [ ] Semantic HTML used
- [ ] Alt text on images
- [ ] Heading hierarchy correct
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient

### Bilingual
- [ ] English version complete
- [ ] French version complete
- [ ] Both toggle correctly
- [ ] No untranslated text

### Performance
- [ ] No console errors
- [ ] Images optimized
- [ ] No huge files added
- [ ] Fast load time

---

## Common Requests & How to Handle

### "Add a new page"

**Checklist:**
1. Create new HTML file
2. Copy structure from existing page (header, nav, footer)
3. Add bilingual content
4. Update navigation in ALL existing pages
5. Add appropriate meta tags
6. Link to new page from relevant places
7. Test mobile responsiveness
8. Remind user to update privacy.html if collecting data

### "Update statistics"

**Location:** `index.html`, stats section (around line 78-97)

**Update:**
- Member count
- States/provinces
- Board members
- Other metrics

**Keep bilingual format.**

### "Change colors/styling"

**Check:**
1. Are you using existing VinFast colors from `:root`?
2. Does it work in light/dark mode (if applicable)?
3. Is contrast sufficient (WCAG AA)?
4. Does it look good on mobile?
5. Is it consistent with rest of site?

### "Add external service" (Google Forms, Mailchimp, etc.)

**Ask first:**
1. Has privacy policy been reviewed?
2. Is data collection disclosed to users?
3. Do we need consent checkbox?
4. Is it GDPR compliant?

**Then implement with:**
- Clear disclosure
- User consent
- Privacy policy link
- Bilingual instructions

### "Add images"

**Guidelines:**
1. Optimize before adding (<500KB ideally)
2. Use WebP format if possible
3. Always include alt text (bilingual if contains text)
4. Ensure proper licensing
5. Save to `/images/` directory
6. Use descriptive filenames (no spaces)

### "Fix a bug"

**Process:**
1. Identify the issue
2. Locate problematic code
3. Explain what's wrong
4. Propose solution
5. Implement fix
6. Test thoroughly
7. Confirm no side effects

---

## What NOT to Do

### ❌ Don't Break These Things

1. **Language toggle system** - Don't modify `main.js` language logic
2. **Navigation structure** - Keep consistent across all pages
3. **Footer links** - Privacy, contact, Discord links must remain
4. **GitHub issue templates** - In `.github/ISSUE_TEMPLATE/` - don't touch
5. **Git configuration** - `.gitignore`, `.github/workflows/`, `CODEOWNERS`
6. **Mobile navigation** - It works, don't break it
7. **Form submissions** - Check with user before changing

### ❌ Don't Add These Without Permission

1. **Tracking scripts** (Google Analytics, etc.)
2. **External fonts** (Google Fonts, etc.)
3. **JavaScript libraries** (jQuery, frameworks)
4. **CSS frameworks** (Bootstrap, Tailwind)
5. **Payment processors** (Stripe, PayPal)
6. **Authentication systems**
7. **Databases or backends**
8. **Social media embeds with tracking**

### ❌ Don't Suggest These

1. Removing bilingual support ("just make it English")
2. Downloading dependencies ("npm install")
3. Build tools ("let's add Webpack")
4. Complicated solutions when simple exists
5. Breaking changes without user consent
6. Removing accessibility features
7. Adding personal data collection without privacy review

---

## Communication Style

### When Responding to Requests

**Do:**
- ✅ Explain what you're going to do before doing it
- ✅ Ask clarifying questions if request is ambiguous
- ✅ Point out potential issues (privacy, accessibility, mobile)
- ✅ Suggest alternatives if request has problems
- ✅ Remind about bilingual requirement if forgotten
- ✅ Test your changes mentally before implementing
- ✅ Provide clear commit message suggestions

**Don't:**
- ❌ Make assumptions about user intent
- ❌ Implement half the request and stop
- ❌ Skip bilingual support
- ❌ Add complexity unnecessarily
- ❌ Modify files not related to the request
- ❌ Suggest rewriting entire codebase

### Example Good Response

```
I'll add the new event to the events section in index.html.

I'll include:
- Bilingual title and description
- Date badge (December 15)
- Location and time with icons
- Registration button
- Matching the existing event card styling

Quick question: Do you have a registration URL for the button,
or should I use "#" as a placeholder for now?

Also, I'll need a French translation for the event description.
Would you like me to suggest one, or will you provide it?
```

---

## Debugging Common Issues

### Language Toggle Not Working

**Check:**
1. Are `lang="en"` and `lang="fr"` attributes present?
2. Is JavaScript in `main.js` intact?
3. Are both language versions included?
4. Is toggle button still in navigation?

### Mobile Navigation Broken

**Check:**
1. Did you modify nav HTML structure?
2. Is hamburger menu icon intact?
3. Are media queries in CSS intact?
4. Test at 768px width

### Forms Not Submitting

**Check:**
1. Is `action` attribute set?
2. Are required fields marked `required`?
3. Is JavaScript validation interfering?
4. Check browser console for errors

### Styling Looks Wrong

**Check:**
1. Did you use existing CSS classes?
2. Are media queries applied?
3. Is color contrast sufficient?
4. Did you test mobile view?

---

## Success Criteria

**Changes are successful when:**

✅ All requested functionality works
✅ Mobile and desktop both look good
✅ Bilingual support is complete
✅ No console errors
✅ Accessibility maintained
✅ No security/privacy issues introduced
✅ Code is clean and maintainable
✅ User can test and commit easily

---

## Quick Reference

### Must-Have for Every Change

1. **Bilingual** - English AND French
2. **Responsive** - Mobile tested
3. **Accessible** - Semantic HTML, alt text
4. **Secure** - No PII, no credentials
5. **Tested** - Works as expected

### Safe Email Addresses

- ✅ board@vinfastowners.org
- ✅ privacy@vinfastowners.org

### Safe External Links

- ✅ https://discord.gg/puQqaEZFAQ
- ✅ https://www.facebook.com/share/g/17dH6oZRA4/
- ✅ https://vinfasttalk.com
- ✅ https://vinfastauto.us (official VinFast)
- ✅ https://vinfastauto.com (official VinFast)

### VinFast Colors to Use

Use CSS variables:
- `var(--vinfast-blue)`
- `var(--electric)`
- `var(--adventure)`
- `var(--ocean)`
- `var(--emerald)`
- `var(--storm)`
- `var(--midnight)`
- `var(--pearl)`
- `var(--hypersonic)`

---

## Final Reminders

1. **This is a real, production website** - changes go live
2. **Privacy and security matter** - this is member data
3. **Accessibility is required** - not optional
4. **Bilingual is non-negotiable** - it's a North American org
5. **Simple is better** - no unnecessary complexity
6. **Mobile-first** - most users are on phones
7. **Test thoroughly** - think through edge cases
8. **Ask when unsure** - better to clarify than break things

---

## Project Context

**This website serves:**
- ~9,000+ VinFast owners across North America
- Democratically elected board
- Active Discord community
- English and French speaking members

**The association is:**
- Independent (not affiliated with VinFast Auto)
- Member-governed
- Focused on advocacy and community
- Transparent in operations

**Your changes affect real people** - be thoughtful, thorough, and test everything.

---

**When in doubt, ask the user for clarification. Better to ask than to make wrong assumptions.**

**Good luck, and thank you for helping build this community! 🚗**

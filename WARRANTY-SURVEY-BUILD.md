# WARRANTY SURVEY BUILD INSTRUCTIONS

## Task
Create `warranty-survey.html` — a VF Warranty Service Survey form page for vinfastowners.org.

## Source Spec
`/Users/personinthemiddle/Downloads/handoff/VF-Warranty-Service-Survey-WebForm-Content.md`

## Key Decisions Already Made
- **Page file:** `warranty-survey.html`
- **Submission:** Discord webhook (same one used in `join.html` line 313)
- **No server-side PII storage** — submit to Discord, show confirmation, done
- **Navigation:** Add to Resources dropdown in `_includes/nav.html`
- **Bilingual:** All user-facing text needs `<span lang="en">` / `<span lang="fr">` pairs

## Architecture & Patterns to Follow

### Page Structure
- Uses Jekyll layout: add YAML front matter like other pages (see `join.html` for reference)
- Layout is `_layouts/default.html` which includes head.html, nav.html, footer.html
- Content goes directly after front matter (no `<html>`, `<body>`, etc.)
- Start with `<section class="page-header-v2">` with breadcrumb nav

### CSS Classes Already Available (in `css/styles.css`)
- `.form-v2` — form container (max-width 640px, centered)
- `.form-group-v2` — field wrapper with label styling
- `.form-row-v2` — 2-column grid row
- `.checkbox-group-v2` — checkbox with label
- `.form-actions-v2` — submit button row
- `.notice-box-v2` with `.notice-error`, `.notice-warning`, `.notice-info` — alert banners
- `.btn-v2`, `.btn-primary`, `.btn-lg` — buttons
- `.section-v2`, `.alt-bg`, `.container` — page sections

### CSS To Add (in `css/styles.css`)
Need new styles for:
- `.radio-group-v2` — radio button groups (similar pattern to `.checkbox-group-v2`)
- `.form-helper` — helper text below labels
- `.gate-message` — the "call VinFast first" message box shown when Q1 = "No"
- `.survey-confirmation` — success overlay/message after submission
- `.form-section-hidden` — hide/show class for conditional sections

### Form Structure (13 fields with conditional logic)

**Q1 — GATE QUESTION (Required)**
- "Have you contacted VinFast Customer Support?" — Radio buttons
- Options: "Yes — I have a case number", "Yes — but I don't have a case number", "No"
- **"No" hides entire form**, shows message directing to VinFast phone numbers
- **"Yes — case number"** shows Q2 + rest of form
- **"Yes — no case number"** skips Q2, shows Q3 onward

**Q2 — Case Number (Conditional)**
- Text input, only visible when Q1 = "Yes — I have a case number"

**Q3 — Where did you access this form? (Required)**
- Radio: VFFS Facebook, AVO Discord, vinfastowners.org website

**Q4 — Full Name (Required)** — Text input

**Q5 — Last 4 of VIN (Required)** — Text input, max 4 chars, alphanumeric validation

**Q6 — Vehicle Model (Required)** — Dropdown: VF 3, VF 5, VF 6, VF 7, VF 8, VF 9, Other

**Q7 — Dealership/Service Center Name (Required)** — Text input with helper text

**Q8 — Service Center Location (Required)** — 3 fields in a row:
- City (text input)
- State/Province (dropdown — all 50 US states + DC + 13 Canadian provinces/territories, grouped by country with `<optgroup>`)
- Country (dropdown, default "United States", options: United States, Canada)

**Q9 — How long in service? (Required)** — Radio buttons:
- Less than 30 days, 30-60, 61-90, More than 90, Vehicle returned but unresolved

**Q10 — Primary Issue (Required)** — Checkboxes (multi-select):
- Drivetrain/Powertrain, Battery/Charging, Software/Infotainment, ADAS/Safety, Body/Paint/Trim, HVAC/Climate, Suspension/Steering, Electrical (non-battery), Warranty claim denied, Communication/Lack of updates, Loaner vehicle/Rental reimbursement, Other

**Q11 — Describe issue in detail (Required)** — Textarea, min 50 chars suggested

**Q12 — Can admins contact you? (Required)** — Radio: Yes / No

**Q13 — Anything else? (Optional)** — Textarea

### Disclaimer Banner
Show between intro text and form using `.notice-box-v2 .notice-warning`. Content is in the spec.

### Submission JavaScript
Follow `join.html` pattern (line 278-333):
1. `e.preventDefault()` on form submit
2. Gather all form data
3. Build Discord embed payload with fields
4. POST to webhook URL (extract from `join.html` line 313)
5. On success: hide form, show confirmation message
6. On error: show error alert
7. **No PII stored anywhere** — only sent to Discord

### Confirmation Message
After successful submit, replace form with confirmation containing:
- Thank you message
- Reminders about monitoring VinFast account contact info
- Not all cases escalated disclaimer
- VinFast phone numbers (US/Canada)
- Option to submit again

### Navigation Update
In `_includes/nav.html`, add inside the Resources dropdown (after Report an Issue, line 90):
```html
<a href="/warranty-survey.html">
    <span lang="en">Warranty Survey</span>
    <span lang="fr">Sondage Garantie</span>
</a>
```

## Important Project Rules
- Every user-facing string must be bilingual EN/FR
- NO personal emails — only board@ and privacy@vinfastowners.org
- NO full VIN numbers — last 4 digits only (this form already does that)
- Semantic HTML, WCAG AA, keyboard nav, 44x44px touch targets
- Mobile-first — test at 320px, 768px, 1024px, 1440px
- No external dependencies (no jQuery, React, Bootstrap)
- Single CSS file: `css/styles.css`
- Single JS file for shared code: `js/main.js` (but form handler goes inline in page like `join.html`)

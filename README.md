# AVO - Association of VinFast Owners North America

![AVO Logo](images/icons/avo-logo.png)

**Official website for the Association of VinFast Owners North America**

**Live Site:** [vinfastowners.org](https://vinfastowners.org)
**Discord:** [Join our community](https://vinfastowners.org/discord.html) - 600+ members
**Facebook:** [VinFast Owners Group](https://www.facebook.com/share/g/17dH6oZRA4/)

---

## About

The Association of VinFast Owners (AVO) is an independent, member-governed organization representing VinFast electric vehicle owners across the United States and Canada. We advocate for owner interests, provide community support, and foster a positive ownership experience.

**Core Values:** Transparency, Advocacy, Community, Independence (not affiliated with VinFast Auto Corporation)

---

## Site Overview

### Design System (V2 - February 2026)
- **Glass navigation** with hamburger menu on mobile
- **Dark mode** with system preference detection and manual toggle (SVG sun/moon icons)
- **Bilingual (EN/FR)** with `setLang()` toggle and localStorage persistence
- **Scroll progress bar** and back-to-top button on all pages
- **WCAG AA contrast** compliance in both light and dark modes
- **Schema.org JSON-LD** structured data (Organization, BreadcrumbList, WebPage, Legislation)

### Pages (17 total)

| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero, stats, community section |
| `considering-vinfast.html` | Prospective buyer guide with resource ratings |
| `recalls.html` | Live NHTSA + Transport Canada recall data |
| `trip-data.html` | Trip data and charging insights (Chart.js) |
| `petition.html` | March 2026 feature request petition (Tally.so embed) |
| `newsletters.html` | Newsletter archive with EN/FR PDF downloads |
| `join.html` | Membership signup form (Discord webhook) |
| `board.html` | Board of Directors with Discord profile cards |
| `documents.html` | Governance documents hub |
| `bylaws.html` | Association bylaws |
| `meeting-minutes.html` | Board meeting minutes (accordion sections) |
| `discord.html` | Discord community landing page |
| `links.html` | All external links and resources |
| `report-issue.html` | Issue reporting form |
| `vf8-vf9-user-guide.html` | VF8/VF9 user guide |
| `open-letter.html` | Open letter to VinFast (noindex) |
| `privacy.html` / `disclaimer.html` | Legal pages |

### Navigation Structure
- **Home** | **Considering VinFast?** | **Community** (links to homepage #community section)
- **Governance** dropdown: Board, Documents & Bylaws, Meeting Minutes
- **Resources** dropdown: Recalls, Trip Data, Petition, Newsletters, Report Issue, User Guide, All Links
- **Join** CTA button

---

## Technical Stack

- **HTML5 / CSS3 / Vanilla JavaScript** - No frameworks, no build step
- **Single CSS:** `css/styles.css` - Design tokens, glass nav, dark mode, all components
- **Single JS:** `js/main.js` - Language toggle, dark mode, hamburger menu, scroll effects, page highlighting
- **GitHub Pages** hosting (Nginx - `.htaccess` files are ignored, security via `_config.yml` excludes)
- **APIs:** NHTSA Recalls API, Transport Canada links, Chart.js CDN (v4.4.1), Tally.so embeds

### Key Architecture Decisions
- CSS custom properties for all colors (automatic dark mode adaptation)
- `localStorage` for theme (`avo-theme`) and language (`vinfast-lang`) persistence
- ROT13 email obfuscation via `data-email` attributes
- No external fonts, no analytics/tracking scripts

---

## File Structure

```
avo-website/
├── index.html                    # Homepage
├── considering-vinfast.html      # Buyer guide
├── recalls.html                  # NHTSA/TC recalls (API)
├── trip-data.html                # Trip data (Chart.js)
├── petition.html                 # Feature petition (Tally.so)
├── join.html                     # Membership form
├── board.html                    # Board of Directors
├── documents.html                # Governance docs
├── bylaws.html                   # Bylaws
├── meeting-minutes.html          # Meeting minutes
├── discord.html                  # Discord landing
├── links.html                    # All links
├── report-issue.html             # Issue reporting
├── vf8-vf9-user-guide.html       # User guide
├── newsletters.html              # Newsletter archive
├── open-letter.html              # Open letter (noindex)
├── privacy.html                  # Privacy policy
├── disclaimer.html               # Legal disclaimer
├── css/styles.css                # Design system
├── js/main.js                    # Site JavaScript
├── images/
│   ├── icons/                    # Logo, favicons
│   └── board/                    # Board member photos
├── manuals/                      # VF6/VF7/VF8/VF9 PDFs
├── newsletters/                  # EN/FR newsletter PDFs
├── data/resource-ratings.json    # Rating system data
├── sitemap.xml                   # Sitemap with hreflang
├── _config.yml                   # Jekyll/GH Pages config
└── .github/workflows/            # GitHub Actions
```

---

## Security & Privacy

- **No user tracking** - No analytics, no cookies (localStorage only)
- **No personal data collection** - No VINs, no personal emails exposed
- **Email obfuscation** - ROT13 via `data-email` attributes
- **File protection** - `_config.yml` excludes sensitive directories
- **CSP reference** - `.htaccess.reference` documents Content Security Policy (Apache portability)
- **Secrets** - All API keys in GitHub Secrets, never in source

See [privacy.html](https://vinfastowners.org/privacy.html) for full privacy policy.

---

## Development

```bash
# Clone and serve locally
git clone https://github.com/vinfastownersorg-cyber/avo-website.git
cd avo-website
python3 -m http.server 8000
open http://localhost:8000
```

**Workflow:** Direct push to `main` branch. GitHub Pages auto-deploys.

### Bilingual Content
Every user-facing string must include both languages:
```html
<span lang="en">English text</span>
<span lang="fr">Texte français</span>
```

### Dark Mode
Use CSS custom properties for all colors — never hardcode hex values in inline styles:
```css
color: var(--text-primary);        /* Not color: #333 */
background: var(--surface-0);      /* Not background: white */
```

---

## Board of Directors

| Name | Role | Discord |
|------|------|---------|
| Natalie Ly | Board Member | @hungyuanly |
| NoseyNick | Board Member | @noseynick |
| Shane Bivens | Board Member | @shanebivens |

Board meetings held quarterly. Minutes published within 7 days.

---

## Contact

- **Board:** board@vinfastowners.org
- **Privacy:** privacy@vinfastowners.org
- **Discord:** [discord.gg/puQqaEZFAQ](https://discord.gg/puQqaEZFAQ)
- **Facebook:** [VinFast Owners Group](https://www.facebook.com/share/g/17dH6oZRA4/)

---

## Completed Milestones

- [x] V2 design system migration (all pages) - Feb 2026
- [x] Dark mode with WCAG AA contrast compliance
- [x] Bilingual EN/FR support across all pages
- [x] Schema.org structured data (Organization, BreadcrumbList, WebPage)
- [x] March 2026 feature request petition
- [x] VF6/VF7/VF8/VF9 owner's manuals (condensed PDFs)
- [x] Live NHTSA + Transport Canada recall search
- [x] Portable rating system with GitHub Actions
- [x] Comprehensive sitemap with hreflang
- [x] Newsletters page with EN/FR PDF archive - Mar 2026

---

**Built with care by the VinFast Owner Community**

*Last Updated: March 1, 2026*

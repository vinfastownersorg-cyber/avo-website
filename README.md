# AVO - Association of VinFast Owners North America

![AVO Logo](images/icons/avo-logo.png)

**Official website for the Association of VinFast Owners North America**

🌐 **Live Site:** [vinfastowners.org](https://vinfastowners.org)  
💬 **Discord:** [discord.gg/puQqaEZFAQ](https://discord.gg/puQqaEZFAQ)  
👥 **Members:** 8,500+ VinFast owners across North America  

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Site Structure](#site-structure)
- [Technical Stack](#technical-stack)
- [Key Features Implemented](#key-features-implemented)
- [SEO & Performance](#seo--performance)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

The Association of VinFast Owners (AVO) is an independent, member-governed organization representing VinFast electric vehicle owners across the United States and Canada. Our mission is to advocate for owner interests, provide community support, and foster a positive ownership experience.

### Core Values
- **Transparency** - Open governance, public board meetings, accessible documents
- **Advocacy** - Collective voice for owner concerns and improvements  
- **Community** - Supporting owners through knowledge sharing and events
- **Independence** - Not affiliated with VinFast Auto Corporation

---

## ✨ Features

### 🔍 Recalls & Safety Information
- **Live NHTSA API Integration** - Real-time US recall data
- **Transport Canada Links** - Direct access to Canadian recall database
- **Comprehensive Search** - Queries all model years (2022-2025) and model variations
- **Privacy Protected** - AVO doesn't collect VIN or user data
- **Educational Content** - Explains recalls vs TSBs vs service campaigns

### 🧭 Strategic Navigation
- **User-Focused Design** - 5 primary items + 2 dropdown menus
- **Mobile-First** - Hamburger menu with smooth slide-in animation
- **Active Page Highlighting** - Shows current page in navigation
- **Dropdown Organization** - Governance and Resources logically grouped
- **Join CTA Button** - Orange gradient button for membership conversion

### 🤔 Considering VinFast? Guide
- **Prospective Buyer Resource** - Addresses common EV concerns
- **Bill Nye meets Tati Reed Style** - Energetic, educational tone
- **Critical Thinking** - Psychology of online negativity and trolling
- **Financial Context** - Understanding EV startup economics
- **Dealer Knowledge** - Explains why owners may know more than salespeople
- **Linked to Recalls** - Direct access to official safety data

### 📜 Governance & Transparency
- **Board of Directors** - Public profiles and contact information
- **Bylaws Online** - Full constitution and organizational rules  
- **Meeting Minutes** - Published within 7 days of each meeting
- **Document Repository** - Policies, reports, and official records
- **Comprehensive Legal Disclaimer** - 12-section liability protection

### 🌍 Bilingual Support (EN/FR)
- **Full Translation** - English and French (Quebec/Ontario)
- **Language Toggle** - Top-right corner switcher
- **LocalStorage** - Remembers user preference
- **Browser Detection** - Auto-selects French for French browsers

---

## 📁 Site Structure

```
vinfastowners-website/
├── index.html                    # Homepage (hero, stats, membership)
├── considering-vinfast.html      # Prospective buyer guide
├── recalls.html                  # NHTSA/Transport Canada recalls
├── board.html                    # Board of Directors
├── documents.html                # Governance documents
├── bylaws.html                   # AVO Bylaws
├── meeting-minutes.html          # Board meeting minutes
├── join.html                     # Membership signup
├── report-issue.html             # Issue tracking form
├── privacy.html                  # Privacy policy
├── disclaimer.html               # Legal disclaimer
├── sitemap.xml                   # SEO sitemap
├── robots.txt                    # Search engine instructions
├── css/
│   └── styles.css               # Main stylesheet (nav, responsive, etc.)
├── js/
│   └── main.js                  # Navigation, language, email obfuscation
└── images/
    └── icons/
        └── avo-logo.png         # AVO logo
```

---

## 🛠 Technical Stack

### Frontend
- **HTML5** - Semantic markup, accessibility
- **CSS3** - Custom properties, flexbox, grid, animations
- **Vanilla JavaScript** - No frameworks, fast and lightweight
- **Responsive Design** - Mobile-first, 968px breakpoint

### APIs & Integrations
- **NHTSA Recalls API** - `api.nhtsa.gov/recalls/recallsByVehicle`
- **Transport Canada** - Direct links to official database
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Automated workflows (stock bot, news bot, YouTube monitor)

### Performance
- **Static Site** - No server-side processing
- **Cache-Busting** - Version parameters on CSS/JS
- **Optimized Images** - Compressed logo and icons
- **Minimal Dependencies** - No jQuery, Bootstrap, or heavy frameworks

---

## 🚀 Key Features Implemented

### 1. Comprehensive Recall Search
**Problem:** NHTSA API has data inconsistencies
- Some recalls filed as "VF8", others as "VF 8" (with space)
- API only returns recalls for exact year queried

**Solution:**
- Query **all years** (2022, 2023, 2024, 2025) simultaneously
- Query **both model variations** ("VF8" and "VF 8")
- Deduplicate by NHTSA Campaign Number
- Sort by date (most recent first)

**Result:** Shows ALL recalls across all years and variations

```javascript
// Queries 2 variations × 4 years = 8 API calls per search
const years = [2022, 2023, 2024, 2025];
const modelVariations = [model, model.replace(/(\d)/, ' $1')];
```

### 2. Mobile Dropdown Navigation
**Problem:** Clicking dropdown on mobile navigated to anchor instead of expanding menu

**Solution:**
- `e.preventDefault()` + `e.stopPropagation()` on mobile dropdown clicks
- Toggle logic: close all dropdowns, then open clicked one
- Auto-close menu after selecting dropdown item

**Result:** Smooth mobile UX with proper dropdown behavior

### 3. Cache-Busting for Safari
**Problem:** Safari caching old CSS, Join button not styled correctly

**Solution:**
- Added version parameters: `css/styles.css?v=202511130107`
- Applied across all 11 HTML pages
- Version timestamp ensures fresh downloads

**Result:** Safari users see updated styles without hard refresh

---

## 📊 SEO & Performance

### Search Engine Optimization
- **Semantic HTML** - Proper heading hierarchy (h1 → h6)
- **Meta Tags** - Title, description, keywords for each page
- **Open Graph** - Facebook/social media preview cards
- **Twitter Cards** - Twitter-specific metadata
- **Canonical URLs** - Prevents duplicate content issues
- **Hreflang Tags** - English (US/CA) and French (CA) support
- **Structured Data** - Schema.org Organization and WebSite markup
- **Sitemap** - XML sitemap for search engine crawling
- **Robots.txt** - Search engine instructions

### Performance Metrics
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Paint:** < 1s
- **Time to Interactive:** < 2s
- **No Framework Overhead** - Vanilla JS = smaller bundle size

---

## 💻 Development

### Local Development
```bash
# Clone repository
git clone https://github.com/vinfastownersorg-cyber/avo-website.git
cd avo-website

# Start local server
python3 -m http.server 8000

# Open browser
open http://localhost:8000
```

### File Structure Conventions
- **Navigation:** Consistent across all pages (see `nav` element)
- **Bilingual:** All text wrapped in `<span lang="en">` and `<span lang="fr">`
- **Email Obfuscation:** ROT13 encoding in `data-email` attributes
- **Cache-Busting:** Version parameters on CSS/JS references

### Making Changes

**Update Navigation:**
All pages use consistent navigation structure. Update all 11 HTML files when changing nav.

**Add New Page:**
1. Create HTML file based on existing template
2. Add to `sitemap.xml` with appropriate priority
3. Link from navigation or footer as needed
4. Test bilingual content

**Update Recalls API:**
Edit `recalls.html` inline JavaScript (line ~580)

---

## 🤝 Contributing

AVO is a community-driven organization. Contributions welcome!

### Ways to Contribute
- **Report Issues** - Use GitHub Issues or Discord #vinfastownersdotorg
- **Suggest Features** - Share ideas for site improvements
- **Content Updates** - Help maintain accurate information
- **Translation** - Improve French translations

### Pull Request Process
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

This website is maintained by the Association of VinFast Owners North America.

### Disclaimers
- **Not affiliated with VinFast Auto** - Independent owner organization
- **No warranties** - Information provided as-is, use at own risk
- **See Legal Disclaimer** - [vinfastowners.org/disclaimer.html](https://vinfastowners.org/disclaimer.html)

---

## 📞 Contact

- **Discord:** [discord.gg/puQqaEZFAQ](https://discord.gg/puQqaEZFAQ) - #vinfastownersdotorg channel
- **Facebook:** [VinFast Owners Group](https://www.facebook.com/share/g/17dH6oZRA4/)
- **VinFastTalk:** [vinfasttalk.com](https://vinfasttalk.com)
- **Board Email:** [Obfuscated - see site]

---

## 🏆 Acknowledgments

- **8,500+ AVO Members** - Your engagement drives this organization
- **Board of Directors** - Volunteer leadership and governance
- **Discord Community** - Daily support and knowledge sharing
- **Claude Code** - AI pair programming assistant for site development

---

## 📈 Roadmap

### Upcoming Features
- [ ] Member dashboard and login system
- [ ] Event registration and RSVP
- [ ] Regional chapter pages
- [ ] Interactive map of members/charging stations
- [ ] Forums or discussion board integration
- [ ] Newsletter signup and management

### Completed ✅
- [x] Strategic navigation redesign
- [x] Comprehensive recall search (NHTSA + Transport Canada)
- [x] Considering VinFast? prospective buyer guide
- [x] Legal disclaimer and liability protection
- [x] Bilingual EN/FR support
- [x] Mobile-first responsive design
- [x] SEO optimization (sitemap, robots.txt, meta tags)
- [x] Active page highlighting
- [x] Cache-busting for Safari compatibility

---

**Built with ❤️ by the VinFast Owner Community**

*Last Updated: January 13, 2025*

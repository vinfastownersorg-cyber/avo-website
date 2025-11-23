# AVO - Association of VinFast Owners North America

![AVO Logo](images/icons/avo-logo.png)

**Official website for the Association of VinFast Owners North America**

🌐 **Live Site:** [vinfastowners.org](https://vinfastowners.org)
💬 **Discord:** [vinfastowners.org/discord](https://vinfastowners.org/discord.html) - 500+ members
👥 **Community:** Growing network of VinFast owners across North America

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Owner's Manuals](#owners-manuals)
- [Rating System](#rating-system)
- [Site Structure](#site-structure)
- [Technical Stack](#technical-stack)
- [Security & Privacy](#security--privacy)
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

### 📘 Owner's Manuals (NEW!)
- **VF6, VF7, VF8, VF9 Manuals** - Condensed magazine-style PDFs
- **Space-Efficient Format** - 2-column layout, 3-column TOC
- **All Official Images** - 1,685+ images from VinFast CDN preserved
- **Compressed Files** - 6.5-7.5 MB each (down from 24-27 MB)
- **Year Consolidated** - Single PDF per model (manuals identical across years)
- **Strong Disclaimers** - Links to official VinFast sources
- **Troubleshooting Guide** - VF8/VF9 community guide (marked as outdated reference)

### 👍 Portable Rating System (NEW!)
- **Global Vote Tracking** - JSON-based system migrates with repository
- **No External Database** - All data version-controlled in repo
- **Automated Updates** - GitHub Actions workflow + local Python script
- **Real-Time Display** - Users see global counts from all voters
- **Privacy-Friendly** - No user tracking, just counts
- **Easy Management** - Update via GitHub UI or command line

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

### 📜 Governance & Transparency
- **Board of Directors** - Public profiles and contact information
- **Bylaws Online** - Full constitution and organizational rules
- **Meeting Minutes** - Published within 7 days of each meeting
- **Document Repository** - Policies, reports, and official records

### 🌍 Bilingual Support (EN/FR)
- **Full Translation** - English and French (Quebec/Ontario)
- **Language Toggle** - Top-right corner switcher
- **LocalStorage** - Remembers user preference
- **Browser Detection** - Auto-selects French for French browsers

### ⚜️ Quebec & French Resources
- **Dedicated Section** - Comprehensive francophone resources
- **Official French Resources** - VinFast Canada, Welcome Kit, Service Centers
- **Transport Canada (French)** - Canadian recall database
- **Circuit électrique** - Quebec's 5,000+ charging stations
- **Roulez vert** - Quebec provincial EV rebates (up to $7,000)
- **CAA-Québec** - EV resources and winter driving tips

### 💬 Discord Landing Page
- **Professional Landing Page** - Highlights Discord benefits
- **Live Server Widget** - Shows online members in real-time
- **Site-Wide Integration** - All Discord mentions lead to landing page

### 📧 Open Letter to VinFast Leadership
- **Timeline Updates** - Public updates from AVO's dialogue with VinFast
- **Community Transparency** - 132+ owner signatures
- **Discord Integration** - Community feedback form
- **Professional Disclaimers** - Clear explanation of AVO's role

---

## 📘 Owner's Manuals

### What's Available

| Model | Years Covered | File Size | Images |
|-------|---------------|-----------|---------|
| VF6 | 2023-2025 | 6.5 MB | 1,000+ |
| VF7 | 2024-2025 | 7.5 MB | 1,000+ |
| VF8 | 2022-2025 | 6.6 MB | 1,685+ |
| VF9 | 2023-2025 | 7.5 MB | 1,000+ |

### Features

- **Magazine-Style Layout** - 2-column content for space efficiency
- **Condensed TOC** - 3-column table of contents fits on one page
- **All Official Images** - Preserved from VinFast CDN (no placeholders)
- **Compressed** - 70%+ size reduction via Ghostscript
- **Year Consolidated** - Single PDF per model (content identical across years)

### Important Disclaimers

⚠️ **UNOFFICIAL** quick reference guides
📘 **Official source:** [om.vinfastauto.com](https://om.vinfastauto.com)
✅ **Community benefit:** Easier offline access and reference

### Access

Manuals available in Resources section: `/#resources` → "📘 Owner's Manuals & Guides"

---

## 👍 Rating System

### How It Works

**For Users:**
1. Click "👍 Helpful" on useful resources
2. Count increases immediately
3. Vote recorded (prevents duplicates)

**For Admins:**
1. Update counts via GitHub Actions or Python script
2. Commit updated `data/resource-ratings.json`
3. All users see new global counts

### Updating Ratings

**Via GitHub Actions (Recommended):**
```
1. Go to: Actions → "Update Resource Ratings"
2. Click "Run workflow"
3. Enter: vf8-manual:15,vf9-manual:12
4. Auto-commits and deploys
```

**Via Local Script:**
```bash
python3 update-ratings.py
# Follow interactive prompts
git add data/resource-ratings.json
git commit -m "Update ratings"
git push
```

### Documentation

See **[RATINGS-GUIDE.md](RATINGS-GUIDE.md)** for complete documentation including:
- Detailed workflow explanations
- Scheduled automation setup
- Monitoring and analytics
- Troubleshooting guide

---

## 📁 Site Structure

```
vinfastowners-website/
├── index.html                    # Homepage
├── discord.html                  # Discord landing page
├── considering-vinfast.html      # Prospective buyer guide
├── recalls.html                  # NHTSA/Transport Canada recalls
├── vf8-vf9-user-guide.html      # Troubleshooting guide (VF8/VF9)
├── documents.html                # Governance documents
├── bylaws.html                   # AVO Bylaws
├── meeting-minutes.html          # Board meeting minutes
├── join.html                     # Membership signup
├── report-issue.html             # Issue tracking form
├── privacy.html                  # Privacy policy
├── disclaimer.html               # Legal disclaimer
├── manuals/                      # ⭐ Owner's manual PDFs
│   ├── VF6_2023-2024-2025_Owners_Manual_Condensed.pdf
│   ├── VF7_2024-2025_Owners_Manual_Condensed.pdf
│   ├── VF8_2022-2023-2024-2025_Owners_Manual_Condensed.pdf
│   └── VF9_2023-2024-2025_Owners_Manual_Condensed.pdf
├── data/                         # ⭐ Rating system data
│   └── resource-ratings.json    # Global vote counts
├── update-ratings.py             # ⭐ Rating update script
├── RATINGS-GUIDE.md             # ⭐ Complete rating documentation
├── css/
│   └── styles.css               # Main stylesheet
├── js/
│   └── main.js                  # Navigation, language, ratings
└── .github/workflows/            # GitHub Actions automation
    ├── youtube-monitor.yml      # YouTube video notifications
    ├── daily-vinfast-news.yml   # News aggregation
    ├── daily-stock-prices.yml   # Stock price updates
    └── update-ratings.yml       # ⭐ Rating system automation
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
- **VinFast API** - Owner's manual scraping (omapi.vinfastauto.com)
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Automated workflows

### Data Storage
- **localStorage** - User preferences, votes
- **JSON Files** - Global ratings (version controlled)
- **Static Files** - No database required

### Performance
- **Static Site** - No server-side processing
- **Minimal Dependencies** - No jQuery, Bootstrap, or heavy frameworks
- **Compressed Assets** - Optimized PDFs, images
- **Cache-Busting** - Version parameters on CSS/JS

---

## 🔒 Security & Privacy

### Security Measures

**✅ Secrets Management:**
- All API keys in GitHub Secrets (not in code)
- YouTube API, Discord webhooks protected
- GITHUB_TOKEN scoped appropriately

**✅ File Protection:**
- `_config.yml` excludes sensitive directories
- `.htaccess` provides Apache security (future-proof)
- Workflow files not publicly accessible

**✅ Security Headers:**
- X-Frame-Options (clickjacking protection)
- X-Content-Type-Options (MIME sniffing protection)
- X-XSS-Protection (cross-site scripting protection)

**✅ Input Validation:**
- NHTSA API: Request rate limiting
- Forms: Client-side validation
- No user-uploaded content

### Privacy

**✅ No User Tracking:**
- No analytics/tracking scripts
- No cookies (except localStorage for preferences)
- No personal data collection

**✅ Rating System Privacy:**
- Votes stored locally in browser
- No IP addresses logged
- No user identification

**✅ Third-Party Services:**
- NHTSA API: No user data sent
- GitHub Pages: Standard web server logs
- Discord embeds: User controls interaction

### Privacy Policy

See [privacy.html](privacy.html) for complete policy

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

### Making Changes

**Update Manuals:**
1. Run scraper: `python3 scrape_vf8_and_vf9.py` (or VF6/VF7)
2. Generate PDFs: `python3 create_pdfs_condensed.py`
3. Copy to `manuals/` directory
4. Commit and push

**Update Ratings:**
1. Use GitHub Actions: Actions → "Update Resource Ratings"
2. Or local: `python3 update-ratings.py`
3. Commit `data/resource-ratings.json`
4. Push to deploy

**Add New Page:**
1. Create HTML file based on template
2. Add to `sitemap.xml`
3. Link from navigation if needed
4. Test bilingual content

### Documentation

📚 **[Complete Documentation Index](docs/INDEX.md)** - Browse all guides organized by category

**Quick Start:**
- **[SIMPLE_WORKFLOW.md](docs/git/SIMPLE_WORKFLOW.md)** - Everyday edits
- **[RATINGS-GUIDE.md](RATINGS-GUIDE.md)** - Rating system management
- **[DEPLOYMENT_GUIDE.md](docs/setup/DEPLOYMENT_GUIDE.md)** - Production deployment

---

## 🤝 Contributing

AVO is a community-driven organization. Contributions welcome!

### Ways to Contribute
- **Report Issues** - Use GitHub Issues or Discord
- **Suggest Features** - Share ideas for improvements
- **Content Updates** - Help maintain accurate information
- **Translation** - Improve French translations
- **Manuals** - Help maintain PDF guides

### Pull Request Process
1. Fork the repository
2. Create feature branch
3. Commit changes with clear messages
4. Push to branch
5. Open Pull Request

---

## 📄 License

This website is maintained by the Association of VinFast Owners North America.

### Disclaimers
- **Not affiliated with VinFast Auto** - Independent owner organization
- **No warranties** - Information provided as-is
- **Owner's Manuals** - UNOFFICIAL quick reference guides
- **See Legal Disclaimer** - [vinfastowners.org/disclaimer.html](https://vinfastowners.org/disclaimer.html)

---

## 📞 Contact

- **Discord:** [vinfastowners.org/discord](https://vinfastowners.org/discord.html) - 500+ members
- **Facebook:** [VinFast Owners Group](https://www.facebook.com/share/g/17dH6oZRA4/)
- **VinFastTalk:** [vinfasttalk.com](https://vinfasttalk.com) - 594+ members
- **VFFS:** Facebook group - 349+ members

---

## 🏆 Acknowledgments

- **AVO Community** - Your engagement drives this organization
- **Board of Directors** - Volunteer leadership
- **Discord Community** - Daily support and knowledge sharing
- **VinFast API** - Owner's manual data source
- **Claude Code** - AI pair programming assistant

---

## 📈 Roadmap

### Upcoming Features
- [ ] VF3, VF5 owner's manuals
- [ ] Member dashboard and login system
- [ ] Event registration and RSVP
- [ ] Regional chapter pages
- [ ] Interactive charging station map
- [ ] Newsletter system

### Completed ✅
- [x] **VF6/VF7/VF8/VF9 Owner's Manuals** - Condensed magazine-style PDFs
- [x] **Portable Rating System** - JSON-based, GitHub Actions automation
- [x] **Troubleshooting Guide** - VF8/VF9 community resource (outdated warning)
- [x] Strategic navigation redesign
- [x] Comprehensive recall search (NHTSA + Transport Canada)
- [x] Considering VinFast? prospective buyer guide
- [x] Bilingual EN/FR support
- [x] Mobile-first responsive design
- [x] SEO optimization
- [x] Discord landing page
- [x] Resource helpful ratings
- [x] Open Letter page
- [x] Security hardening

---

**Built with ❤️ by the VinFast Owner Community**

---

## 📅 Recent Updates

### November 22, 2025 - Owner's Manuals & Rating System
- **Owner's Manuals Added**: VF6, VF7, VF8, VF9 condensed PDFs (6.5-7.5 MB each)
- **Magazine-Style Layout**: 2-column content, 3-column TOC, 70%+ compression
- **Rating System Upgraded**: Portable JSON-based system with GitHub Actions automation
- **Documentation**: Consolidated RATINGS-GUIDE.md with complete instructions
- **Troubleshooting Guide**: Added strong "OUTDATED" warning for VF8/VF9 guide
- **Security Audit**: Verified all secrets properly managed, no exposed data
- **Repository Cleanup**: Removed duplicate documentation files

### November 18, 2025 - Security & Navigation
- **Open Letter Page**: Dialogue tracking with VinFast leadership
- **Security Hardening**: Dual-layer protection (_config.yml + .htaccess)
- **Navigation Updates**: Hidden unpopulated sections until ready
- **Performance**: URL canonicalization, cache-busting, loop protection

*Last Updated: November 22, 2025*

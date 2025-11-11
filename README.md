# AVO - Association of VinFast Owners North America

**Streamlined, professional website for a member-governed VinFast owners association.**

## What is AVO?

**Association of VinFast Owners (AVO)** is a North American advocacy group and owners club for VinFast EV owners, featuring:

- ✅ **Board Governance** - Meeting minutes, bylaws, member voting
- ✅ **Event Calendar** - Meetups, rallies, board meetings
- ✅ **Bilingual** (EN/FR) - Language toggle for North America
- ✅ **Community Platforms** - Discord, Facebook, VinFastTalk.com
- ✅ **Membership** - Benefits, voting rights, exclusive merch
- ✅ **Mobile Optimized** - Works perfectly on all devices

## Key Sections & Pages

### Homepage (index.html)
- **Hero Section**: "Drive the Future. Together." with VinFast vehicle color stripe
- **Stats Bar**: 8,500+ members, 15+ states/provinces, 5 board members
- **Mission Cards**: Advocacy, Governance, Community
- **Board & Governance**: Links to board, minutes, voting, documents
- **Event Calendar**: Sample upcoming events with date badges
- **Community Platforms**: Discord, Facebook, VinFastTalk with real URLs
- **Membership CTA**: Join AVO free membership

### Board Members Page (board.html)
- **5 Board Positions**: President, Vice President, Secretary, Treasurer, Director at Large
- **Placeholder Profiles**: Names, titles, vehicle models/colors, bios (ready to update)
- **Board Info Cards**: Elections, Contact Info, Meeting Schedule
- **Color-Coded Cards**: Each board member card has unique VinFast color accent

### Governance Documents (documents.html)
- **Bylaws Section**: AVO Bylaws (downloadable DOCX)
- **Board Minutes**: Placeholder for published meeting minutes
- **Policies**: Privacy Policy, Code of Conduct (in development)
- **Financial Reports**: Annual reports (coming 2026)
- **Document Request**: Contact info for additional documents

### Membership Signup (join.html)
- **Free Membership Form**: Name, email, location, vehicle info
- **Vehicle Selection**: VF8/VF9 models, color selection
- **Member Interests**: Contribution preferences (events, advocacy, etc.)
- **Newsletter Opt-in**: AVO updates and communications
- **Alternative Signup**: Direct links to Discord and Facebook registration

## Design Features

### VinFast Vehicle Color Integration
The website incorporates all 8 authentic VF8/VF9 paint colors throughout the design:
- **Color Panels**: Decorative stripes using vehicle colors at section breaks
- **Card Accents**: Individual elements colored with specific vehicle colors
- **Brand Connection**: Creates visual link between website and actual vehicles
- **Premium Feel**: Automotive color palette adds sophistication

See `VEHICLE_COLORS_GUIDE.md` for complete color implementation details.

## File Structure

```
vinfastowners-website/
├── index.html                  # Main homepage with all sections
├── board.html                  # Board of Directors profiles
├── documents.html              # Governance documents & bylaws
├── join.html                   # Free membership signup form
├── css/
│   └── styles.css             # VF8/VF9 vehicle color design + all styles
├── js/
│   └── main.js                # Language toggle functionality
├── images/                    # Logo and background images
│   ├── backgrounds/
│   └── icons/
│       └── avo-logo.png       # AVO logo
├── documents/                 # Official AVO documents
│   └── AVO_Bylaws.docx        # Association bylaws
├── VEHICLE_COLORS_GUIDE.md    # VinFast color implementation guide
├── IMAGES_GUIDE.md            # How to add background images
├── LOGO_SETUP.md              # AVO logo setup instructions
├── README.md                  # This file
├── DEPLOYMENT_GUIDE.md        # Deployment instructions
└── BUG_TRACKING_SETUP.md      # GitHub Issues setup guide
```

## Quick Start

### 1. View Locally
```bash
open index.html
# or
python3 -m http.server 8000
```

### 2. Logo Already Added! ✅
The AVO logo is already in place at `images/icons/avo-logo.png` and displays on all pages.

### 3. Add Background Images (Optional)
See `IMAGES_GUIDE.md` for:
- Free image sources (Unsplash, Pexels)
- Hero background setup
- Image optimization tips

**Site works great without backgrounds!** (Currently uses gradients)

### 4. Real URLs Already Integrated! ✅
- Discord: https://discord.gg/puQqaEZFAQ
- Facebook: https://www.facebook.com/share/g/17dH6oZRA4/
- VinFastTalk.com: https://vinfasttalk.com

### 5. Customize Board & Content

**Update board member profiles** in `board.html`:
- Replace placeholder names, titles, and bios with real board members
- Add real photos (replace `.photo-placeholder` with `<img>` tags)
- Update contact email and meeting schedules

**Update events** in `index.html`:
- Replace sample events (lines 226-312) with real upcoming events
- Add dates, locations, and registration links

**Bylaws already added**:
- `/documents/AVO_Bylaws.docx` is ready for download

## Governance Features

### Board Minutes
Link to published minutes (Google Docs, GitHub, or PDF):
```html
<!-- Line 159 -->
<a href="YOUR_MINUTES_URL" class="btn btn-small btn-outline">
    View Minutes
</a>
```

### Member Voting
Options for implementation:
1. **Simple**: Link to Google Forms
2. **Medium**: Use Typeform or SurveyMonkey
3. **Advanced**: Build custom voting system

**Quick setup** (Google Forms):
```html
<!-- Line 173 -->
<a href="YOUR_GOOGLE_FORM_URL" class="btn btn-small btn-outline">
    Active Votes
</a>
```

### Board Member Profiles
Create a simple page or link to:
- GitHub profiles
- LinkedIn profiles
- Simple bio page

### Bylaws Storage
Host on:
- **GitHub**: Free, version controlled
- **Google Drive**: Easy sharing
- **Website**: `/docs/bylaws.pdf`

## Event Calendar

### Current: Static Events
Sample events in HTML - update manually

### Future Options:

**Option 1: Google Calendar Embed**
```html
<iframe src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR"
        style="border: 0" width="800" height="600"></iframe>
```

**Option 2: Meetup.com Integration**
- Create AVO group on Meetup.com
- Link to it from "View Full Calendar"

**Option 3: Custom Calendar**
- Add calendar library (FullCalendar.js)
- Store events in JSON file
- More control, more work

**Recommended**: Start with static HTML events, upgrade later

## Deployment

### Option 1: Netlify (Recommended)
1. Go to https://netlify.com
2. Drag & drop `vinfastowners-website` folder
3. Configure `vinfastowners.org` domain
4. Free HTTPS included
5. Done!

### Option 2: GitHub Pages
```bash
git init
git add .
git commit -m "AVO website"
git push to GitHub
# Enable Pages in repo settings
```

See `DEPLOYMENT_GUIDE.md` for complete instructions.

## Customization

### Colors
Edit `css/styles.css` lines 10-16:
```css
:root {
    --vinfast-blue: #00539C;
    --electric: #00A3FF;
    --adventure: #FF6B35;
    /* ... */
}
```

### Stats
Edit `index.html` lines 78-97

### Navigation
Edit `index.html` lines 27-52 to add/remove nav items

## Building Features Over Time

### Phase 1: Launch (Now)
✅ Static website
✅ Bilingual support
✅ Community links
✅ Sample events
✅ Membership info

### Phase 2: Governance (1-2 months)
- [ ] Upload first board minutes
- [ ] Create board member profiles page
- [ ] First member vote (Google Forms)
- [ ] Publish bylaws

### Phase 3: Events (2-3 months)
- [ ] Set up Google Calendar
- [ ] First real event
- [ ] Event registration system
- [ ] Photo gallery from events

### Phase 4: Membership (3-6 months)
- [ ] Payment processing (Stripe)
- [ ] Member login/portal
- [ ] Merch store
- [ ] Exclusive content area

### Phase 5: Advanced (6+ months)
- [ ] Custom voting system
- [ ] Member directory
- [ ] Forums/discussion boards
- [ ] Mobile app

## What's NOT Included (By Design)

This site focuses on **governance & community**, not:
- ❌ Owner's manuals (link to VinFast official)
- ❌ Technical support (link to VinFast)
- ❌ Detailed guides (focus on advocacy)

**Why?** Don't duplicate VinFast's resources. Focus on what makes AVO unique: member governance and community.

## Cost Estimate

**Current (Basic Site)**
- Hosting: FREE (Netlify)
- Domain: $12-15/year
- Total: **~$15/year**

**With Membership Portal**
- Hosting: FREE (Netlify)
- Domain: $12-15/year
- Payment: 2.9% + 30¢ per transaction (Stripe)
- Member portal: $0-50/month
- Total: **~$15-600/year**

## Technology Stack

**Current (Simple)**
- HTML5, CSS3, JavaScript
- No framework needed
- No database
- Static site = Fast & Secure

**Future (If needed)**
- Authentication: Auth0 or Firebase
- Payments: Stripe
- Database: Firestore or Supabase
- Hosting: Still Netlify (supports all this)

## Support & Documentation

- **Deployment**: See DEPLOYMENT_GUIDE.md
- **Images**: See IMAGES_GUIDE.md
- **Bug Tracking**: See BUG_TRACKING_SETUP.md
- **Questions**: Create GitHub issue

## Transfer Instructions

```bash
# Create ZIP
cd /Users/michaelbivens/Vinfast
zip -r avo-website.zip vinfastowners-website/

# Send to team member with:
# - README.md (start here)
# - All documentation files
# - Update Discord/Facebook links before launch
```

## Before Launch Checklist

- [ ] Update Discord invite URL
- [ ] Update Facebook group URL
- [ ] Update board member count
- [ ] Add real events (or remove sample events)
- [ ] Test language toggle
- [ ] Test on mobile device
- [ ] Deploy to Netlify
- [ ] Configure domain
- [ ] Test live site
- [ ] Announce to community!

## Version

**v4.0** - AVO Governance & Events Focus
- Rebranded to AVO
- Board governance section
- Event calendar
- Member voting structure
- Streamlined navigation
- Ready for growth

---

**Association of VinFast Owners (AVO) North America**
**Independent owner organization | Not affiliated with VinFast Auto**

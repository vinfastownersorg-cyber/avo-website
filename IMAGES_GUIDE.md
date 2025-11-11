# AVO Website - Image Guide

## Adding Background Images

The site is ready for adventure/electric/future-themed background images. Here's how to add them:

### Recommended Free Image Sources

1. **Unsplash** - https://unsplash.com
   - Search: "electric car", "ev charging", "future technology", "road trip", "adventure"
   - Free to use, no attribution required

2. **Pexels** - https://pexels.com
   - Search: "electric vehicle", "highway sunset", "mountain road", "technology"
   - Free to use

3. **Pixabay** - https://pixabay.com
   - Similar free images

### Hero Background Image

**Theme**: Adventure + Electrification + Future

**Suggested searches**:
- "electric car mountain road"
- "ev charging station sunset"
- "futuristic highway"
- "road trip adventure"
- "electric vehicle landscape"

**How to add**:

1. Download a high-quality image (1920x1080 or larger)
2. Save as: `images/backgrounds/hero.jpg`
3. Uncomment these lines in `css/styles.css` (lines 134-137):

```css
.hero {
    position: relative;
    background-image: url('../images/backgrounds/hero.jpg');
    background-size: cover;
    background-position: center;
    background: linear-gradient(135deg, var(--vinfast-blue), var(--electric));
    /* ... */
}
```

4. Adjust the overlay opacity in line 154:
```css
.hero-overlay {
    background: rgba(0, 83, 156, 0.5); /* Lower number = more image visible */
}
```

### Recommended Hero Images

Search Unsplash/Pexels for:

**Option 1: Adventure Focus**
- Keyword: "mountain road electric car"
- Vibe: Winding mountain highway, dramatic landscape
- Example: https://unsplash.com/s/photos/mountain-road-electric-car

**Option 2: Technology Focus**
- Keyword: "ev charging futuristic"
- Vibe: Modern charging station, sleek design
- Example: https://unsplash.com/s/photos/ev-charging

**Option 3: Community Focus**
- Keyword: "electric cars meetup"
- Vibe: Group of EVs, community gathering
- Example: https://unsplash.com/s/photos/electric-car-rally

### Additional Background Options

#### Governance Section
For a professional look, add a subtle pattern:

```css
.governance-section {
    background: var(--light);
    background-image: url('../images/backgrounds/pattern-light.svg');
}
```

**Suggested**: Subtle grid pattern or geometric design from:
- https://www.heropatterns.com/ (free SVG patterns)
- https://www.transparenttextures.com/

#### Events Section
Optional: Subtle calendar/community themed background

```css
.events-section {
    background-image: url('../images/backgrounds/events-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
}
```

### Image Optimization

Before adding images:

1. **Resize**: Max 1920px width for hero images
2. **Compress**: Use https://tinypng.com or https://squoosh.app
3. **Format**:
   - JPEG for photos (.jpg)
   - WebP for better compression (if browser support OK)
   - SVG for logos/patterns

### Folder Structure

```
images/
├── backgrounds/
│   ├── hero.jpg          # Main hero image
│   ├── events-bg.jpg     # Optional events background
│   └── pattern-light.svg # Optional pattern
├── icons/
│   └── avo-logo.svg      # AVO logo (if created)
└── placeholder/
    └── .gitkeep
```

### Creating an AVO Logo

**Option 1**: Use a design tool
- Canva (free) - https://canva.com
- Create simple "AVO" text logo with VinFast colors

**Option 2**: Text-based logo (current)
- Already using stylized "AVO" text in navigation
- Clean, simple, works well

**Option 3**: Commission a designer
- Fiverr: $5-50 for simple logo
- 99designs: Logo contest

**If you create a logo:**

1. Save as SVG: `images/icons/avo-logo.svg`
2. Update HTML (line 20-25):

```html
<div class="logo">
    <img src="images/icons/avo-logo.svg" alt="AVO" class="logo-img">
    <span class="logo-subtitle">
        <span lang="en">North America</span>
        <span lang="fr">Amérique du Nord</span>
    </span>
</div>
```

3. Add CSS:
```css
.logo-img {
    height: 50px;
    width: auto;
}
```

## Quick Start Image Setup

### Minimal (No downloads needed)
✅ Current gradient backgrounds look professional
✅ No images required to launch

### Recommended (10 minutes)
1. Download 1 hero background from Unsplash
2. Save as `images/backgrounds/hero.jpg`
3. Uncomment CSS lines
4. Adjust overlay opacity
5. Done!

### Full Setup (30 minutes)
1. Hero background image
2. Optional section backgrounds
3. Create/add AVO logo
4. Optimize all images
5. Test on mobile

## Image Checklist

Before adding any image:
- [ ] Image is free to use (check license)
- [ ] Resolution: 1920px+ for backgrounds
- [ ] File size: <500KB per image (compress if needed)
- [ ] Matches theme: adventure, electric, future
- [ ] Looks good with blue overlay
- [ ] Mobile-tested (doesn't look weird cropped)

## Example Image Combinations

### Theme 1: Mountain Adventure
- **Hero**: Mountain highway at sunset
- **Vibe**: Adventurous, freedom, exploration
- **Colors**: Warm oranges/blues complement brand

### Theme 2: Urban Electric
- **Hero**: Modern city with charging stations
- **Vibe**: Progressive, technology-forward
- **Colors**: Cool blues/grays, sleek

### Theme 3: Community Gathering
- **Hero**: EV owners meetup
- **Vibe**: Friendly, welcoming, together
- **Colors**: Bright, optimistic

## Free Image URLs (Examples)

**Note**: These are examples - download from source for best quality

### Adventure Theme
- Unsplash: `/photos/asphalt-road` + filter: landscape
- Pexels: Search "road trip mountains"

### Electric Theme
- Unsplash: `/photos/electric-car`
- Pexels: Search "ev charging"

### Future Theme
- Unsplash: `/photos/futuristic-architecture`
- Pexels: Search "modern technology"

## Testing Images

After adding images:

1. **Desktop**: Check at 1920px width
2. **Mobile**: Check at 375px width
3. **Test overlay**: Ensure text is readable
4. **Load time**: Should be <2 seconds
5. **Languages**: Test EN/FR - text still readable?

## Troubleshooting

**Image not showing:**
- Check file path: `../images/backgrounds/hero.jpg`
- Verify file exists in correct folder
- Check file extension (.jpg not .jpeg)

**Text hard to read:**
- Increase overlay opacity (0.7 instead of 0.5)
- Darken image in photo editor before uploading
- Add text shadow in CSS

**Slow loading:**
- Compress image more
- Convert to WebP format
- Reduce resolution (max 1920px width needed)

**Looks wrong on mobile:**
- Use `background-position: center center`
- Try different image with better mobile crop
- Test portrait vs landscape orientation

## No Images? Still Looks Great!

The site currently uses:
- **Gradient backgrounds** - Professional, modern
- **Emoji icons** - Fun, universal, no downloads
- **Color blocks** - Clean, fast loading

You can launch without any images and add them later!

---

**Recommendation**: Start with just a hero background image. The rest can be added over time as the site evolves.

# Adding the AVO Logo

The website is now configured to use your AVO logo!

## Quick Setup

### Step 1: Save the Logo
Save your logo image as:
```
images/icons/avo-logo.png
```

**Important**: The file must be named exactly `avo-logo.png`

### Step 2: That's it!
The website is already configured to display it. Just refresh the page.

## Logo Specifications

Your current logo is perfect:
- ✅ Circular badge design
- ✅ "Association of VinFast Owners" text
- ✅ VinFast "V" in center
- ✅ Black and red color scheme
- ✅ Professional appearance

### Recommended Sizes

For best quality, save multiple versions:

1. **Main logo** (for website)
   - File: `avo-logo.png`
   - Size: 200x200px (will display at 50x50px)
   - Format: PNG with transparent background

2. **High-res version** (for print/merch)
   - File: `avo-logo-hires.png`
   - Size: 1000x1000px or larger
   - Keep original for future use

3. **Favicon** (browser tab icon) - Optional
   - File: `favicon.ico`
   - Size: 32x32px or 64x64px
   - Place in root folder: `vinfastowners-website/favicon.ico`

## File Formats

**Current logo format**: PNG
- ✅ Good for web
- ✅ Transparent background works great
- ✅ Small file size

**Alternative formats** (if you have them):

1. **SVG** (Vector - best for scaling)
   - File: `avo-logo.svg`
   - Perfect quality at any size
   - Very small file size
   - If you have SVG, update HTML to use it:
     ```html
     <img src="images/icons/avo-logo.svg" alt="AVO Logo" class="logo-img">
     ```

2. **WebP** (Modern format)
   - Smaller file size than PNG
   - Good browser support
   - Use if optimizing for performance

## Logo Colors

From your logo:
- **Primary**: Black text/border
- **Accent**: Red/Maroon VinFast "V"
- **Background**: White/transparent

These match the website colors:
- `--vinfast-blue: #00539C` (website accent)
- `--adventure: #FF6B35` (website CTA)

## Current Integration

The logo appears in:
- ✅ **Navigation bar** (top left)
  - Desktop: 50x50px
  - Mobile: 40x40px
- ✅ Next to "AVO" text and "North America"

## Future Logo Uses

Consider adding logo to:
- [ ] Footer
- [ ] Favicon (browser tab)
- [ ] Social media preview (Open Graph image)
- [ ] Email signatures
- [ ] Merch designs
- [ ] Event banners

## Adding Favicon

To add logo as browser tab icon:

1. Create 32x32px version of logo
2. Convert to .ico format (use https://favicon.io)
3. Save as `vinfastowners-website/favicon.ico`
4. Add to HTML `<head>` section:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="apple-touch-icon" href="images/icons/avo-logo.png">
```

## Optimizing Logo for Web

If logo file is large (>100KB):

1. **Compress PNG**: Use https://tinypng.com
2. **Convert to WebP**: Use https://squoosh.app
3. **Or use SVG**: Vector format = smallest file size

**Current setup expects**: PNG around 200x200px, under 50KB

## Troubleshooting

**Logo not showing:**
- Check file is named exactly: `avo-logo.png`
- Check file is in: `images/icons/` folder
- Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check browser console for errors (F12)

**Logo looks blurry:**
- Save at higher resolution (400x400px or 600x600px)
- Logo will display at 50x50px but needs 2x-3x resolution for retina displays

**Logo too small/large:**
- Edit CSS in `css/styles.css` line 99-102:
  ```css
  .logo-img {
      height: 60px;  /* Change this */
      width: 60px;   /* Change this */
  }
  ```

**Logo colors don't match:**
- Logo colors look great as-is!
- If needed, edit in image editor to match site colors

## Social Media Sizes

If creating versions for social media:

- **Facebook cover**: 820x312px
- **Twitter header**: 1500x500px
- **LinkedIn banner**: 1584x396px
- **Instagram profile**: 320x320px (circular crop)

Your circular logo design works perfectly for all these!

## Merch Applications

Your logo is ideal for:
- T-shirts (vinyl print or screen print)
- Hats (embroidery)
- Stickers (die-cut circle)
- Keychains
- License plate frames
- Car decals

The circular badge design is very versatile!

## Legal Note

Since this is a professional logo design:
- ✅ Keep high-resolution master file safe
- ✅ Consider trademarking "AVO" + logo
- ✅ Document logo usage guidelines
- ✅ Specify how members can use it

## Summary

**To use logo right now:**
1. Save logo image as `images/icons/avo-logo.png`
2. Refresh website
3. Done!

The website is already configured and ready to display it beautifully in the navigation bar!

---

**Your logo looks fantastic!** Professional, memorable, and perfect for a vehicle owners association.

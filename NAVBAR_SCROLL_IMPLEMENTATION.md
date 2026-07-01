# Navbar Scroll Implementation

## Overview
The navbar has been updated to dynamically change its appearance when scrolling past the hero section.

## Features Implemented

### Initial State (Before Scrolling)
- **Background**: Light gradient (blue/purple tones) with glassmorphism effect
- **Logo**: Uses `ver1.png` with full "LENIENT TREE" text visible
- **Text Color**: Dark navy blue (#1a2b6b)
- **Nav Links**: Light background with dark text
- **Register Button**: White/light background with dark text
- **Border**: Light border with subtle shadow

### Scrolled State (After Hero Section)
- **Background**: Dark gradient (deep blue tones) 
- **Logo**: Switches to `ver2.png` (compact version)
- **Logo Text**: Fades out and hides
- **Nav Links**: Completely hidden (navbar becomes compact)
- **Size**: Reduces to max-width of 180px
- **Text Color**: Changes to white
- **Register Button**: Blue gradient background with white text
- **Border**: Darker border with stronger shadow

## Technical Details

### Scroll Detection
```javascript
const heroHeight = window.innerHeight * 0.85; // 85% of viewport height
setIsScrolled(window.scrollY > heroHeight);
```
The navbar detects when you've scrolled past 85% of the viewport height (approximately the hero section).

### Dynamic Logo Switching
```jsx
<Image
  src={isScrolled ? "/ver2.png" : "/ver1.png"}
  alt="Lenient Tree Logo"
  width={40}
  height={40}
  className={styles.logoIcon}
/>
```

### CSS Classes
- `.navbar` - Base navbar styles
- `.navbar.scrolled` - Applied when scrolled past hero
- Smooth transitions with `transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`

## Files Modified

1. **components/navbar.tsx**
   - Added scroll detection with `useEffect` hook
   - Added `isScrolled` state
   - Dynamic logo source based on scroll state
   - Added `scrolled` className conditionally

2. **components/navbar.module.css**
   - Updated base navbar styles for light theme
   - Added `.navbar.scrolled` styles for compact dark theme
   - Updated text colors, backgrounds, and transitions
   - Made nav links and logo text hide when scrolled

3. **public/ver1.png**
   - Created (copied from lt-ww-1@2x.png)
   - You can replace this with your custom logo for the initial state

4. **public/ver2.png**
   - Already exists
   - Used for the compact scrolled state

## Customization

### Adjust Scroll Threshold
Change the multiplier in navbar.tsx:
```javascript
const heroHeight = window.innerHeight * 0.85; // Change 0.85 to your preferred value
```

### Modify Transition Speed
Update the transition timing in navbar.module.css:
```css
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
/* Change 0.4s to make it faster (0.2s) or slower (0.6s) */
```

### Color Customization
- Initial state colors: Update the `.navbar` base styles
- Scrolled state colors: Update the `.navbar.scrolled` styles

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Uses CSS backdrop-filter (gracefully degrades in older browsers)

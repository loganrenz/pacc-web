# PACC Demo Templates

This directory contains base templates for creating new PACC demo pages. Each template is a fully functional starting point that you can copy and customize.

## Available Templates

### 1. Standard Template (`/standard`)
- **Three.js Scene:** Particle field with brand colors
- **Layout:** Traditional grid-based layout
- **Best for:** General purpose demos
- **Features:**
  - Animated particle system
  - All 5 required sections
  - Standard card-based approach section

### 2. Carousel Template (`/carousel`)
- **Three.js Scene:** Wave animation
- **Layout:** Features a functional carousel in the Approach section
- **Best for:** Interactive demos with sliding content
- **Features:**
  - Undulating wave geometry
  - Embla carousel integration
  - Touch/swipe support
  - Previous/Next buttons

### 3. Alternative Template (`/alternative`)
- **Three.js Scene:** Abstract rotating shapes
- **Layout:** Modern card-based design with hover effects
- **Best for:** Visually distinct presentations
- **Features:**
  - Multiple geometric shapes
  - Advanced hover animations
  - Numbered approach cards
  - Progressive gradient accents

## How to Use a Template

1. **Copy the template:**
   ```bash
   cp -r src/mockups/templates/standard src/mockups/my-new-demo
   ```

2. **Customize (if needed):**
   - Adjust colors or spacing (keep brand colors!)
   - Change which Three.js scene to use
   - Modify layout arrangement
   - DO NOT change marketing copy

3. **Test your demo:**
   ```bash
   # Update vite config to include your demo
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## What NOT to Change

❌ **Do not modify:**
- Marketing copy (titles, descriptions, bios)
- Required sections (Approach, Market, Solution, Leadership, Contact)
- Team member information
- Logo or brand images
- Section ordering

✅ **You may change:**
- Visual styling (colors must stay within brand palette)
- Layout arrangement
- Animation styles
- Three.js scene selection
- Spacing and typography sizes

## Template Structure

Each template includes:

```
template-name/
├── index.html          # Entry HTML file
├── main.ts            # Vue app initialization
└── App.vue            # Main component with all sections
```

## Performance Tips

- Templates use `defineAsyncComponent` for Three.js scenes (lazy loading)
- Scenes are optimized for 60fps
- Mobile-responsive by default
- Build size kept minimal

## Support

Refer to the main [DEMO_GUIDE.md](/DEMO_GUIDE.md) for complete documentation.

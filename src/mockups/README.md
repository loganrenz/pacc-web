# PACC Mockups Directory

This directory contains demo pages and templates for the PACC website. Each demo showcases a different Three.js hero scene and layout style while maintaining all original PACC content.

## Directory Structure

```
mockups/
├── README.md              # This file
├── templates/             # Base templates for new demos
│   ├── README.md
│   ├── standard/         # Standard layout template
│   ├── carousel/         # Carousel variant template
│   └── alternative/      # Alternative styling template
├── shared/                # Shared components for all demos
│   ├── DemoLayout.vue    # Base layout with nav/footer
│   ├── DemoNav.vue       # Navigation component
│   ├── DemoFooter.vue    # Footer component
│   └── DemoHeroSection.vue # Hero section wrapper
├── scenes/                # Three.js scene components
│   ├── HeroScene1.vue    # Particle field scene
│   ├── HeroScene2.vue    # Wave animation scene
│   └── HeroScene3.vue    # Abstract shapes scene
├── demo1/                 # Demo 1: Particle Field
├── demo2/                 # Demo 2: Wave Animation with Carousel
└── demo3/                 # Demo 3: Abstract Shapes
```

## Quick Start

### View Existing Demos

```bash
# Start development server
npm run dev

# Visit the demos:
# http://localhost:5173/mockups/demo1/
# http://localhost:5173/mockups/demo2/
# http://localhost:5173/mockups/demo3/
```

### Create a New Demo

1. Copy a template:
   ```bash
   cp -r src/mockups/templates/standard src/mockups/my-demo
   ```

2. Customize your demo (see [DEMO_GUIDE.md](/DEMO_GUIDE.md))

3. Add to Vite config (`vite.config.ts`):
   ```typescript
   build: {
     rollupOptions: {
       input: {
         main: resolve(__dirname, 'index.html'),
         demo1: resolve(__dirname, 'mockups/demo1/index.html'),
         demo2: resolve(__dirname, 'mockups/demo2/index.html'),
         demo3: resolve(__dirname, 'mockups/demo3/index.html'),
         myDemo: resolve(__dirname, 'mockups/my-demo/index.html'), // Add this
       },
     },
   }
   ```

4. Test your demo:
   ```bash
   npm run dev
   # Visit http://localhost:5173/mockups/my-demo/
   ```

## Demo Overview

### Demo 1: Particle Field
- **Scene:** Animated particle system with PACC brand colors
- **Style:** Traditional grid-based layout
- **Features:** 2000+ particles, mouse interaction, smooth animation
- **Best for:** Modern, tech-focused presentations

### Demo 2: Wave Animation with Carousel
- **Scene:** Undulating wave geometry
- **Style:** Features functional Embla carousel
- **Features:** Touch/swipe support, animated wave, carousel controls
- **Best for:** Interactive, engaging presentations

### Demo 3: Abstract Shapes
- **Scene:** Rotating geometric shapes (torus, octahedron, icosahedron, torus knot)
- **Style:** Modern card-based design with advanced hover effects
- **Features:** Multiple colored shapes, orbital animation, pulsing effects
- **Best for:** Visually distinct, artistic presentations

## Shared Components

### DemoLayout.vue
Wraps all demo content with navigation and footer.

```vue
<template>
  <DemoLayout>
    <!-- Your demo content -->
  </DemoLayout>
</template>
```

### DemoNav.vue
Sticky navigation header with:
- PACC logo
- Navigation links (Approach, Market, Solution, Leadership, Contact)
- Mobile menu
- Scroll-based styling

### DemoFooter.vue
Footer with:
- PACC logo
- Copyright notice

### DemoHeroSection.vue
Hero section that integrates Three.js scenes with content.

```vue
<DemoHeroSection 
  :scene-component="YourScene" 
  :show-impact-card="true" 
/>
```

## Three.js Scenes

### HeroScene1.vue - Particle Field
- 2000 animated particles
- PACC brand colors
- Additive blending
- Smooth rotation and wave motion
- Performance: ~60 FPS

### HeroScene2.vue - Wave Animation
- 100x100 plane geometry
- Sine/cosine wave animation
- Gradient material (cyan → green)
- Animated lighting
- Performance: ~60 FPS

### HeroScene3.vue - Abstract Shapes
- 4 geometric shapes (torus, octahedron, icosahedron, torus knot)
- Orbital animation
- Emissive materials
- Multiple colored lights
- Camera rotation
- Performance: ~60 FPS

## Performance Optimization

All demos are optimized for performance:

- **Lazy loading:** Three.js scenes loaded with `defineAsyncComponent`
- **Scene optimization:** Geometries and materials properly disposed
- **Responsive:** Handles window resize efficiently
- **FPS target:** 60 FPS on modern hardware
- **Build size:** Minimized through code splitting

## Content Requirements

⚠️ **IMPORTANT:** All demos MUST include:

1. ✅ All 5 sections: Approach, Market, Solution, Leadership, Contact
2. ✅ Exact copy from the original PACC site
3. ✅ Functional navigation and anchor scrolling
4. ✅ Mobile responsive layout
5. ✅ Three.js hero scene
6. ✅ PACC branding (logo, colors, typography)
7. ✅ Founder photos and bios

See [DEMO_GUIDE.md](/DEMO_GUIDE.md) for complete requirements.

## Building for Production

```bash
# Build all demos
npm run build

# Output will be in dist/
# - dist/index.html (main site)
# - dist/mockups/demo1/index.html
# - dist/mockups/demo2/index.html
# - dist/mockups/demo3/index.html
```

## Testing

### Manual Testing Checklist

- [ ] All sections present and in correct order
- [ ] Navigation links work (smooth scroll)
- [ ] Mobile responsive (test 375px, 768px, 1024px, 1440px)
- [ ] Three.js scene loads and animates smoothly
- [ ] No console errors
- [ ] Images load correctly
- [ ] Performance: page loads in < 2 seconds
- [ ] Performance: animation runs at 60 FPS
- [ ] All copy matches original site

## Troubleshooting

### Three.js scene not loading
- Check console for errors
- Verify scene component is imported correctly
- Ensure `defineAsyncComponent` is used for lazy loading

### Performance issues
- Reduce particle count in HeroScene1
- Reduce geometry resolution in HeroScene2
- Check for memory leaks (ensure cleanup in `onUnmounted`)

### Build fails
- Verify all imports are correct
- Check that all referenced files exist
- Ensure Vite config includes your demo

## Contributing

When adding a new demo:

1. Copy a template
2. Follow the [DEMO_GUIDE.md](/DEMO_GUIDE.md)
3. Test thoroughly
4. Update `vite.config.ts`
5. Add entry to this README

## Resources

- [DEMO_GUIDE.md](/DEMO_GUIDE.md) - Complete development guide
- [Three.js Documentation](https://threejs.org/docs/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Embla Carousel](https://www.embla-carousel.com/)

## Support

For questions or issues, refer to the [DEMO_GUIDE.md](/DEMO_GUIDE.md) or review existing demo implementations.

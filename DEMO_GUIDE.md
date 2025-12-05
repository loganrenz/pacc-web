# PACC Demo Development Guide

**Version:** 1.0  
**Last Updated:** December 2025

This guide provides comprehensive instructions for AI agents and developers to quickly build new demo pages for the PACC website while maintaining brand consistency and content integrity.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Core Requirements](#core-requirements)
3. [Architecture Overview](#architecture-overview)
4. [Component Library](#component-library)
5. [Three.js Hero Scenes](#threejs-hero-scenes)
6. [Carousel Implementation](#carousel-implementation)
7. [Content Guidelines](#content-guidelines)
8. [Performance Requirements](#performance-requirements)
9. [Examples](#examples)

---

## Quick Start

### Prerequisites
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Creating a New Demo

1. **Copy a template from `/src/mockups/templates/`**
2. **Choose a Three.js scene variant**
3. **Customize styling (colors, spacing, typography only)**
4. **Test responsiveness**
5. **Verify performance**

---

## Core Requirements

### ✅ 1. Existing Content Must Remain

These must exist **exactly as they do on pacc.services**, even if layout changes:

- **All sections:** Approach, Market, Solution, Leadership, Contact
- **All existing text copy** — unchanged
- **All existing headings**
- **All footer content**
- **All section ordering preserved**

**You may restyle but NOT remove or rewrite any copy.**

### ✅ 2. Branding Requirements

Every demo page must include:

- **Official PACC logo** (SVG or PNG) in the nav
- **Official color palette:**
  - Navy: `#1e293b` (slate-900)
  - Brand: `#0f172a` (brand)
  - Green: `#10b981` (brand-green)
  - Cyan: `#06b6d4` (brand-cyan)
  - White: `#ffffff`
- **Official typography** or closest web-safe equivalent
- **Circular founder photos** (use the exact images from the current site)
- **Consistent spacing + margin rhythm** across all sections

### ✅ 3. Image Requirements

Every page must include:

- **Hero image replaced with Three.js hero scene**
- **All founders' images** displayed in Leadership section
  - Andrew Carman: `/src/assets/images/andrew.png`
  - Patrick Charette: `/src/assets/images/image.png`
- **Any existing images** from Market / Solution / Approach sections
- **Favicon + metadata images** unchanged
- **No missing image slots**
- **No placeholders** for content images (except where noted for 3D scene)

### ✅ 4. Structural Requirements

Each mockup must include:

- **Full top navigation bar** with the same links
- **Full footer**
- **All five major page sections:**
  1. Hero (with Three.js scene)
  2. Approach
  3. Market / Solution
  4. Leadership
  5. Contact
- **CTA button** ("Talk to Us") in nav or hero
- **Your 3D scene must not remove or obscure these sections**

### ✅ 5. Functionality Requirements

Each page must include:

- **Functional navigation links**
- **Functional anchor scrolling**
- **Mobile-friendly layout**
- **Site-wide responsive typography**
- **Same copy in all breakpoints**

### ✅ 6. Three.js Hero Requirements

Every mockup must:

- Use a **fully working Three.js scene**
- Render in the **top hero area**
- Be **visually distinct** but still match the PACC brand
- Include:
  - Animated geometry
  - Proper lighting (key/rim/ambient)
  - PACC-color glow elements
  - GPU particles or emissive motion
  - Smooth animation loop

### ✅ 7. Carousel Requirements (Global)

At least one page must include a real, functioning:

- **HTML/CSS/JS carousel** OR
- **3D carousel in Three.js**

If more pages include it, even better.

### ✅ 8. Performance Requirements

All demo pages must:

- Load in under **~2 seconds** on modern hardware
- Use **optimized Three.js scenes**
- Avoid excessively heavy models
- **Lazy-load** non-critical scripts

### ✅ 9. Reusability Requirements

All mockups must:

- Use a **consistent component structure** where possible
- **Share global nav/footer components**
- Be built in `/src/mockups/` as **separately loadable pages**

### ✅ 10. No Copy Changes

**Repeat to be clear:**

- **Do not rewrite or remove ANY marketing copy from the PACC site.**
- **You may only rearrange it visually.**

---

## Architecture Overview

### Directory Structure

```
/src/mockups/
├── templates/              # Base templates for new demos
│   ├── standard/          # Standard layout template
│   ├── carousel/          # Template with carousel
│   └── alternative/       # Alternative styling template
├── shared/                # Shared components for all demos
│   ├── DemoNav.vue       # Navigation component
│   ├── DemoFooter.vue    # Footer component
│   └── DemoLayout.vue    # Base layout wrapper
├── scenes/                # Three.js scene components
│   ├── HeroScene1.vue    # Particles and geometry
│   ├── HeroScene2.vue    # Wave animation
│   └── HeroScene3.vue    # Abstract shapes
├── demo1/                 # Individual demo pages
├── demo2/
└── demo3/
```

### Shared Components

All demo pages should use these shared components:

#### DemoNav.vue
```vue
<!-- Navigation with PACC logo and links -->
<DemoNav />
```

#### DemoFooter.vue
```vue
<!-- Footer with copyright and links -->
<DemoFooter />
```

#### DemoLayout.vue
```vue
<!-- Wraps all demo content with nav and footer -->
<DemoLayout>
  <!-- Your demo content here -->
</DemoLayout>
```

---

## Component Library

### Navigation Links

Standard navigation items (in order):

```typescript
const navItems = [
  { label: 'Approach', href: '#approach' },
  { label: 'Market', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]
```

### Section Components

Use these existing components from `/src/components/sections/`:

- `ApproachSection.vue` - Our Approach section
- `MarketProblemSection.vue` - Market Problem and Solution
- `LeadershipSection.vue` - Leadership Team
- `ContactSection.vue` - Get in Touch

### UI Components

Available UI components from `/src/components/ui/`:

- `BaseButton.vue` - Styled buttons
- `BaseCard.vue` - Card container
- `ApproachCard.vue` - Approach feature cards
- `TeamMemberCard.vue` - Team member display
- `ContactCard.vue` - Contact information

---

## Three.js Hero Scenes

### Available Scene Types

#### 1. Particle Field (HeroScene1.vue)
- Animated particle system
- PACC brand colors
- Responsive to mouse movement
- Ambient + point lighting

#### 2. Wave Animation (HeroScene2.vue)
- Undulating geometry
- Gradient colors (navy → cyan)
- Smooth loop animation
- Directional lighting

#### 3. Abstract Shapes (HeroScene3.vue)
- Rotating geometric shapes
- Emissive materials
- Multiple light sources
- Interactive camera

### Using a Three.js Scene

```vue
<template>
  <section class="relative min-h-screen">
    <!-- Three.js Scene -->
    <HeroScene1 />
    
    <!-- Content overlay -->
    <div class="relative z-10">
      <h1>Your Hero Title</h1>
      <!-- Rest of hero content -->
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroScene1 from '@/src/mockups/scenes/HeroScene1.vue'
</script>
```

### Scene Requirements

All Three.js scenes must include:

1. **Proper cleanup** - Remove listeners and dispose geometries/materials on unmount
2. **Responsive sizing** - Handle window resize events
3. **Performance optimization** - Use requestAnimationFrame efficiently
4. **Brand colors** - Match PACC color palette
5. **Smooth animation** - 60fps target

---

## Carousel Implementation

### HTML/CSS Carousel

Use the `embla-carousel-vue` package (already installed):

```vue
<template>
  <div class="embla">
    <div class="embla__viewport" ref="emblaRef">
      <div class="embla__container">
        <div class="embla__slide" v-for="item in items" :key="item.id">
          <!-- Slide content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef] = emblaCarouselVue()
</script>
```

### Three.js 3D Carousel

For a 3D carousel in Three.js:

- Use `THREE.Group` for carousel container
- Position items in a circle
- Rotate group for carousel effect
- Add lerp for smooth transitions

---

## Content Guidelines

### Required Copy (DO NOT CHANGE)

#### Hero Section
- **Title:** "The bridge between molecule producers and customers"
- **Mission:** "Our mission is to become the trusted bridge between producers and customers of the energy transition—delivering scale, certainty, and value across dislocated markets."
- **Subtitle:** "Hydrogen & specialty gases • Logistics • Market‑making"

#### Approach Section
- **Title:** "Our Approach"
- **Description:** "We de‑risk production, aggregate demand, and create structured pathways for molecules."
- **Cards:**
  1. "De‑risk Production" - Commercial certainty via structured offtake, credit support, and long‑term agreements.
  2. "Aggregate Demand" - Create liquidity and price transparency; build scalable customer funnels.
  3. "Optimize Logistics" - Lower delivered costs through strategic infrastructure and route optimization.
  4. "Market Making" - Act as trusted intermediary connecting supply and demand.

#### Market Problem Section
- **Title:** "Market Problem"
- **Problems:**
  1. "Stranded Molecules" - Producers lack offtake certainty—limiting investment and scale.
  2. "Commercial Barriers" - Credit requirements, risk exposure, and illiquidity stall deals.
  3. "High Delivered Costs" - Fragmented supply, complex logistics, unreliable delivery.
  4. "No Market‑Maker" - Emerging markets lack a trusted intermediary to connect supply and demand.

#### Solution Section
- **Title:** "PACC Solution"
- **Description:** "PACC connects producers and customers, turning stranded molecules into scalable markets."
- **Solutions:**
  1. Unlock value for producers through commercial certainty
  2. De‑risk transactions as a trusted intermediary
  3. Lower delivered costs by aggregating volumes and optimizing logistics
  4. Create liquidity and price transparency in emerging molecules

#### Leadership Section
- **Title:** "Leadership Team"
- **Team Members:**
  1. **Andrew Carman** - CEO
     - Bio: (Full bio from existing site)
     - LinkedIn: https://www.linkedin.com/in/andrew-carman-mba-a086a5b
  2. **Patrick Charette** - CCO
     - Bio: (Full bio from existing site)
     - LinkedIn: https://www.linkedin.com/in/patrick-charette

#### Contact Section
- **Title:** "Get in Touch"
- **Description:** "Let's discuss offtake, logistics, or partnership opportunities."

### Images to Use

- **Logo:** `/src/assets/images/logo_full.png` or `/public/logo_full_cropped.png`
- **Andrew Carman:** `/src/assets/images/andrew.png`
- **Patrick Charette:** `/src/assets/images/image.png`
- **Bridge background:** `/src/assets/images/image45.png`
- **Golden Gate Bridge:** `/src/assets/images/golden_gate_bridge.jpg`

---

## Performance Requirements

### Build Performance
- Build time: < 2 seconds
- Bundle size: < 200KB (gzipped JS)

### Runtime Performance
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Three.js FPS: 60fps target

### Optimization Techniques

1. **Lazy Loading**
   ```typescript
   // Lazy load Three.js scenes
   const HeroScene = defineAsyncComponent(() => 
     import('./scenes/HeroScene1.vue')
   )
   ```

2. **Asset Optimization**
   - Compress images (WebP format preferred)
   - Minify geometries
   - Use instanced meshes for repeated objects

3. **Code Splitting**
   - Split demos into separate chunks
   - Load scenes on demand

---

## Examples

### Example 1: Standard Demo Page

```vue
<!-- /src/mockups/demo1/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PACC Demo 1 - Standard Layout</title>
  <link rel="icon" type="image/png" href="/logo_full_cropped.png">
  <script type="module" src="./main.ts"></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

```vue
<!-- /src/mockups/demo1/App.vue -->
<template>
  <DemoLayout>
    <HeroScene1 />
    <ApproachSection />
    <MarketProblemSection />
    <LeadershipSection />
    <ContactSection />
  </DemoLayout>
</template>

<script setup lang="ts">
import DemoLayout from '@/src/mockups/shared/DemoLayout.vue'
import HeroScene1 from '@/src/mockups/scenes/HeroScene1.vue'
import ApproachSection from '@/components/sections/ApproachSection.vue'
import MarketProblemSection from '@/components/sections/MarketProblemSection.vue'
import LeadershipSection from '@/components/sections/LeadershipSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>
```

### Example 2: Carousel Demo

```vue
<!-- /src/mockups/demo2/App.vue -->
<template>
  <DemoLayout>
    <HeroScene2 />
    
    <!-- Approach Section with Carousel -->
    <section id="approach" class="py-20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold mb-8">Our Approach</h2>
        
        <!-- Approach Carousel -->
        <div class="embla">
          <div class="embla__viewport" ref="emblaRef">
            <div class="embla__container">
              <div class="embla__slide" v-for="approach in approaches" :key="approach.title">
                <ApproachCard :title="approach.title" :description="approach.description" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <MarketProblemSection />
    <LeadershipSection />
    <ContactSection />
  </DemoLayout>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import DemoLayout from '@/src/mockups/shared/DemoLayout.vue'
import HeroScene2 from '@/src/mockups/scenes/HeroScene2.vue'
import ApproachCard from '@/components/ui/ApproachCard.vue'
import MarketProblemSection from '@/components/sections/MarketProblemSection.vue'
import LeadershipSection from '@/components/sections/LeadershipSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const [emblaRef] = emblaCarouselVue()

const approaches = [
  {
    title: 'De‑risk Production',
    description: 'Commercial certainty via structured offtake, credit support, and long‑term agreements.',
  },
  {
    title: 'Aggregate Demand',
    description: 'Create liquidity and price transparency; build scalable customer funnels.',
  },
  {
    title: 'Optimize Logistics',
    description: 'Lower delivered costs through strategic infrastructure and route optimization.',
  },
  {
    title: 'Market Making',
    description: 'Act as trusted intermediary connecting supply and demand.',
  },
]
</script>
```

---

## Testing Checklist

Before submitting a demo, verify:

- [ ] All required sections present
- [ ] All copy matches original site
- [ ] Navigation links work
- [ ] Anchor scrolling smooth
- [ ] Mobile responsive (test 375px, 768px, 1024px, 1440px)
- [ ] Three.js scene loads and animates
- [ ] No console errors
- [ ] Images load correctly
- [ ] Build completes successfully
- [ ] Page loads in < 2 seconds
- [ ] 60fps animation

---

## Common Pitfalls

### ❌ Don't Do This:
- Change marketing copy
- Remove sections
- Skip mobile testing
- Use non-brand colors
- Forget cleanup in Three.js scenes
- Block main thread with heavy computation

### ✅ Do This:
- Preserve all content exactly
- Test all breakpoints
- Use brand colors consistently
- Clean up Three.js resources
- Use requestAnimationFrame for animations
- Lazy load heavy components

---

## Support

For questions or issues:
1. Check this guide first
2. Review existing demo templates
3. Check component source code in `/src/components/`
4. Review Three.js scene examples in `/src/mockups/scenes/`

---

## Version History

- **v1.0** (Dec 2025) - Initial guide creation

---

**Remember:** The goal is to create visually compelling demos that showcase different design approaches while maintaining 100% content fidelity to the original PACC website.

<template>
  <DemoLayout>
    <DemoHeroSection :scene-component="HeroScene3" :show-impact-card="false" />
    
    <!-- Alternative Approach Section -->
    <section
      id="approach"
      class="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent mb-4">
            Our Approach
          </h2>
          <p class="mt-4 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We de‑risk production, aggregate demand, and create structured pathways for molecules.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(approach, index) in approaches"
            :key="approach.title"
            class="group relative p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div class="absolute top-4 right-4 text-6xl font-black text-brand/10 group-hover:text-brand/20 transition-colors">
              {{ index + 1 }}
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3 relative z-10">
              {{ approach.title }}
            </h3>
            <p class="text-slate-600 leading-relaxed relative z-10">
              {{ approach.description }}
            </p>
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-brand-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
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
import { defineAsyncComponent } from 'vue'
import DemoLayout from '@/mockups/shared/DemoLayout.vue'
import DemoHeroSection from '@/mockups/shared/DemoHeroSection.vue'
import MarketProblemSection from '@/components/sections/MarketProblemSection.vue'
import LeadershipSection from '@/components/sections/LeadershipSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

// Lazy load Three.js scene
const HeroScene3 = defineAsyncComponent(() => import('@/mockups/scenes/HeroScene3.vue'))

const approaches = [
  {
    title: 'De‑risk Production',
    description:
      'Commercial certainty via structured offtake, credit support, and long‑term agreements.',
  },
  {
    title: 'Aggregate Demand',
    description: 'Create liquidity and price transparency; build scalable customer funnels.',
  },
  {
    title: 'Optimize Logistics',
    description:
      'Lower delivered costs through strategic infrastructure and route optimization.',
  },
  {
    title: 'Market Making',
    description: 'Act as trusted intermediary connecting supply and demand.',
  },
]
</script>

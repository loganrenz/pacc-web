<template>
  <DemoLayout>
    <DemoHeroSection :scene-component="HeroScene2" />
    
    <!-- Approach Section with Carousel -->
    <section
      id="approach"
      class="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent mb-2">
            Our Approach
          </h2>
          <p class="mt-4 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We de‑risk production, aggregate demand, and create structured pathways for molecules.
          </p>
        </div>
        
        <!-- Approach Carousel -->
        <div class="embla overflow-hidden" ref="emblaRef">
          <div class="embla__container flex">
            <div
              v-for="approach in approaches"
              :key="approach.title"
              class="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
            >
              <ApproachCard
                :title="approach.title"
                :description="approach.description"
                class="h-full"
              />
            </div>
          </div>
        </div>

        <!-- Carousel Controls -->
        <div class="flex justify-center gap-4 mt-8">
          <button
            @click="scrollPrev"
            class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors"
          >
            ← Previous
          </button>
          <button
            @click="scrollNext"
            class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors"
          >
            Next →
          </button>
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
import emblaCarouselVue from 'embla-carousel-vue'
import DemoLayout from '@/mockups/shared/DemoLayout.vue'
import DemoHeroSection from '@/mockups/shared/DemoHeroSection.vue'
import ApproachCard from '@/components/ui/ApproachCard.vue'
import MarketProblemSection from '@/components/sections/MarketProblemSection.vue'
import LeadershipSection from '@/components/sections/LeadershipSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

// Lazy load Three.js scene
const HeroScene2 = defineAsyncComponent(() => import('@/mockups/scenes/HeroScene2.vue'))

// Carousel setup
const [emblaRef, emblaApi] = emblaCarouselVue()

const scrollPrev = () => emblaApi.value?.scrollPrev()
const scrollNext = () => emblaApi.value?.scrollNext()

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

<style scoped>
.embla {
  position: relative;
}

.embla__container {
  backface-visibility: hidden;
  touch-action: pan-y;
}

.embla__slide {
  transform: translate3d(0, 0, 0);
}
</style>

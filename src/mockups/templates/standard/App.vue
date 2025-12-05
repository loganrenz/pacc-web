<template>
  <DemoLayout>
    <DemoHeroSection :scene-component="HeroScene1" />
    <ApproachSection />
    <MarketProblemSection />
    <LeadershipSection />
    <ContactSection />
  </DemoLayout>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import DemoLayout from '@/mockups/shared/DemoLayout.vue'
import DemoHeroSection from '@/mockups/shared/DemoHeroSection.vue'
import ApproachSection from '@/components/sections/ApproachSection.vue'
import MarketProblemSection from '@/components/sections/MarketProblemSection.vue'
import LeadershipSection from '@/components/sections/LeadershipSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

// Lazy load Three.js scene for better performance
const HeroScene1 = defineAsyncComponent(() => import('@/mockups/scenes/HeroScene1.vue'))
</script>

<template>
  <section class="relative isolate overflow-hidden min-h-screen flex items-center">
    <!-- Three.js Scene Background -->
    <component :is="sceneComponent" v-if="sceneComponent" />
    
    <!-- Dark overlay for readability -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-brand/40 to-transparent"></div>

    <!-- Hero Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full z-10">
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div class="space-y-6">
          <h1 class="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white drop-shadow-lg">
            The bridge between molecule producers and customers
          </h1>
          <p id="mission" class="hero-text text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 drop-shadow">
            Our mission is to become the trusted bridge between producers and customers of the energy transition—delivering scale, certainty, and value across dislocated markets.
          </p>
          <div class="hero-buttons flex flex-wrap gap-4">
            <BaseButton
              href="#contact"
              variant="primary"
              class="transform hover:scale-110 transition-all duration-300"
            >
              Talk to Us
            </BaseButton>
            <BaseButton
              href="#approach"
              variant="secondary"
              class="transform hover:scale-110 transition-all duration-300"
            >
              How We Work
            </BaseButton>
          </div>
          <div class="hero-subtitle text-sm text-white/70">
            Hydrogen & specialty gases • Logistics • Market‑making
          </div>
        </div>
        <div class="lg:pl-8 hero-card" v-if="showImpactCard">
          <ImpactCard class="hover-glow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ImpactCard from '@/components/ui/ImpactCard.vue'

interface Props {
  sceneComponent?: Component
  showImpactCard?: boolean
}

withDefaults(defineProps<Props>(), {
  sceneComponent: undefined,
  showImpactCard: true,
})
</script>

<style scoped>
.hover-glow {
  transition: all 0.3s ease;
}

.hover-glow:hover {
  filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.5));
}
</style>

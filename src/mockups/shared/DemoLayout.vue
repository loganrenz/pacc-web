<template>
  <div class="demo-layout">
    <DemoNav />
    <main>
      <slot />
    </main>
    <DemoFooter />
  </div>
</template>

<script setup lang="ts">
import DemoNav from './DemoNav.vue'
import DemoFooter from './DemoFooter.vue'
</script>

<style scoped>
.demo-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>

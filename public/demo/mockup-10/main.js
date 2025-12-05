import { mountVisualization } from '../shared/visualization-library.js'

let cleanupHero

function initHero() {
  const container = document.querySelector('#hero-canvas')
  if (!container) return
  cleanupHero = mountVisualization('glow-grid', container)
}

function onReady() {
  initHero()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onReady)
} else {
  onReady()
}

window.addEventListener('beforeunload', () => {
  if (cleanupHero) cleanupHero()
})

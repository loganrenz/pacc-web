import { mountVisualization } from '../shared/visualization-library.js'

let cleanupHero

function initHero() {
  const container = document.querySelector('#hero-canvas')
  if (container) {
    cleanupHero = mountVisualization('ribbon-galaxy', container)
  }
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

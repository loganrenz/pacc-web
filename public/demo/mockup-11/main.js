import { mountVisualization } from '../shared/visualization-library.js'

let cleanupHero
let currentSlide = 0

function initHero() {
  const container = document.getElementById('hero-canvas')
  if (container) {
    cleanupHero = mountVisualization('luminous-waves', container)
  }
}

function renderDots(dots, total) {
  dots.innerHTML = ''
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button')
    dot.className = i === currentSlide ? 'active' : ''
    dot.addEventListener('click', () => updateCarousel(i))
    dots.appendChild(dot)
  }
}

function updateCarousel(nextIndex) {
  const track = document.querySelector('.carousel-track')
  const dots = document.querySelector('.dots')
  if (!track || !dots) return
  const total = track.children.length
  currentSlide = (nextIndex + total) % total
  track.style.transform = `translateX(-${currentSlide * 100}%)`
  renderDots(dots, total)
}

function initCarousel() {
  const track = document.querySelector('.carousel-track')
  const dots = document.querySelector('.dots')
  const prev = document.querySelector('.carousel-btn[data-dir="prev"]')
  const next = document.querySelector('.carousel-btn[data-dir="next"]')
  if (!track || !dots || !prev || !next) return

  renderDots(dots, track.children.length)
  prev.addEventListener('click', () => updateCarousel(currentSlide - 1))
  next.addEventListener('click', () => updateCarousel(currentSlide + 1))
}

function onReady() {
  initHero()
  initCarousel()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onReady)
} else {
  onReady()
}

window.addEventListener('beforeunload', () => {
  if (cleanupHero) cleanupHero()
})

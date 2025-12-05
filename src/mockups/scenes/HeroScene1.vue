<template>
  <div ref="containerRef" class="absolute inset-0 w-full h-full"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let particles: THREE.Points
let animationFrameId: number

onMounted(() => {
  if (!containerRef.value) return

  // Scene setup
  scene = new THREE.Scene()

  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 50

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  // Particle system
  const particleCount = 2000
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  // PACC brand colors
  const brandColors = [
    new THREE.Color(0x0f172a), // navy
    new THREE.Color(0x10b981), // green
    new THREE.Color(0x06b6d4), // cyan
    new THREE.Color(0xffffff), // white
  ]

  for (let i = 0; i < particleCount * 3; i += 3) {
    // Position
    positions[i] = (Math.random() - 0.5) * 100
    positions[i + 1] = (Math.random() - 0.5) * 100
    positions[i + 2] = (Math.random() - 0.5) * 100

    // Color
    const color = brandColors[Math.floor(Math.random() * brandColors.length)]
    colors[i] = color.r
    colors[i + 1] = color.g
    colors[i + 2] = color.b
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0x10b981, 1, 100)
  pointLight.position.set(10, 10, 10)
  scene.add(pointLight)

  const pointLight2 = new THREE.PointLight(0x06b6d4, 1, 100)
  pointLight2.position.set(-10, -10, 10)
  scene.add(pointLight2)

  // Animation loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)

    // Rotate particles
    particles.rotation.x += 0.0005
    particles.rotation.y += 0.001

    // Animate particle positions
    const positions = particles.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01
    }
    particles.geometry.attributes.position.needsUpdate = true

    renderer.render(scene, camera)
  }

  animate()

  // Handle window resize
  const handleResize = () => {
    if (!containerRef.value) return

    camera.aspect = containerRef.value.clientWidth / containerRef.value.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  }

  window.addEventListener('resize', handleResize)

  // Cleanup function
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    if (containerRef.value && renderer.domElement) {
      containerRef.value.removeChild(renderer.domElement)
    }
    geometry.dispose()
    material.dispose()
    renderer.dispose()
  })
})

onUnmounted(() => {
  // Additional cleanup handled in mount cleanup function
})
</script>

<style scoped>
div {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>

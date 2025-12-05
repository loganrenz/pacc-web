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
let waveMesh: THREE.Mesh
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
  camera.position.set(0, 5, 20)
  camera.lookAt(0, 0, 0)

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  // Wave geometry
  const geometry = new THREE.PlaneGeometry(80, 80, 100, 100)
  
  // Gradient material with PACC colors
  const material = new THREE.MeshStandardMaterial({
    color: 0x06b6d4,
    emissive: 0x10b981,
    emissiveIntensity: 0.3,
    metalness: 0.5,
    roughness: 0.5,
    wireframe: false,
    side: THREE.DoubleSide,
  })

  waveMesh = new THREE.Mesh(geometry, material)
  waveMesh.rotation.x = -Math.PI / 3
  scene.add(waveMesh)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 10, 5)
  scene.add(directionalLight)

  const pointLight1 = new THREE.PointLight(0x10b981, 1.5, 50)
  pointLight1.position.set(10, 5, 10)
  scene.add(pointLight1)

  const pointLight2 = new THREE.PointLight(0x06b6d4, 1.5, 50)
  pointLight2.position.set(-10, 5, 10)
  scene.add(pointLight2)

  // Store original positions
  const positions = geometry.attributes.position.array as Float32Array
  const originalPositions = Float32Array.from(positions)

  // Animation loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)

    const time = Date.now() * 0.001

    // Animate wave
    const positions = waveMesh.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i]
      const y = originalPositions[i + 1]
      
      // Create wave effect
      positions[i + 2] =
        Math.sin(x * 0.3 + time) * 2 +
        Math.cos(y * 0.3 + time * 1.3) * 2 +
        Math.sin((x + y) * 0.1 + time * 0.5) * 1
    }
    waveMesh.geometry.attributes.position.needsUpdate = true
    waveMesh.geometry.computeVertexNormals()

    // Rotate mesh slightly
    waveMesh.rotation.z = Math.sin(time * 0.2) * 0.1

    // Animate lights
    pointLight1.position.x = Math.sin(time * 0.5) * 15
    pointLight1.position.z = Math.cos(time * 0.5) * 15
    
    pointLight2.position.x = Math.cos(time * 0.7) * 15
    pointLight2.position.z = Math.sin(time * 0.7) * 15

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
</script>

<style scoped>
div {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>

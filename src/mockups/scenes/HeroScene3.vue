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
let shapes: THREE.Mesh[] = []
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
  camera.position.z = 30

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  // Create multiple geometric shapes
  const geometries = [
    new THREE.TorusGeometry(3, 1, 16, 100),
    new THREE.OctahedronGeometry(4),
    new THREE.IcosahedronGeometry(3),
    new THREE.TorusKnotGeometry(2, 0.5, 100, 16),
  ]

  const colors = [0x0f172a, 0x10b981, 0x06b6d4, 0xffffff]

  geometries.forEach((geometry, index) => {
    const material = new THREE.MeshStandardMaterial({
      color: colors[index],
      emissive: colors[index],
      emissiveIntensity: 0.4,
      metalness: 0.7,
      roughness: 0.3,
      wireframe: false,
    })

    const mesh = new THREE.Mesh(geometry, material)
    
    // Position shapes in a circular pattern
    const angle = (index / geometries.length) * Math.PI * 2
    mesh.position.x = Math.cos(angle) * 12
    mesh.position.y = Math.sin(angle) * 8
    mesh.position.z = -5
    
    shapes.push(mesh)
    scene.add(mesh)
  })

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  // Multiple colored point lights
  const lights = [
    { color: 0x10b981, position: { x: 10, y: 10, z: 10 } },
    { color: 0x06b6d4, position: { x: -10, y: 10, z: 10 } },
    { color: 0xffffff, position: { x: 0, y: -10, z: 10 } },
  ]

  lights.forEach(({ color, position }) => {
    const light = new THREE.PointLight(color, 1.5, 100)
    light.position.set(position.x, position.y, position.z)
    scene.add(light)
  })

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(0, 0, 10)
  scene.add(directionalLight)

  // Animation loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)

    const time = Date.now() * 0.001

    // Animate each shape
    shapes.forEach((shape, index) => {
      // Rotate shapes
      shape.rotation.x += 0.01 * (index + 1) * 0.5
      shape.rotation.y += 0.01 * (index + 1) * 0.7
      
      // Orbit shapes
      const angle = (index / shapes.length) * Math.PI * 2 + time * 0.3
      shape.position.x = Math.cos(angle) * 12
      shape.position.y = Math.sin(angle) * 8
      
      // Pulse size
      const scale = 1 + Math.sin(time * 2 + index) * 0.1
      shape.scale.set(scale, scale, scale)
    })

    // Rotate camera slightly
    camera.position.x = Math.sin(time * 0.2) * 2
    camera.position.y = Math.cos(time * 0.3) * 2
    camera.lookAt(0, 0, 0)

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
    
    // Dispose all geometries and materials
    shapes.forEach((shape) => {
      shape.geometry.dispose()
      ;(shape.material as THREE.Material).dispose()
    })
    
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

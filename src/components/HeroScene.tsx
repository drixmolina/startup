import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100)
    camera.position.z = 7

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" })
    } catch {
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    const geometry = new THREE.IcosahedronGeometry(1.65, 2)
    const material = new THREE.MeshBasicMaterial({ color: 0x8de8d0, wireframe: true, transparent: true, opacity: 0.78 })
    const mesh = new THREE.Mesh(geometry, material)
    group.add(mesh)

    const points = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xffc857, size: 0.035, transparent: true, opacity: 0.8 }))
    group.add(points)
    scene.add(group)

    const starsGeometry = new THREE.BufferGeometry()
    const stars = new Float32Array(180 * 3)
    for (let index = 0; index < stars.length; index += 3) {
      stars[index] = (Math.random() - 0.5) * 9
      stars[index + 1] = (Math.random() - 0.5) * 6
      stars[index + 2] = (Math.random() - 0.5) * 4
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(stars, 3))
    const starField = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: 0xffffff, size: 0.018, transparent: true, opacity: 0.48 }))
    scene.add(starField)

    const pointer = new THREE.Vector2()
    const target = new THREE.Vector2()
    const onPointerMove = (event: PointerEvent) => {
      const bounds = mount.getBoundingClientRect()
      target.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
      target.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    }
    mount.addEventListener("pointermove", onPointerMove)

    const resize = () => {
      const width = mount.clientWidth
      const height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(mount)

    let animationFrame = 0
    const animate = (time: number) => {
      pointer.lerp(target, 0.045)
      group.rotation.y = (reducedMotion ? 0.2 : time * 0.00016) + pointer.x * 0.18
      group.rotation.x = pointer.y * 0.12
      starField.rotation.y = pointer.x * 0.05
      renderer.render(scene, camera)
      if (!reducedMotion) animationFrame = requestAnimationFrame(animate)
    }
    animate(0)

    return () => {
      cancelAnimationFrame(animationFrame)
      observer.disconnect()
      mount.removeEventListener("pointermove", onPointerMove)
      geometry.dispose()
      material.dispose()
      starsGeometry.dispose()
      ;(starField.material as THREE.PointsMaterial).dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div className="hero-scene" ref={mountRef} aria-hidden="true"><div className="hero-scene-fallback" /></div>
}

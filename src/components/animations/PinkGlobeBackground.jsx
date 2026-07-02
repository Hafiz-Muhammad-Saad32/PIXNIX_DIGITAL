import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Pink themed rotating globe, rendered as a fixed background
// that stays visible across the whole page while scrolling.
const PinkGlobeBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    camera.position.z = 6.5

    const group = new THREE.Group()
    scene.add(group)

    const radius = 2.2

    // Wireframe sphere -> pink
    const wireGeo = new THREE.SphereGeometry(radius, 28, 18)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xff4fa3,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    })
    group.add(new THREE.Mesh(wireGeo, wireMat))

    // Core sphere -> dark, semi transparent (keeps globe readable)
    const coreGeo = new THREE.SphereGeometry(radius * 0.985, 32, 32)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0a0510,
      transparent: true,
      opacity: 0.85
    })
    group.add(new THREE.Mesh(coreGeo, coreMat))

    // Surface dots -> light pink
    const dotCount = 260
    const dotPositions = []
    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotCount)
      const theta = Math.sqrt(dotCount * Math.PI) * phi
      dotPositions.push(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      )
    }
    const dotGeo = new THREE.BufferGeometry()
    dotGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(dotPositions, 3)
    )
    const dotMat = new THREE.PointsMaterial({
      color: 0xffb6d9,
      size: 0.045,
      transparent: true,
      opacity: 0.9
    })
    group.add(new THREE.Points(dotGeo, dotMat))

    // Connection arcs -> magenta/pink
    const arcGroup = new THREE.Group()
    for (let i = 0; i < 14; i++) {
      const i1 = Math.floor(Math.random() * dotCount)
      const i2 = Math.floor(Math.random() * dotCount)
      const p1 = new THREE.Vector3(
        dotPositions[i1 * 3],
        dotPositions[i1 * 3 + 1],
        dotPositions[i1 * 3 + 2]
      )
      const p2 = new THREE.Vector3(
        dotPositions[i2 * 3],
        dotPositions[i2 * 3 + 1],
        dotPositions[i2 * 3 + 2]
      )
      const mid = p1
        .clone()
        .add(p2)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(radius * 1.35)
      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2)
      const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(24))
      const mat = new THREE.LineBasicMaterial({
        color: 0xec4899,
        transparent: true,
        opacity: 0.45
      })
      arcGroup.add(new THREE.Line(geo, mat))
    }
    group.add(arcGroup)

    scene.add(new THREE.AmbientLight(0xffffff, 0.4))

    let rafId
    let rotVelY = 0.0018

    const resize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      group.rotation.y += rotVelY
      renderer.render(scene, camera)
    }

    window.addEventListener('resize', resize)
    resize()
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      dotGeo.dispose()
      wireGeo.dispose()
      coreGeo.dispose()
      wireMat.dispose()
      coreMat.dispose()
      dotMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen z-10 pointer-events-none"
    />
  )
}

export default PinkGlobeBackground

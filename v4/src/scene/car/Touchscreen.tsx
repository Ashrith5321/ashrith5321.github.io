import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Touchscreen() {
  const screenRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.PointLight>(null)
  const linesGroupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime

    // Pulsing screen glow
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial
      const pulse = 0.8 + Math.sin(t * 2) * 0.2
      material.emissiveIntensity = pulse
    }

    // Pulsing light intensity
    if (glowRef.current) {
      glowRef.current.intensity = 0.8 + Math.sin(t * 2) * 0.3
    }

    // Animate horizontal scan lines
    if (linesGroupRef.current) {
      linesGroupRef.current.children.forEach((line, i) => {
        const mesh = line as THREE.Mesh
        const mat = mesh.material as THREE.MeshStandardMaterial
        const offset = i * 0.7
        const alpha = 0.3 + Math.sin(t * 1.5 + offset) * 0.3
        mat.opacity = alpha
      })
    }
  })

  return (
    <group position={[0.1, 1.0, 1.65]}>
      {/* Screen bezel / housing */}
      <mesh>
        <boxGeometry args={[0.30, 0.42, 0.02]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.5} metalness={0.3} />
      </mesh>

      {/* Screen face */}
      <mesh ref={screenRef} position={[0, 0, 0.011]}>
        <planeGeometry args={[0.26, 0.38]} />
        <meshStandardMaterial
          color="#0a1628"
          emissive="#1e90ff"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>

      {/* Animated horizontal scan lines */}
      <group ref={linesGroupRef} position={[0, 0, 0.013]}>
        {[-0.12, -0.06, 0.0, 0.06, 0.12].map((yPos, i) => (
          <mesh key={i} position={[0, yPos, 0]}>
            <planeGeometry args={[0.22, 0.008]} />
            <meshStandardMaterial
              color="#1e90ff"
              emissive="#1e90ff"
              emissiveIntensity={1.5}
              transparent
              opacity={0.4}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>

      {/* UI elements on screen — simulated app grid */}
      <group position={[0, 0.08, 0.013]}>
        {[
          [-0.07, 0.04], [0.0, 0.04], [0.07, 0.04],
          [-0.07, -0.04], [0.0, -0.04], [0.07, -0.04],
        ].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0]}>
            <planeGeometry args={[0.05, 0.05]} />
            <meshStandardMaterial
              color="#112244"
              emissive="#1e90ff"
              emissiveIntensity={0.3}
              transparent
              opacity={0.5}
            />
          </mesh>
        ))}
      </group>

      {/* Bottom nav bar */}
      <mesh position={[0, -0.16, 0.013]}>
        <planeGeometry args={[0.22, 0.025]} />
        <meshStandardMaterial
          color="#0d2040"
          emissive="#1e90ff"
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Screen glow light */}
      <pointLight
        ref={glowRef}
        position={[0, 0, 0.15]}
        color="#1e90ff"
        intensity={1}
        distance={2}
        decay={2}
      />

      {/* Bezel edge highlight — top */}
      <mesh position={[0, 0.205, 0.005]}>
        <boxGeometry args={[0.28, 0.005, 0.015]} />
        <meshStandardMaterial color="#222222" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Bezel edge highlight — bottom */}
      <mesh position={[0, -0.205, 0.005]}>
        <boxGeometry args={[0.28, 0.005, 0.015]} />
        <meshStandardMaterial color="#222222" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  )
}

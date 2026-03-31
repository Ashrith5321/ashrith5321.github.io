import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Glovebox() {
  const panelRef = useRef<THREE.Mesh>(null)
  const hovered = useRef(false)

  useFrame(() => {
    if (panelRef.current) {
      // Subtle forward movement on hover (driven externally via InteractableObject,
      // but we add a gentle breathing animation here)
      const target = hovered.current ? 0.005 : 0
      const current = panelRef.current.position.z
      panelRef.current.position.z += (target - current) * 0.1
    }
  })

  return (
    <group position={[0.55, 0.75, 1.7]}>
      {/* Main glovebox panel */}
      <mesh ref={panelRef}>
        <boxGeometry args={[0.28, 0.14, 0.015]} />
        <meshStandardMaterial
          color="#252525"
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* Seam line — top */}
      <mesh position={[0, 0.072, 0.008]}>
        <boxGeometry args={[0.285, 0.002, 0.002]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
      </mesh>

      {/* Seam line — bottom */}
      <mesh position={[0, -0.072, 0.008]}>
        <boxGeometry args={[0.285, 0.002, 0.002]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
      </mesh>

      {/* Seam line — left */}
      <mesh position={[-0.142, 0, 0.008]}>
        <boxGeometry args={[0.002, 0.146, 0.002]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
      </mesh>

      {/* Seam line — right */}
      <mesh position={[0.142, 0, 0.008]}>
        <boxGeometry args={[0.002, 0.146, 0.002]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
      </mesh>

      {/* Release button */}
      <mesh position={[0.10, -0.05, 0.009]}>
        <boxGeometry args={[0.03, 0.015, 0.005]} />
        <meshStandardMaterial
          color="#333333"
          roughness={0.4}
          metalness={0.5}
        />
      </mesh>
    </group>
  )
}

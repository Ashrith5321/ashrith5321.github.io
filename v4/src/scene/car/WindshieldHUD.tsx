import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function WindshieldHUD() {
  const hudGroupRef = useRef<THREE.Group>(null)

  // Subtle flicker/pulse on HUD elements
  useFrame((state) => {
    if (hudGroupRef.current) {
      const t = state.clock.elapsedTime
      hudGroupRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh
        if (mesh.material && 'opacity' in mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial
          mat.opacity = 0.3 + Math.sin(t * 1.2 + i * 0.5) * 0.1
        }
      })
    }
  })

  const hudColor = '#00ff88'

  return (
    <group position={[0, 1.2, 1.9]} rotation={[-0.45, 0, 0]}>
      <group ref={hudGroupRef}>
        {/* Speed readout — large horizontal bar */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.12, 0.004, 0.001]} />
          <meshStandardMaterial
            color={hudColor}
            emissive={hudColor}
            emissiveIntensity={2}
            transparent
            opacity={0.35}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Speed digits — simulated with small boxes */}
        {/* Digit "6" */}
        <mesh position={[-0.02, 0.02, 0]}>
          <boxGeometry args={[0.015, 0.025, 0.001]} />
          <meshStandardMaterial
            color={hudColor}
            emissive={hudColor}
            emissiveIntensity={2.5}
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Digit "5" */}
        <mesh position={[0.005, 0.02, 0]}>
          <boxGeometry args={[0.015, 0.025, 0.001]} />
          <meshStandardMaterial
            color={hudColor}
            emissive={hudColor}
            emissiveIntensity={2.5}
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* "mph" label */}
        <mesh position={[0.03, 0.015, 0]}>
          <boxGeometry args={[0.02, 0.008, 0.001]} />
          <meshStandardMaterial
            color={hudColor}
            emissive={hudColor}
            emissiveIntensity={1.5}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Navigation arrow */}
        <mesh position={[-0.06, 0.02, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.012, 0.004, 0.001]} />
          <meshStandardMaterial
            color={hudColor}
            emissive={hudColor}
            emissiveIntensity={2}
            transparent
            opacity={0.35}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Top info bar */}
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.16, 0.003, 0.001]} />
          <meshStandardMaterial
            color={hudColor}
            emissive={hudColor}
            emissiveIntensity={1.5}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Bottom info bar */}
        <mesh position={[0, -0.01, 0]}>
          <boxGeometry args={[0.10, 0.003, 0.001]} />
          <meshStandardMaterial
            color={hudColor}
            emissive={hudColor}
            emissiveIntensity={1.5}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </group>
  )
}

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function SunVisor() {
  const visorRef = useRef<THREE.Group>(null)

  // Gentle subtle sway animation
  useFrame((state) => {
    if (visorRef.current) {
      const t = state.clock.elapsedTime
      visorRef.current.rotation.x = Math.sin(t * 0.5) * 0.01
    }
  })

  return (
    <group position={[-0.35, 1.35, 1.65]}>
      {/* Hinge mount point (attached to headliner) */}
      <mesh position={[0, 0.065, -0.01]}>
        <boxGeometry args={[0.04, 0.012, 0.02]} />
        <meshStandardMaterial
          color="#555555"
          roughness={0.6}
          metalness={0.3}
        />
      </mesh>

      {/* Hinge pin */}
      <mesh position={[0, 0.06, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.004, 0.004, 0.06, 8]} />
        <meshStandardMaterial
          color="#888888"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      <group ref={visorRef}>
        {/* Visor body — fabric-covered panel */}
        <mesh>
          <boxGeometry args={[0.25, 0.12, 0.008]} />
          <meshStandardMaterial
            color="#666666"
            roughness={0.9}
            metalness={0.0}
          />
        </mesh>

        {/* Vanity mirror on inner face */}
        <mesh position={[0, 0, -0.005]}>
          <planeGeometry args={[0.16, 0.07]} />
          <meshStandardMaterial
            color="#aabbcc"
            roughness={0.1}
            metalness={1.0}
          />
        </mesh>

        {/* Mirror frame */}
        <mesh position={[0, 0, -0.0045]}>
          <boxGeometry args={[0.17, 0.08, 0.002]} />
          <meshStandardMaterial
            color="#444444"
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>

        {/* Mirror cover slide (decorative) */}
        <mesh position={[0, 0.045, -0.005]}>
          <boxGeometry args={[0.17, 0.008, 0.003]} />
          <meshStandardMaterial
            color="#555555"
            roughness={0.7}
            metalness={0.2}
          />
        </mesh>

        {/* Visor clip (holds it against headliner when up) */}
        <mesh position={[0.08, 0.062, 0]}>
          <boxGeometry args={[0.02, 0.008, 0.012]} />
          <meshStandardMaterial
            color="#777777"
            roughness={0.4}
            metalness={0.5}
          />
        </mesh>
      </group>
    </group>
  )
}

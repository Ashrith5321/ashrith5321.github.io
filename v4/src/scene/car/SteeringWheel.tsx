import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function SteeringWheel() {
  const groupRef = useRef<THREE.Group>(null)

  // Subtle idle oscillation
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime
      groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.02
    }
  })

  const spokeLength = 0.12
  const spokeRadius = 0.008

  return (
    <group position={[-0.45, 0.95, 1.55]} rotation={[-0.35, 0, 0]}>
      <group ref={groupRef}>
        {/* Main steering ring */}
        <mesh>
          <torusGeometry args={[0.16, 0.015, 16, 48]} />
          <meshStandardMaterial
            color="#1a1a1a"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>

        {/* Center hub */}
        <mesh>
          <cylinderGeometry args={[0.05, 0.05, 0.018, 24]} />
          <meshStandardMaterial
            color="#111111"
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>

        {/* Hub cap — flat face with subtle logo area */}
        <mesh position={[0, 0.01, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.004, 24]} />
          <meshStandardMaterial
            color="#1a1a1a"
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>

        {/* Logo indicator — small T shape */}
        <mesh position={[0, 0.013, 0]}>
          <boxGeometry args={[0.02, 0.002, 0.003]} />
          <meshStandardMaterial
            color="#cccccc"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[0, 0.013, -0.005]}>
          <boxGeometry args={[0.003, 0.002, 0.012]} />
          <meshStandardMaterial
            color="#cccccc"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Left horizontal spoke */}
        <mesh position={[-spokeLength / 2 - 0.04, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[spokeRadius, spokeRadius, spokeLength, 8]} />
          <meshStandardMaterial
            color="#1a1a1a"
            roughness={0.7}
            metalness={0.2}
          />
        </mesh>

        {/* Right horizontal spoke */}
        <mesh position={[spokeLength / 2 + 0.04, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[spokeRadius, spokeRadius, spokeLength, 8]} />
          <meshStandardMaterial
            color="#1a1a1a"
            roughness={0.7}
            metalness={0.2}
          />
        </mesh>

        {/* Bottom spoke (thicker, structural) */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.02, 0.01, 0.14]} />
          <meshStandardMaterial
            color="#1a1a1a"
            roughness={0.7}
            metalness={0.2}
          />
        </mesh>

        {/* Left scroll wheel */}
        <mesh position={[-0.10, 0.012, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.01, 0.01, 0.02, 12]} />
          <meshStandardMaterial
            color="#2a2a2a"
            roughness={0.5}
            metalness={0.4}
          />
        </mesh>

        {/* Left scroll wheel grip ridges */}
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={`left-ridge-${i}`}
            position={[-0.10, 0.012, -0.008 + i * 0.005]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.011, 0.011, 0.002, 12]} />
            <meshStandardMaterial color="#333333" roughness={0.9} />
          </mesh>
        ))}

        {/* Right scroll wheel */}
        <mesh position={[0.10, 0.012, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.01, 0.01, 0.02, 12]} />
          <meshStandardMaterial
            color="#2a2a2a"
            roughness={0.5}
            metalness={0.4}
          />
        </mesh>

        {/* Right scroll wheel grip ridges */}
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={`right-ridge-${i}`}
            position={[0.10, 0.012, -0.008 + i * 0.005]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.011, 0.011, 0.002, 12]} />
            <meshStandardMaterial color="#333333" roughness={0.9} />
          </mesh>
        ))}

        {/* Steering column */}
        <mesh position={[0, -0.02, -0.18]} rotation={[0.3, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.035, 0.25, 16]} />
          <meshStandardMaterial
            color="#1a1a1a"
            roughness={0.6}
            metalness={0.3}
          />
        </mesh>

        {/* Column shroud (wider base) */}
        <mesh position={[0, -0.05, -0.30]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[0.12, 0.06, 0.10]} />
          <meshStandardMaterial
            color="#1a1a1a"
            roughness={0.7}
            metalness={0.2}
          />
        </mesh>
      </group>
    </group>
  )
}

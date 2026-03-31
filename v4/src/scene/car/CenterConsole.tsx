import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function CenterConsole() {
  const chargePadRef = useRef<THREE.Mesh>(null)

  // Pulsing wireless charging pad glow
  useFrame((state) => {
    if (chargePadRef.current) {
      const t = state.clock.elapsedTime
      const mat = chargePadRef.current.material as THREE.MeshStandardMaterial
      mat.emissiveIntensity = 0.4 + Math.sin(t * 1.8) * 0.3
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Main console body */}
      <mesh position={[0, 0.48, 0.4]}>
        <boxGeometry args={[0.22, 0.12, 0.8]} />
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Raised section between seats — armrest base */}
      <mesh position={[0, 0.56, 0.15]}>
        <boxGeometry args={[0.24, 0.04, 0.45]} />
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.7}
          metalness={0.15}
        />
      </mesh>

      {/* Armrest pad (top — softer material) */}
      <mesh position={[0, 0.59, 0.0]}>
        <boxGeometry args={[0.22, 0.02, 0.30]} />
        <meshStandardMaterial
          color="#222222"
          roughness={0.9}
          metalness={0.0}
        />
      </mesh>

      {/* Armrest lid seam */}
      <mesh position={[0, 0.601, 0.0]}>
        <boxGeometry args={[0.23, 0.001, 0.31]} />
        <meshStandardMaterial
          color="#0a0a0a"
          roughness={0.5}
        />
      </mesh>

      {/* Front cup holder area — raised rim */}
      <group position={[0, 0.49, 0.62]}>
        {/* Left cup holder rim */}
        <mesh position={[-0.055, 0.06, 0]}>
          <torusGeometry args={[0.035, 0.005, 8, 24]} />
          <meshStandardMaterial
            color="#2a2a2a"
            roughness={0.6}
            metalness={0.3}
          />
        </mesh>
        {/* Left cup holder interior */}
        <mesh position={[-0.055, 0.03, 0]}>
          <cylinderGeometry args={[0.033, 0.030, 0.06, 16]} />
          <meshStandardMaterial
            color="#0a0a0a"
            roughness={0.9}
          />
        </mesh>

        {/* Right cup holder rim */}
        <mesh position={[0.055, 0.06, 0]}>
          <torusGeometry args={[0.035, 0.005, 8, 24]} />
          <meshStandardMaterial
            color="#2a2a2a"
            roughness={0.6}
            metalness={0.3}
          />
        </mesh>
        {/* Right cup holder interior */}
        <mesh position={[0.055, 0.03, 0]}>
          <cylinderGeometry args={[0.033, 0.030, 0.06, 16]} />
          <meshStandardMaterial
            color="#0a0a0a"
            roughness={0.9}
          />
        </mesh>

        {/* Divider between cup holders */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.006, 0.04, 0.06]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.7} />
        </mesh>
      </group>

      {/* Wireless charging pad */}
      <mesh ref={chargePadRef} position={[0, 0.55, 0.48]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.10, 0.14]} />
        <meshStandardMaterial
          color="#0d1a2a"
          emissive="#00aaff"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.4}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Charging pad border */}
      <mesh position={[0, 0.545, 0.48]}>
        <boxGeometry args={[0.11, 0.005, 0.15]} />
        <meshStandardMaterial
          color="#222222"
          roughness={0.4}
          metalness={0.5}
        />
      </mesh>

      {/* Charging pad LED indicator */}
      <mesh position={[0, 0.553, 0.55]}>
        <sphereGeometry args={[0.004, 8, 8]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={2}
        />
      </mesh>

      {/* USB-C port area */}
      <group position={[0, 0.50, 0.72]}>
        {/* Port recess */}
        <mesh>
          <boxGeometry args={[0.06, 0.02, 0.02]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
        </mesh>

        {/* USB-C port 1 */}
        <mesh position={[-0.015, 0, 0.011]}>
          <boxGeometry args={[0.012, 0.005, 0.003]} />
          <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* USB-C port 2 */}
        <mesh position={[0.015, 0, 0.011]}>
          <boxGeometry args={[0.012, 0.005, 0.003]} />
          <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>

      {/* Console front ramp (sloping toward dash) */}
      <mesh position={[0, 0.48, 0.82]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.22, 0.08, 0.06]} />
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
    </group>
  )
}

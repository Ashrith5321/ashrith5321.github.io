import * as THREE from 'three';

/**
 * Interior.tsx — Cabin structure: floor, headliner, pillars, pedals,
 * rearview mirror, and ambient LED accent lighting.
 *
 * This component provides the "shell" that all other interior pieces
 * sit inside. The ambient LED strip at foot level adds a subtle blue
 * glow characteristic of Tesla's interior lighting.
 */

export function Interior() {
  return (
    <group name="interior">
      {/* ═══════════ Floor / carpet ═══════════ */}
      <mesh
        position={[0, 0.15, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[1.6, 2.2]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.0}
          roughness={1.0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* ═══════════ Headliner / ceiling ═══════════ */}
      <mesh
        position={[0, 1.4, 0.5]}
        rotation={[Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[1.6, 2.2]} />
        <meshStandardMaterial
          color="#cccccc"
          metalness={0.0}
          roughness={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* ═══════════ A-pillars ═══════════ */}
      {/* Left A-pillar — angled from windshield corner to roof front */}
      <mesh
        position={[-0.78, 1.22, 1.9]}
        rotation={[0.5, 0.15, 0.2]}
        castShadow
      >
        <boxGeometry args={[0.06, 0.45, 0.06]} />
        <meshStandardMaterial color="#cccccc" metalness={0.0} roughness={0.9} />
      </mesh>

      {/* Right A-pillar */}
      <mesh
        position={[0.78, 1.22, 1.9]}
        rotation={[0.5, -0.15, -0.2]}
        castShadow
      >
        <boxGeometry args={[0.06, 0.45, 0.06]} />
        <meshStandardMaterial color="#cccccc" metalness={0.0} roughness={0.9} />
      </mesh>

      {/* ═══════════ B-pillars ═══════════ */}
      {/* Left B-pillar — vertical at mid-door to roof */}
      <mesh position={[-0.85, 1.1, 0.0]} castShadow>
        <boxGeometry args={[0.06, 0.65, 0.08]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Right B-pillar */}
      <mesh position={[0.85, 1.1, 0.0]} castShadow>
        <boxGeometry args={[0.06, 0.65, 0.08]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* ═══════════ Pedals (driver side) ═══════════ */}
      <group position={[-0.4, 0.2, 1.65]}>
        {/* Accelerator pedal */}
        <mesh position={[0.06, 0.03, 0]} rotation={[0.35, 0, 0]} castShadow>
          <boxGeometry args={[0.06, 0.12, 0.03]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.7} />
        </mesh>

        {/* Brake pedal — wider, more upright */}
        <mesh position={[-0.06, 0.05, 0]} rotation={[0.2, 0, 0]} castShadow>
          <boxGeometry args={[0.07, 0.1, 0.04]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.7} />
        </mesh>

        {/* Dead pedal / foot rest (far left) */}
        <mesh position={[-0.18, 0.01, -0.05]} rotation={[0.1, 0, 0]}>
          <boxGeometry args={[0.08, 0.14, 0.02]} />
          <meshStandardMaterial color="#222222" metalness={0.2} roughness={0.8} />
        </mesh>
      </group>

      {/* ═══════════ Rearview mirror ═══════════ */}
      <group position={[0, 1.32, 1.95]}>
        {/* Mirror mount arm */}
        <mesh rotation={[0.3, 0, 0]}>
          <boxGeometry args={[0.025, 0.1, 0.025]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.8} />
        </mesh>

        {/* Mirror housing */}
        <mesh position={[0, -0.08, -0.04]}>
          <boxGeometry args={[0.22, 0.07, 0.03]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.15} roughness={0.85} />
        </mesh>

        {/* Mirror reflective surface */}
        <mesh position={[0, -0.08, -0.025]}>
          <planeGeometry args={[0.2, 0.055]} />
          <meshStandardMaterial
            color="#667788"
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>
      </group>

      {/* ═══════════ Ambient LED strip ═══════════ */}
      {/* Runs along both door panels at foot level for a subtle blue glow */}

      {/* Left side LED strip */}
      <mesh position={[-0.82, 0.2, 0.5]}>
        <boxGeometry args={[0.01, 0.015, 1.0]} />
        <meshStandardMaterial
          color="#4488ff"
          emissive="#4488ff"
          emissiveIntensity={2.0}
          toneMapped={false}
        />
      </mesh>

      {/* Right side LED strip */}
      <mesh position={[0.82, 0.2, 0.5]}>
        <boxGeometry args={[0.01, 0.015, 1.0]} />
        <meshStandardMaterial
          color="#4488ff"
          emissive="#4488ff"
          emissiveIntensity={2.0}
          toneMapped={false}
        />
      </mesh>

      {/* LED glow lights — subtle point lights for ambient effect */}
      <pointLight
        position={[-0.82, 0.22, 0.5]}
        color="#4488ff"
        intensity={0.5}
        distance={1.5}
        decay={2}
      />
      <pointLight
        position={[0.82, 0.22, 0.5]}
        color="#4488ff"
        intensity={0.5}
        distance={1.5}
        decay={2}
      />
    </group>
  );
}

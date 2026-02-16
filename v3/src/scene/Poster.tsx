import * as THREE from 'three';

export function Poster() {
  return (
    <group position={[4.85, 3.2, -1.5]}>
      {/* Trophy poster / awards display on right wall */}

      {/* Poster frame */}
      <mesh rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[1.2, 1.6, 0.04]} />
        <meshStandardMaterial color="#1a1215" roughness={0.9} />
      </mesh>

      {/* Poster face */}
      <mesh position={[-0.03, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[1.1, 1.5]} />
        <meshStandardMaterial
          color="#0f1020"
          emissive="#0a0a2a"
          emissiveIntensity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* UMich logo representation (blue/gold) */}
      <mesh position={[-0.04, 0.45, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <circleGeometry args={[0.15, 8]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Trophy icons */}
      {/* Gold trophy */}
      <group position={[-0.04, 0, -0.25]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.04, 0.08, 6]} />
          <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.2} metalness={0.5} flatShading />
        </mesh>
        <mesh position={[0, -0.06, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.04, 4]} />
          <meshStandardMaterial color="#d4a520" metalness={0.5} />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.02, 6]} />
          <meshStandardMaterial color="#d4a520" metalness={0.5} />
        </mesh>
      </group>

      {/* Silver trophy */}
      <group position={[-0.04, 0, 0.25]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.035, 0.07, 6]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.6} flatShading />
        </mesh>
        <mesh position={[0, -0.055, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.035, 4]} />
          <meshStandardMaterial color="#a0a0a0" metalness={0.5} />
        </mesh>
        <mesh position={[0, -0.08, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.015, 6]} />
          <meshStandardMaterial color="#a0a0a0" metalness={0.5} />
        </mesh>
      </group>

      {/* Stars */}
      {[-0.3, -0.1, 0.1, 0.3].map((z, i) => (
        <mesh key={i} position={[-0.04, -0.45, z]} rotation={[0, -Math.PI / 2, 0]}>
          <circleGeometry args={[0.04, 5]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

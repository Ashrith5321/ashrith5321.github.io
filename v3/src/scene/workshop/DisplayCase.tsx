import * as THREE from 'three';

export function DisplayCase({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Base cabinet */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[1.6, 0.8, 0.6]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} />
      </mesh>

      {/* Glass top enclosure */}
      {/* Back panel */}
      <mesh position={[0, 1.3, -0.28]}>
        <boxGeometry args={[1.56, 1, 0.03]} />
        <meshStandardMaterial color="#333" roughness={0.6} />
      </mesh>

      {/* Glass sides */}
      {[-0.78, 0.78].map((x, i) => (
        <mesh key={i} position={[x, 1.3, 0]}>
          <boxGeometry args={[0.02, 1, 0.56]} />
          <meshStandardMaterial
            color="#88ccee"
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Glass front */}
      <mesh position={[0, 1.3, 0.28]}>
        <boxGeometry args={[1.56, 1, 0.02]} />
        <meshStandardMaterial
          color="#88ccee"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Top */}
      <mesh position={[0, 1.82, 0]}>
        <boxGeometry args={[1.6, 0.04, 0.6]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} />
      </mesh>

      {/* Shelf inside */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[1.5, 0.02, 0.5]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Interior light */}
      <pointLight position={[0, 1.7, 0]} color="#ffffff" intensity={3} distance={1.5} decay={2} />
    </group>
  );
}

import * as THREE from 'three';

export function Window() {
  return (
    <group position={[-4.9, 3.2, 0]}>
      {/* Window frame */}
      <mesh>
        <boxGeometry args={[0.08, 2.6, 2.2]} />
        <meshStandardMaterial color="#4a3a2a" />
      </mesh>

      {/* Glass pane - bright sky */}
      <mesh position={[0.05, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, 2.4]} />
        <meshStandardMaterial
          color="#87ceeb"
          transparent
          opacity={0.4}
          emissive="#aaddff"
          emissiveIntensity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Frame bars - horizontal */}
      <mesh position={[0.05, 0, 0]}>
        <boxGeometry args={[0.04, 0.03, 2.2]} />
        <meshStandardMaterial color="#4a3a2a" />
      </mesh>
      {/* Frame bars - vertical */}
      <mesh position={[0.05, 0, 0]}>
        <boxGeometry args={[0.04, 2.6, 0.03]} />
        <meshStandardMaterial color="#4a3a2a" />
      </mesh>

      {/* Clouds visible through window */}
      <mesh position={[-1, 0.8, 0.3]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
      </mesh>
      <mesh position={[-1.3, 0.75, 0.2]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
      </mesh>
      <mesh position={[-0.7, 0.7, 0.4]}>
        <sphereGeometry args={[0.18, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.65} />
      </mesh>

      {/* Sunlight spill plane */}
      <pointLight position={[-1, 0, 0]} color="#fff8e0" intensity={15} distance={6} decay={2} />
    </group>
  );
}

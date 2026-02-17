import * as THREE from 'three';

function SingleWindow({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Window frame */}
      <mesh>
        <boxGeometry args={[0.08, 2.2, 3.2]} />
        <meshStandardMaterial color="#4a3a2a" />
      </mesh>

      {/* Glass pane — bright sky */}
      <mesh position={[0.05, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial
          color="#87ceeb"
          transparent
          opacity={0.4}
          emissive="#aaddff"
          emissiveIntensity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Frame bars — horizontal */}
      <mesh position={[0.05, 0, 0]}>
        <boxGeometry args={[0.04, 0.03, 3.2]} />
        <meshStandardMaterial color="#4a3a2a" />
      </mesh>
      {/* Frame bars — vertical */}
      <mesh position={[0.05, 0, 0]}>
        <boxGeometry args={[0.04, 2.2, 0.03]} />
        <meshStandardMaterial color="#4a3a2a" />
      </mesh>

      {/* Sunlight spill */}
      <pointLight position={[-1, 0, 0]} color="#fff8e0" intensity={12} distance={8} decay={2} />
    </group>
  );
}

export function Window() {
  // 3 windows along the left wall at z = -4, 0, 4
  return (
    <group>
      <SingleWindow position={[-9.9, 3.4, -4]} />
      <SingleWindow position={[-9.9, 3.4, 0]} />
      <SingleWindow position={[-9.9, 3.4, 4]} />

      {/* Clouds visible through center window */}
      <mesh position={[-11, 4.2, 0.3]}>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
      </mesh>
      <mesh position={[-11.4, 4.15, 0.1]}>
        <sphereGeometry args={[0.22, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
      </mesh>
      <mesh position={[-10.6, 4.1, 0.5]}>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.65} />
      </mesh>

      {/* Clouds visible through left window */}
      <mesh position={[-11, 4.0, -3.7]}>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

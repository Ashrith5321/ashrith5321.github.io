import * as THREE from 'three';

export function Whiteboard({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Board frame */}
      <mesh>
        <boxGeometry args={[2.2, 1.4, 0.06]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* White surface */}
      <mesh position={[0, 0, 0.031]}>
        <planeGeometry args={[2.0, 1.2]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Scribbled "equations" — horizontal lines */}
      {[-0.35, -0.15, 0.05, 0.25].map((y, i) => (
        <mesh key={i} position={[-0.3 + i * 0.08, y, 0.035]}>
          <boxGeometry args={[0.8 - i * 0.1, 0.015, 0.001]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#2563eb' : '#dc2626'} />
        </mesh>
      ))}

      {/* A drawn circle (rough) */}
      <mesh position={[0.6, 0.15, 0.035]}>
        <torusGeometry args={[0.12, 0.008, 6, 12]} />
        <meshBasicMaterial color="#2563eb" />
      </mesh>

      {/* Arrow */}
      <mesh position={[0.3, -0.3, 0.035]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.4, 0.012, 0.001]} />
        <meshBasicMaterial color="#dc2626" />
      </mesh>

      {/* Marker tray */}
      <mesh position={[0, -0.75, 0.05]}>
        <boxGeometry args={[1.0, 0.04, 0.06]} />
        <meshStandardMaterial color="#999" metalness={0.3} />
      </mesh>

      {/* Markers */}
      {[-0.2, -0.05, 0.1].map((x, i) => (
        <mesh key={`marker-${i}`} position={[x, -0.72, 0.06]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.012, 0.012, 0.12, 6]} />
          <meshStandardMaterial color={['#2563eb', '#dc2626', '#16a34a'][i]} />
        </mesh>
      ))}
    </group>
  );
}

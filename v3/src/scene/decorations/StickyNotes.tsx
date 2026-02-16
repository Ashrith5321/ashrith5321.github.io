import * as THREE from 'three';

export function StickyNotes() {
  const notes = [
    { position: [-1.2, 2.8, -3.9] as [number, number, number], color: '#fbbf24', rotation: 0.05 },
    { position: [-1.5, 2.6, -3.9] as [number, number, number], color: '#f87171', rotation: -0.08 },
    { position: [-1.0, 2.5, -3.9] as [number, number, number], color: '#34d399', rotation: 0.12 },
    { position: [-1.4, 3.0, -3.9] as [number, number, number], color: '#60a5fa', rotation: -0.03 },
    { position: [-0.8, 2.9, -3.9] as [number, number, number], color: '#c084fc', rotation: 0.07 },
  ];

  return (
    <group>
      {notes.map(({ position, color, rotation }, i) => (
        <group key={i} position={position} rotation={[0, 0, rotation]}>
          {/* Sticky note */}
          <mesh>
            <planeGeometry args={[0.2, 0.2]} />
            <meshStandardMaterial
              color={color}
              side={THREE.DoubleSide}
              roughness={0.9}
            />
          </mesh>
          {/* Line details on note */}
          {[0.04, 0, -0.04].map((y, j) => (
            <mesh key={j} position={[0, y, 0.001]}>
              <planeGeometry args={[0.14, 0.008]} />
              <meshStandardMaterial
                color="#00000030"
                transparent
                opacity={0.15}
                side={THREE.DoubleSide}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

export function ToolCart({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Cart body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.7, 0.8, 0.45]} />
        <meshStandardMaterial color="#c0392b" roughness={0.6} metalness={0.3} />
      </mesh>

      {/* Top surface */}
      <mesh position={[0, 0.92, 0]}>
        <boxGeometry args={[0.74, 0.04, 0.48]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Drawer lines */}
      {[0.65, 0.45, 0.25].map((y, i) => (
        <mesh key={i} position={[0, y, 0.23]}>
          <boxGeometry args={[0.62, 0.01, 0.01]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      ))}

      {/* Drawer handles */}
      {[0.72, 0.52, 0.32].map((y, i) => (
        <mesh key={`h-${i}`} position={[0, y, 0.24]}>
          <boxGeometry args={[0.15, 0.02, 0.02]} />
          <meshStandardMaterial color="#999" metalness={0.5} />
        </mesh>
      ))}

      {/* Wheels */}
      {[
        [-0.3, 0.05, 0.2],
        [0.3, 0.05, 0.2],
        [-0.3, 0.05, -0.2],
        [0.3, 0.05, -0.2],
      ].map((pos, i) => (
        <mesh key={`wheel-${i}`} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.05, 0.05, 0.03, 8]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      ))}

      {/* Push handle */}
      <mesh position={[0.4, 1.1, 0]}>
        <boxGeometry args={[0.04, 0.4, 0.4]} />
        <meshStandardMaterial color="#333" metalness={0.4} />
      </mesh>
    </group>
  );
}

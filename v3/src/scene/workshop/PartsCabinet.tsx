export function PartsCabinet({ position }: { position: [number, number, number] }) {
  const drawerColors = ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6', '#06b6d4'];

  return (
    <group position={position}>
      {/* Cabinet body */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.6, 1.2, 0.4]} />
        <meshStandardMaterial color="#555" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Drawers — 6 rows of 2 */}
      {Array.from({ length: 6 }).map((_, row) => (
        <group key={row}>
          {[-0.12, 0.12].map((x, col) => (
            <group key={`${row}-${col}`}>
              {/* Drawer face */}
              <mesh position={[x, 0.15 + row * 0.17, 0.21]}>
                <boxGeometry args={[0.22, 0.14, 0.01]} />
                <meshStandardMaterial color={drawerColors[row]} roughness={0.7} />
              </mesh>
              {/* Handle */}
              <mesh position={[x, 0.15 + row * 0.17, 0.22]}>
                <boxGeometry args={[0.08, 0.02, 0.02]} />
                <meshStandardMaterial color="#999" metalness={0.5} />
              </mesh>
            </group>
          ))}
        </group>
      ))}
    </group>
  );
}

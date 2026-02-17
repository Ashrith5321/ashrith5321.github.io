export function ToolWall({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Pegboard panel */}
      <mesh>
        <boxGeometry args={[3, 2, 0.06]} />
        <meshStandardMaterial color="#c4b080" roughness={0.95} />
      </mesh>

      {/* Pegboard holes (decorative dots) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;
        return (
          <mesh key={i} position={[-0.9 + col * 0.6, 0.5 - row * 0.5, 0.031]}>
            <circleGeometry args={[0.02, 6]} />
            <meshStandardMaterial color="#a09060" />
          </mesh>
        );
      })}

      {/* Wrench silhouette */}
      <group position={[-1, 0.4, 0.04]}>
        <mesh>
          <boxGeometry args={[0.04, 0.5, 0.02]} />
          <meshStandardMaterial color="#777" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.28, 0]}>
          <boxGeometry args={[0.1, 0.06, 0.02]} />
          <meshStandardMaterial color="#777" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Screwdriver */}
      <group position={[-0.4, 0.3, 0.04]}>
        <mesh>
          <cylinderGeometry args={[0.015, 0.015, 0.35, 6]} />
          <meshStandardMaterial color="#888" metalness={0.5} />
        </mesh>
        <mesh position={[0, -0.22, 0]}>
          <cylinderGeometry args={[0.03, 0.025, 0.1, 6]} />
          <meshStandardMaterial color="#e8a030" flatShading />
        </mesh>
      </group>

      {/* Pliers */}
      <group position={[0.2, 0.35, 0.04]}>
        <mesh rotation={[0, 0, 0.1]}>
          <boxGeometry args={[0.03, 0.3, 0.02]} />
          <meshStandardMaterial color="#666" metalness={0.5} />
        </mesh>
        <mesh rotation={[0, 0, -0.1]}>
          <boxGeometry args={[0.03, 0.3, 0.02]} />
          <meshStandardMaterial color="#666" metalness={0.5} />
        </mesh>
      </group>

      {/* Hammer */}
      <group position={[0.8, 0.3, 0.04]}>
        <mesh>
          <cylinderGeometry args={[0.02, 0.018, 0.4, 6]} />
          <meshStandardMaterial color="#8b6914" />
        </mesh>
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[0.12, 0.06, 0.04]} />
          <meshStandardMaterial color="#555" metalness={0.6} />
        </mesh>
      </group>

      {/* Wire spool */}
      <mesh position={[1.2, -0.2, 0.04]}>
        <torusGeometry args={[0.08, 0.025, 6, 12]} />
        <meshStandardMaterial color="#c0392b" flatShading />
      </mesh>
    </group>
  );
}

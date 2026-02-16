const BOOK_COLORS = ['#8b4513', '#2d3748', '#1a365d', '#742a2a', '#22543d', '#553c9a', '#975a16'];

function Book({ position, width, height, color }: {
  position: [number, number, number];
  width: number;
  height: number;
  color: string;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={[width, height, 0.18]} />
      <meshStandardMaterial color={color} flatShading roughness={0.8} />
    </mesh>
  );
}

export function Bookshelf() {
  return (
    <group position={[-4.8, 2.5, -2]}>
      {/* Shelf frame - back */}
      <mesh position={[0, 0, -0.12]}>
        <boxGeometry args={[1.2, 1.8, 0.04]} />
        <meshStandardMaterial color="#3d2b1a" roughness={0.8} />
      </mesh>

      {/* Shelves */}
      {[-0.7, -0.1, 0.5].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <boxGeometry args={[1.2, 0.04, 0.25]} />
          <meshStandardMaterial color="#4a3520" roughness={0.7} />
        </mesh>
      ))}

      {/* Side panels */}
      {[-0.6, 0.6].map((x, i) => (
        <mesh key={`side-${i}`} position={[x, 0, 0]}>
          <boxGeometry args={[0.04, 1.8, 0.25]} />
          <meshStandardMaterial color="#3d2b1a" roughness={0.8} />
        </mesh>
      ))}

      {/* Books on top shelf */}
      <group position={[0, 0.15, 0]}>
        <Book position={[-0.35, 0, 0]} width={0.06} height={0.35} color={BOOK_COLORS[0]} />
        <Book position={[-0.25, 0, 0]} width={0.08} height={0.32} color={BOOK_COLORS[1]} />
        <Book position={[-0.14, 0, 0]} width={0.06} height={0.38} color={BOOK_COLORS[2]} />
        <Book position={[-0.04, 0, 0]} width={0.07} height={0.3} color={BOOK_COLORS[3]} />
        <Book position={[0.08, 0, 0]} width={0.05} height={0.34} color={BOOK_COLORS[4]} />
        <Book position={[0.18, 0, 0]} width={0.08} height={0.36} color={BOOK_COLORS[5]} />
        <Book position={[0.3, 0, 0]} width={0.06} height={0.33} color={BOOK_COLORS[6]} />
      </group>

      {/* Books on middle shelf */}
      <group position={[0, -0.4, 0]}>
        <Book position={[-0.3, 0, 0]} width={0.07} height={0.28} color={BOOK_COLORS[3]} />
        <Book position={[-0.18, 0, 0]} width={0.09} height={0.32} color={BOOK_COLORS[5]} />
        <Book position={[-0.06, 0, 0]} width={0.06} height={0.3} color={BOOK_COLORS[0]} />
        <Book position={[0.05, 0, 0]} width={0.07} height={0.25} color={BOOK_COLORS[2]} />
        {/* Leaning book */}
        <mesh position={[0.2, -0.02, 0.03]} rotation={[0, 0, 0.15]}>
          <boxGeometry args={[0.06, 0.28, 0.18]} />
          <meshStandardMaterial color={BOOK_COLORS[4]} flatShading roughness={0.8} />
        </mesh>
      </group>

      {/* Books on bottom shelf */}
      <group position={[0, -0.95, 0]}>
        <Book position={[-0.25, 0, 0]} width={0.1} height={0.35} color={BOOK_COLORS[6]} />
        <Book position={[-0.1, 0, 0]} width={0.06} height={0.3} color={BOOK_COLORS[1]} />
        <Book position={[0.02, 0, 0]} width={0.08} height={0.32} color={BOOK_COLORS[4]} />
        {/* Small figurine */}
        <mesh position={[0.25, 0, 0.04]}>
          <cylinderGeometry args={[0.03, 0.02, 0.12, 6]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.3} metalness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

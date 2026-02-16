export function StackedBooks() {
  const books = [
    { color: '#2d3748', width: 0.35, depth: 0.25, height: 0.04 },
    { color: '#742a2a', width: 0.33, depth: 0.23, height: 0.05 },
    { color: '#1a365d', width: 0.3, depth: 0.22, height: 0.03 },
    { color: '#22543d', width: 0.32, depth: 0.24, height: 0.04 },
  ];

  let y = 0;
  return (
    <group position={[1.5, 1.58, -3.2]}>
      {books.map((book, i) => {
        y += book.height / 2;
        const posY = y;
        y += book.height / 2 + 0.002;
        return (
          <mesh key={i} position={[0, posY, 0]} rotation={[0, i * 0.12, 0]}>
            <boxGeometry args={[book.width, book.height, book.depth]} />
            <meshStandardMaterial color={book.color} roughness={0.85} flatShading />
          </mesh>
        );
      })}
      {/* Paper/resume on top */}
      <mesh position={[0.02, y + 0.005, 0]} rotation={[0, 0.08, 0]}>
        <boxGeometry args={[0.22, 0.002, 0.28]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.9} />
      </mesh>
    </group>
  );
}

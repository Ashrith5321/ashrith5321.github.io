export function Ground() {
  return (
    <group>
      {/* Asphalt ground plane */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Center lane marking (dashed yellow) */}
      {Array.from({ length: 12 }, (_, i) => (
        <mesh
          key={`center-${i}`}
          position={[0, 0.005, -40 + i * 8]}
          rotation-x={-Math.PI / 2}
        >
          <planeGeometry args={[0.15, 3]} />
          <meshStandardMaterial color="#ccaa22" emissive="#ccaa22" emissiveIntensity={0.1} />
        </mesh>
      ))}

      {/* Left lane marking (solid white) */}
      <mesh position={[-4, 0.005, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[0.12, 100]} />
        <meshStandardMaterial color="#888888" />
      </mesh>

      {/* Right lane marking (solid white) */}
      <mesh position={[4, 0.005, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[0.12, 100]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
    </group>
  );
}

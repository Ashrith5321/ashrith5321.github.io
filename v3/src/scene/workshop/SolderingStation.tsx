export function SolderingStation({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Base unit */}
      <mesh position={[0, 0.04, 0]}>
        <boxGeometry args={[0.15, 0.08, 0.1]} />
        <meshStandardMaterial color="#555" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Temperature display */}
      <mesh position={[0, 0.06, 0.051]}>
        <planeGeometry args={[0.08, 0.03]} />
        <meshStandardMaterial color="#000" emissive="#ff6600" emissiveIntensity={0.6} />
      </mesh>

      {/* Iron holder / stand */}
      <mesh position={[0.12, 0.06, 0]}>
        <cylinderGeometry args={[0.03, 0.04, 0.08, 6]} />
        <meshStandardMaterial color="#888" metalness={0.5} />
      </mesh>

      {/* Soldering iron */}
      <group position={[0.12, 0.12, 0]} rotation={[0, 0, 0.4]}>
        {/* Handle */}
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.012, 0.015, 0.15, 6]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        {/* Tip */}
        <mesh position={[0, 0.18, 0]}>
          <cylinderGeometry args={[0.003, 0.008, 0.08, 4]} />
          <meshStandardMaterial color="#ccc" metalness={0.8} />
        </mesh>
        {/* Heat glow */}
        <pointLight position={[0, 0.22, 0]} color="#ff4400" intensity={0.5} distance={0.3} decay={2} />
      </group>

      {/* Sponge */}
      <mesh position={[-0.1, 0.02, 0]}>
        <boxGeometry args={[0.06, 0.02, 0.04]} />
        <meshStandardMaterial color="#c4a010" roughness={1} />
      </mesh>

      {/* Solder wire spool */}
      <mesh position={[-0.08, 0.06, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.025, 0.008, 4, 8]} />
        <meshStandardMaterial color="#999" metalness={0.6} />
      </mesh>
    </group>
  );
}

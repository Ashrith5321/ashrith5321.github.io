export function RacingDrone() {
  const armLength = 0.15;
  const arms = [0, 1, 2, 3].map((i) => {
    const angle = (i * Math.PI * 2) / 4 + Math.PI / 4;
    return {
      x: Math.sin(angle) * armLength,
      z: Math.cos(angle) * armLength,
      angle,
    };
  });

  return (
    <group position={[5, 1.0, 4]} rotation={[0.15, 0.3, 0.1]}>
      {/* Compact body — aggressive tilted stance */}
      <mesh castShadow>
        <boxGeometry args={[0.12, 0.04, 0.14]} />
        <meshStandardMaterial color="#e74c3c" flatShading metalness={0.3} />
      </mesh>

      {/* FPV camera mount */}
      <mesh position={[0, 0.01, 0.08]}>
        <boxGeometry args={[0.04, 0.03, 0.03]} />
        <meshStandardMaterial color="#222" metalness={0.4} />
      </mesh>
      {/* Camera lens */}
      <mesh position={[0, 0.01, 0.1]}>
        <sphereGeometry args={[0.012, 6, 6]} />
        <meshStandardMaterial color="#333" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>

      {/* Arms */}
      {arms.map(({ x, z, angle }, i) => (
        <group key={i}>
          <mesh position={[x / 2, 0, z / 2]} rotation={[0, -angle, Math.PI / 2]}>
            <cylinderGeometry args={[0.008, 0.008, armLength, 4]} />
            <meshStandardMaterial color="#333" metalness={0.5} />
          </mesh>
          {/* Motor */}
          <mesh position={[x, 0, z]}>
            <cylinderGeometry args={[0.02, 0.02, 0.025, 6]} />
            <meshStandardMaterial color="#444" metalness={0.5} />
          </mesh>
          {/* Prop disc */}
          <mesh position={[x, 0.015, z]}>
            <cylinderGeometry args={[0.05, 0.05, 0.003, 3]} />
            <meshStandardMaterial color="#666" transparent opacity={0.4} />
          </mesh>
        </group>
      ))}

      {/* Battery strap */}
      <mesh position={[0, -0.025, 0]}>
        <boxGeometry args={[0.1, 0.02, 0.06]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* LED strip on back */}
      <mesh position={[0, 0, -0.075]}>
        <boxGeometry args={[0.08, 0.01, 0.005]} />
        <meshBasicMaterial color="#e74c3c" />
      </mesh>
    </group>
  );
}

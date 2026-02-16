export function Chair() {
  return (
    <group position={[0, 0, -1.5]}>
      {/* Seat */}
      <mesh position={[0, 1.1, 0]} castShadow>
        <boxGeometry args={[0.6, 0.06, 0.55]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 1.65, -0.25]}>
        <boxGeometry args={[0.55, 0.8, 0.05]} />
        <meshStandardMaterial color="#222222" roughness={0.8} />
      </mesh>

      {/* Center post */}
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.9, 6]} />
        <meshStandardMaterial color="#333333" metalness={0.4} />
      </mesh>

      {/* Base star - 5 legs */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i * Math.PI * 2) / 5;
        const x = Math.sin(angle) * 0.3;
        const z = Math.cos(angle) * 0.3;
        return (
          <group key={i}>
            <mesh position={[x / 2, 0.12, z / 2]} rotation={[0, -angle, Math.PI / 2 - 0.3]}>
              <cylinderGeometry args={[0.015, 0.015, 0.35, 4]} />
              <meshStandardMaterial color="#333333" metalness={0.4} />
            </mesh>
            {/* Caster wheel */}
            <mesh position={[x, 0.04, z]}>
              <sphereGeometry args={[0.03, 6, 6]} />
              <meshStandardMaterial color="#222222" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

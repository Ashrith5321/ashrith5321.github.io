export function CoffeeMug() {
  return (
    <group position={[1.2, 1.62, -2.5]}>
      {/* Mug body */}
      <mesh>
        <cylinderGeometry args={[0.05, 0.045, 0.1, 8]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.6} />
      </mesh>

      {/* Coffee surface */}
      <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.045, 8]} />
        <meshStandardMaterial color="#3d1f0a" />
      </mesh>

      {/* Handle */}
      <mesh position={[0.06, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.03, 0.008, 4, 8]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.6} />
      </mesh>
    </group>
  );
}

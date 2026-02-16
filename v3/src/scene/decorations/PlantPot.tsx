import * as THREE from 'three';

export function PlantPot() {
  return (
    <group position={[4, 0, -3]}>
      {/* Pot */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.12, 0.1, 0.2, 6]} />
        <meshStandardMaterial color="#c4662a" flatShading />
      </mesh>

      {/* Soil */}
      <mesh position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.11, 6]} />
        <meshStandardMaterial color="#2d1a0a" side={THREE.DoubleSide} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, 0.38, 0]}>
        <cylinderGeometry args={[0.01, 0.012, 0.35, 4]} />
        <meshStandardMaterial color="#1a5c2e" />
      </mesh>

      {/* Leaves */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i * Math.PI * 2) / 5 + 0.3;
        const height = 0.3 + i * 0.08;
        const tilt = 0.4 + Math.random() * 0.3;
        return (
          <mesh
            key={i}
            position={[Math.sin(angle) * 0.03, height, Math.cos(angle) * 0.03]}
            rotation={[tilt * Math.cos(angle), angle, tilt * Math.sin(angle)]}
          >
            <planeGeometry args={[0.08, 0.15]} />
            <meshStandardMaterial color="#2d8a4e" side={THREE.DoubleSide} flatShading />
          </mesh>
        );
      })}
    </group>
  );
}

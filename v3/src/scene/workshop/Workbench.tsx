import { COLORS } from '../../data/sceneConfig';

export function Workbench({ position, rotation = 0 }: {
  position: [number, number, number];
  rotation?: number;
}) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* Tabletop — thick wood */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.08, 0.9]} />
        <meshStandardMaterial color={COLORS.workbenchWood} roughness={0.8} />
      </mesh>

      {/* Metal frame legs */}
      {[
        [-1.1, 0.44, 0.35],
        [-1.1, 0.44, -0.35],
        [1.1, 0.44, 0.35],
        [1.1, 0.44, -0.35],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <boxGeometry args={[0.06, 0.88, 0.06]} />
          <meshStandardMaterial color={COLORS.darkMetal} metalness={0.5} roughness={0.4} />
        </mesh>
      ))}

      {/* Lower shelf / crossbar */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[2.3, 0.04, 0.7]} />
        <meshStandardMaterial color={COLORS.darkMetal} metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Pegboard back panel */}
      <mesh position={[0, 1.5, -0.42]}>
        <boxGeometry args={[2.3, 1.2, 0.03]} />
        <meshStandardMaterial color="#d4c8a0" roughness={0.9} />
      </mesh>

      {/* Scattered parts on table — small cylinders and cubes */}
      <mesh position={[-0.6, 0.97, 0.1]}>
        <cylinderGeometry args={[0.04, 0.04, 0.06, 6]} />
        <meshStandardMaterial color="#aaa" metalness={0.6} flatShading />
      </mesh>
      <mesh position={[-0.3, 0.96, -0.1]}>
        <boxGeometry args={[0.08, 0.04, 0.06]} />
        <meshStandardMaterial color="#555" metalness={0.5} flatShading />
      </mesh>
      <mesh position={[0.5, 0.96, 0.15]}>
        <boxGeometry args={[0.12, 0.03, 0.08]} />
        <meshStandardMaterial color="#c0392b" flatShading />
      </mesh>
      <mesh position={[0.8, 0.97, -0.05]}>
        <cylinderGeometry args={[0.02, 0.02, 0.15, 6]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.3} flatShading />
      </mesh>
    </group>
  );
}

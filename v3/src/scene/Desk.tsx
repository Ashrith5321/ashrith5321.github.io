import { COLORS } from '../data/sceneConfig';

export function Desk() {
  const wood = COLORS.deskWood;
  const legColor = '#1a1a1a';

  return (
    <group position={[0, 0, -3]}>
      {/* Main desk top */}
      <mesh position={[0, 1.5, 0]} receiveShadow castShadow>
        <boxGeometry args={[4, 0.08, 1.8]} />
        <meshStandardMaterial color={wood} roughness={0.7} />
      </mesh>

      {/* Side extension (L-shape) */}
      <mesh position={[2.75, 1.5, -0.3]} receiveShadow castShadow>
        <boxGeometry args={[1.5, 0.08, 1.2]} />
        <meshStandardMaterial color={wood} roughness={0.7} />
      </mesh>

      {/* Legs */}
      {[
        [-1.9, 0.75, 0.8],
        [-1.9, 0.75, -0.8],
        [1.9, 0.75, 0.8],
        [1.9, 0.75, -0.8],
        [3.4, 0.75, 0.3],
        [3.4, 0.75, -0.8],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 1.5, 6]} />
          <meshStandardMaterial color={legColor} metalness={0.3} />
        </mesh>
      ))}

      {/* Drawer unit */}
      <mesh position={[-1.2, 0.9, -0.2]} castShadow>
        <boxGeometry args={[0.8, 0.6, 0.5]} />
        <meshStandardMaterial color="#4a3520" roughness={0.7} />
      </mesh>
      {/* Drawer handles */}
      {[0.1, -0.1].map((y, i) => (
        <mesh key={`handle-${i}`} position={[-1.2, 0.9 + y, 0.06]}>
          <boxGeometry args={[0.2, 0.02, 0.02]} />
          <meshStandardMaterial color="#888888" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

import * as THREE from 'three';

export function DeskLamp() {
  return (
    <group position={[-1.5, 1.58, -3.2]}>
      {/* Base */}
      <mesh>
        <cylinderGeometry args={[0.12, 0.15, 0.04, 8]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Arm segment 1 */}
      <mesh position={[0, 0.25, 0]} rotation={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 4]} />
        <meshStandardMaterial color="#333333" metalness={0.3} />
      </mesh>

      {/* Joint */}
      <mesh position={[0.08, 0.48, 0]}>
        <sphereGeometry args={[0.03, 6, 6]} />
        <meshStandardMaterial color="#444444" metalness={0.4} />
      </mesh>

      {/* Arm segment 2 */}
      <mesh position={[0.15, 0.62, 0]} rotation={[0, 0, -0.4]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 4]} />
        <meshStandardMaterial color="#333333" metalness={0.3} />
      </mesh>

      {/* Shade */}
      <mesh position={[0.1, 0.75, 0]} rotation={[0, 0, 0.1]}>
        <coneGeometry args={[0.15, 0.2, 8, 1, true]} />
        <meshStandardMaterial color="#2a2a2a" side={THREE.DoubleSide} />
      </mesh>

      {/* Bulb */}
      <mesh position={[0.1, 0.68, 0]}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshBasicMaterial color="#ffd700" />
      </mesh>

      {/* Light source - boosted */}
      <pointLight
        position={[0.1, 0.65, 0]}
        color="#ffd07a"
        intensity={80}
        distance={10}
        decay={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.002}
      />
    </group>
  );
}

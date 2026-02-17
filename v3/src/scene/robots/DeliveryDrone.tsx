import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function DeliveryDrone() {
  const groupRef = useRef<THREE.Group>(null);
  const rotorsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.y = 4 + Math.sin(t * 0.9) * 0.06;
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
    }
    if (rotorsRef.current) {
      rotorsRef.current.children.forEach((r) => { r.rotation.y += 0.3; });
    }
  });

  const armPositions: [number, number, number][] = [
    [-0.25, 0, 0.25],
    [0.25, 0, 0.25],
    [-0.25, 0, -0.25],
    [0.25, 0, -0.25],
  ];

  return (
    <group ref={groupRef} position={[-7, 4, -5]}>
      {/* Central body */}
      <mesh castShadow>
        <boxGeometry args={[0.2, 0.08, 0.2]} />
        <meshStandardMaterial color="#f0f0f0" flatShading metalness={0.3} />
      </mesh>

      {/* Brand stripe */}
      <mesh position={[0, 0.041, 0]}>
        <boxGeometry args={[0.18, 0.002, 0.04]} />
        <meshBasicMaterial color="#00b4d8" />
      </mesh>

      {/* Arms */}
      {armPositions.map((pos, i) => {
        const angle = Math.atan2(pos[0], pos[2]);
        return (
          <group key={i}>
            <mesh position={[pos[0] / 2, 0, pos[2] / 2]} rotation={[0, -angle, Math.PI / 2]}>
              <cylinderGeometry args={[0.012, 0.012, 0.35, 4]} />
              <meshStandardMaterial color="#666" metalness={0.5} />
            </mesh>
            <mesh position={pos}>
              <cylinderGeometry args={[0.025, 0.025, 0.03, 6]} />
              <meshStandardMaterial color="#444" metalness={0.5} />
            </mesh>
          </group>
        );
      })}

      {/* Rotors */}
      <group ref={rotorsRef}>
        {armPositions.map((pos, i) => (
          <mesh key={`r-${i}`} position={[pos[0], 0.02, pos[2]]}>
            <cylinderGeometry args={[0.07, 0.07, 0.004, 3]} />
            <meshStandardMaterial color="#aaa" transparent opacity={0.3} />
          </mesh>
        ))}
      </group>

      {/* Package hanging below */}
      <group position={[0, -0.15, 0]}>
        {/* Cables */}
        {[[-0.06, 0.06], [0.06, 0.06], [-0.06, -0.06], [0.06, -0.06]].map(([x, z], i) => (
          <mesh key={`cable-${i}`} position={[x, 0.04, z]}>
            <cylinderGeometry args={[0.003, 0.003, 0.1, 3]} />
            <meshStandardMaterial color="#555" />
          </mesh>
        ))}
        {/* Box */}
        <mesh position={[0, -0.04, 0]}>
          <boxGeometry args={[0.15, 0.1, 0.12]} />
          <meshStandardMaterial color="#c8a060" roughness={0.9} flatShading />
        </mesh>
        {/* Tape strip */}
        <mesh position={[0, -0.04, 0.061]}>
          <boxGeometry args={[0.04, 0.1, 0.002]} />
          <meshStandardMaterial color="#8b6914" />
        </mesh>
      </group>

      {/* Status light */}
      <mesh position={[0, -0.04, 0.11]}>
        <sphereGeometry args={[0.01, 6, 6]} />
        <meshBasicMaterial color="#00ff44" />
      </mesh>
    </group>
  );
}

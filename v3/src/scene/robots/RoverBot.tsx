import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RoverBot() {
  const wheelsRef = useRef<THREE.Group>(null);
  const lensRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (wheelsRef.current) {
      wheelsRef.current.children.forEach((wheel) => {
        wheel.rotation.x += 0.01;
      });
    }
    if (lensRef.current) {
      const mat = lensRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.5 + Math.sin(clock.elapsedTime * 4) * 0.5;
    }
  });

  const wheelPositions: [number, number, number][] = [
    [-0.25, -0.12, 0.18],
    [0.25, -0.12, 0.18],
    [-0.25, -0.12, -0.18],
    [0.25, -0.12, -0.18],
  ];

  return (
    <group position={[-3.2, 0.25, 2]}>
      {/* Chassis */}
      <mesh castShadow>
        <boxGeometry args={[0.6, 0.18, 0.4]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.3} flatShading />
      </mesh>

      {/* Top plate */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[0.5, 0.04, 0.35]} />
        <meshStandardMaterial color="#d97706" metalness={0.2} flatShading />
      </mesh>

      {/* Camera mast */}
      <mesh position={[0.15, 0.25, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 4]} />
        <meshStandardMaterial color="#666666" metalness={0.4} />
      </mesh>

      {/* Camera head */}
      <mesh position={[0.15, 0.38, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.06]} />
        <meshStandardMaterial color="#333333" metalness={0.3} flatShading />
      </mesh>

      {/* Camera lens */}
      <mesh ref={lensRef} position={[0.15, 0.38, 0.04]}>
        <sphereGeometry args={[0.02, 6, 6]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={1.5} />
      </mesh>

      {/* Solar panel */}
      <mesh position={[-0.08, 0.18, 0]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[0.3, 0.01, 0.2]} />
        <meshStandardMaterial color="#1e3a5f" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Wheels */}
      <group ref={wheelsRef}>
        {wheelPositions.map((pos, i) => (
          <mesh key={i} position={pos} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.08, 0.08, 0.05, 8]} />
            <meshStandardMaterial color="#333333" roughness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Axles */}
      {[0.18, -0.18].map((z, i) => (
        <mesh key={i} position={[0, -0.12, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.015, 0.015, 0.55, 4]} />
          <meshStandardMaterial color="#555555" metalness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function AutonomousCar() {
  const lidarRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (lidarRef.current) {
      lidarRef.current.rotation.y += 0.05;
    }
  });

  const bodyColor = '#1a1a2e';
  const accentColor = '#00b4d8';

  return (
    <group position={[6, 0, 3]}>
      {/* Chassis / body */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <boxGeometry args={[0.7, 0.12, 1.4]} />
        <meshStandardMaterial color={bodyColor} flatShading metalness={0.3} />
      </mesh>

      {/* Cabin */}
      <mesh position={[0, 0.3, -0.1]}>
        <boxGeometry args={[0.55, 0.18, 0.7]} />
        <meshStandardMaterial color={bodyColor} flatShading metalness={0.3} />
      </mesh>

      {/* Windshield */}
      <mesh position={[0, 0.32, 0.26]} rotation={[-0.3, 0, 0]}>
        <planeGeometry args={[0.48, 0.18]} />
        <meshStandardMaterial color="#334155" transparent opacity={0.6} metalness={0.8} />
      </mesh>

      {/* LIDAR dome on roof — spinning */}
      <group position={[0, 0.45, -0.05]}>
        {/* Base */}
        <mesh>
          <cylinderGeometry args={[0.08, 0.1, 0.04, 8]} />
          <meshStandardMaterial color="#333" metalness={0.5} />
        </mesh>
        {/* Spinning dome */}
        <mesh ref={lidarRef} position={[0, 0.04, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.06, 12]} />
          <meshStandardMaterial color={accentColor} flatShading metalness={0.3} />
        </mesh>
        {/* LIDAR glow */}
        <pointLight position={[0, 0.08, 0]} color={accentColor} intensity={2} distance={1.5} decay={2} />
      </group>

      {/* Camera array on front */}
      {[-0.15, 0, 0.15].map((x, i) => (
        <mesh key={i} position={[x, 0.28, 0.36]}>
          <boxGeometry args={[0.04, 0.04, 0.02]} />
          <meshStandardMaterial color="#222" metalness={0.5} />
        </mesh>
      ))}

      {/* Headlights */}
      {[-0.25, 0.25].map((x, i) => (
        <mesh key={`hl-${i}`} position={[x, 0.15, 0.71]}>
          <boxGeometry args={[0.1, 0.04, 0.01]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
      ))}

      {/* Taillights */}
      {[-0.25, 0.25].map((x, i) => (
        <mesh key={`tl-${i}`} position={[x, 0.15, -0.71]}>
          <boxGeometry args={[0.1, 0.04, 0.01]} />
          <meshStandardMaterial color="#ff2222" emissive="#ff2222" emissiveIntensity={0.4} />
        </mesh>
      ))}

      {/* Wheels */}
      {[
        [-0.38, 0.06, 0.4],
        [0.38, 0.06, 0.4],
        [-0.38, 0.06, -0.4],
        [0.38, 0.06, -0.4],
      ].map((pos, i) => (
        <mesh key={`wheel-${i}`} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.08, 0.08, 0.06, 8]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
        </mesh>
      ))}

      {/* Accent stripe along side */}
      <mesh position={[0.36, 0.18, 0]}>
        <boxGeometry args={[0.005, 0.03, 1.2]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>
      <mesh position={[-0.36, 0.18, 0]}>
        <boxGeometry args={[0.005, 0.03, 1.2]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>
    </group>
  );
}

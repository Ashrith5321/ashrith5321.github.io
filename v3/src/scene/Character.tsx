import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { COLORS } from '../data/sceneConfig';

export function Character() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Subtle breathing animation
      const breathe = Math.sin(clock.elapsedTime * 1.2) * 0.008;
      groupRef.current.position.y = breathe;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -1.8]}>
      {/* Head */}
      <mesh position={[0, 2.7, 0]} castShadow>
        <sphereGeometry args={[0.25, 8, 6]} />
        <meshStandardMaterial color={COLORS.skinTone} flatShading />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 2.82, -0.05]} scale={[1, 0.6, 1]}>
        <sphereGeometry args={[0.27, 6, 4]} />
        <meshStandardMaterial color="#1a0f08" flatShading />
      </mesh>

      {/* Ears */}
      {[-0.24, 0.24].map((x, i) => (
        <mesh key={`ear-${i}`} position={[x, 2.68, 0]}>
          <sphereGeometry args={[0.05, 5, 5]} />
          <meshStandardMaterial color={COLORS.skinTone} flatShading />
        </mesh>
      ))}

      {/* Neck */}
      <mesh position={[0, 2.35, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.15, 6]} />
        <meshStandardMaterial color={COLORS.skinTone} flatShading />
      </mesh>

      {/* Torso (hoodie) */}
      <mesh position={[0, 2.0, 0]} castShadow>
        <boxGeometry args={[0.6, 0.7, 0.35]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>

      {/* Hoodie pocket */}
      <mesh position={[0, 1.78, 0.18]}>
        <boxGeometry args={[0.35, 0.12, 0.01]} />
        <meshStandardMaterial color="#1d4ed8" flatShading />
      </mesh>

      {/* Left arm (reaching toward desk) */}
      <mesh position={[-0.4, 1.95, 0.15]} rotation={[0.5, 0, 0.2]} castShadow>
        <cylinderGeometry args={[0.08, 0.07, 0.5, 6]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>
      {/* Left forearm */}
      <mesh position={[-0.42, 1.72, 0.4]} rotation={[1.0, 0, 0.1]}>
        <cylinderGeometry args={[0.065, 0.06, 0.35, 6]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>
      {/* Left hand */}
      <mesh position={[-0.4, 1.55, 0.55]}>
        <sphereGeometry args={[0.06, 6, 4]} />
        <meshStandardMaterial color={COLORS.skinTone} flatShading />
      </mesh>

      {/* Right arm */}
      <mesh position={[0.4, 1.95, 0.15]} rotation={[0.5, 0, -0.2]} castShadow>
        <cylinderGeometry args={[0.08, 0.07, 0.5, 6]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>
      {/* Right forearm */}
      <mesh position={[0.42, 1.72, 0.4]} rotation={[1.0, 0, -0.1]}>
        <cylinderGeometry args={[0.065, 0.06, 0.35, 6]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>
      {/* Right hand */}
      <mesh position={[0.4, 1.55, 0.55]}>
        <sphereGeometry args={[0.06, 6, 4]} />
        <meshStandardMaterial color={COLORS.skinTone} flatShading />
      </mesh>

      {/* Legs (seated) */}
      <mesh position={[-0.15, 1.3, 0.1]} castShadow>
        <boxGeometry args={[0.18, 0.5, 0.35]} />
        <meshStandardMaterial color={COLORS.jeans} flatShading />
      </mesh>
      <mesh position={[0.15, 1.3, 0.1]} castShadow>
        <boxGeometry args={[0.18, 0.5, 0.35]} />
        <meshStandardMaterial color={COLORS.jeans} flatShading />
      </mesh>

      {/* Lower legs (dangling from chair) */}
      <mesh position={[-0.15, 0.85, 0.25]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.16, 0.5, 0.18]} />
        <meshStandardMaterial color={COLORS.jeans} flatShading />
      </mesh>
      <mesh position={[0.15, 0.85, 0.25]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.16, 0.5, 0.18]} />
        <meshStandardMaterial color={COLORS.jeans} flatShading />
      </mesh>

      {/* Shoes */}
      <mesh position={[-0.15, 0.58, 0.38]}>
        <boxGeometry args={[0.15, 0.08, 0.22]} />
        <meshStandardMaterial color="#333333" flatShading />
      </mesh>
      <mesh position={[0.15, 0.58, 0.38]}>
        <boxGeometry args={[0.15, 0.08, 0.22]} />
        <meshStandardMaterial color="#333333" flatShading />
      </mesh>
    </group>
  );
}

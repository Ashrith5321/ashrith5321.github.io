import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { COLORS } from '../data/sceneConfig';

export function Character() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) {
      // Subtle breathing animation
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.008;
    }
    if (headRef.current) {
      // Occasional head turn
      headRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
      headRef.current.rotation.x = Math.sin(t * 0.5) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -1.8]}>
      {/* Head */}
      <group ref={headRef} position={[0, 2.7, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.25, 12, 8]} />
          <meshStandardMaterial color={COLORS.skinTone} flatShading />
        </mesh>

        {/* Hair — fuller, layered */}
        <mesh position={[0, 0.08, -0.02]} scale={[1.05, 0.7, 1.05]}>
          <sphereGeometry args={[0.27, 8, 6]} />
          <meshStandardMaterial color="#1a0f08" flatShading />
        </mesh>
        {/* Hair front fringe */}
        <mesh position={[0, 0.12, 0.15]} scale={[0.8, 0.3, 0.3]}>
          <sphereGeometry args={[0.2, 6, 4]} />
          <meshStandardMaterial color="#1a0f08" flatShading />
        </mesh>

        {/* Glasses frames */}
        {[-0.09, 0.09].map((x, i) => (
          <mesh key={`lens-${i}`} position={[x, 0, 0.23]}>
            <torusGeometry args={[0.055, 0.008, 4, 8]} />
            <meshStandardMaterial color="#333" metalness={0.5} />
          </mesh>
        ))}
        {/* Glasses bridge */}
        <mesh position={[0, 0, 0.24]}>
          <boxGeometry args={[0.04, 0.008, 0.008]} />
          <meshStandardMaterial color="#333" metalness={0.5} />
        </mesh>
        {/* Glasses arms */}
        {[-0.14, 0.14].map((x, i) => (
          <mesh key={`arm-${i}`} position={[x, 0, 0.12]}>
            <boxGeometry args={[0.008, 0.008, 0.22]} />
            <meshStandardMaterial color="#333" metalness={0.5} />
          </mesh>
        ))}

        {/* Ears */}
        {[-0.24, 0.24].map((x, i) => (
          <mesh key={`ear-${i}`} position={[x, -0.02, 0]}>
            <sphereGeometry args={[0.05, 5, 5]} />
            <meshStandardMaterial color={COLORS.skinTone} flatShading />
          </mesh>
        ))}
      </group>

      {/* Neck */}
      <mesh position={[0, 2.35, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.15, 6]} />
        <meshStandardMaterial color={COLORS.skinTone} flatShading />
      </mesh>

      {/* Torso (Michigan hoodie) */}
      <mesh position={[0, 2.0, 0]} castShadow>
        <boxGeometry args={[0.65, 0.72, 0.38]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>

      {/* "M" logo on chest */}
      <mesh position={[0, 2.1, 0.2]}>
        <boxGeometry args={[0.12, 0.14, 0.005]} />
        <meshStandardMaterial color="#f59e0b" flatShading />
      </mesh>

      {/* Hoodie pocket */}
      <mesh position={[0, 1.78, 0.2]}>
        <boxGeometry args={[0.38, 0.12, 0.01]} />
        <meshStandardMaterial color="#1d4ed8" flatShading />
      </mesh>

      {/* Hood at back of neck */}
      <mesh position={[0, 2.35, -0.15]} scale={[0.7, 0.5, 0.4]}>
        <sphereGeometry args={[0.25, 6, 4]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>

      {/* Left arm (reaching toward desk) */}
      <mesh position={[-0.42, 1.95, 0.15]} rotation={[0.5, 0, 0.2]} castShadow>
        <cylinderGeometry args={[0.08, 0.07, 0.5, 6]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>
      {/* Left forearm */}
      <mesh position={[-0.44, 1.72, 0.4]} rotation={[1.0, 0, 0.1]}>
        <cylinderGeometry args={[0.065, 0.06, 0.35, 6]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>
      {/* Left hand — with finger suggestions */}
      <group position={[-0.42, 1.55, 0.55]}>
        <mesh>
          <boxGeometry args={[0.08, 0.04, 0.06]} />
          <meshStandardMaterial color={COLORS.skinTone} flatShading />
        </mesh>
        {/* Finger stubs */}
        {[-0.025, -0.008, 0.008, 0.025].map((x, i) => (
          <mesh key={`lf-${i}`} position={[x, 0, 0.04]}>
            <boxGeometry args={[0.012, 0.03, 0.03]} />
            <meshStandardMaterial color={COLORS.skinTone} flatShading />
          </mesh>
        ))}
      </group>

      {/* Right arm */}
      <mesh position={[0.42, 1.95, 0.15]} rotation={[0.5, 0, -0.2]} castShadow>
        <cylinderGeometry args={[0.08, 0.07, 0.5, 6]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>
      {/* Right forearm */}
      <mesh position={[0.44, 1.72, 0.4]} rotation={[1.0, 0, -0.1]}>
        <cylinderGeometry args={[0.065, 0.06, 0.35, 6]} />
        <meshStandardMaterial color={COLORS.hoodie} flatShading />
      </mesh>
      {/* Right hand */}
      <group position={[0.42, 1.55, 0.55]}>
        <mesh>
          <boxGeometry args={[0.08, 0.04, 0.06]} />
          <meshStandardMaterial color={COLORS.skinTone} flatShading />
        </mesh>
        {[-0.025, -0.008, 0.008, 0.025].map((x, i) => (
          <mesh key={`rf-${i}`} position={[x, 0, 0.04]}>
            <boxGeometry args={[0.012, 0.03, 0.03]} />
            <meshStandardMaterial color={COLORS.skinTone} flatShading />
          </mesh>
        ))}
      </group>

      {/* Legs (seated) */}
      <mesh position={[-0.16, 1.3, 0.1]} castShadow>
        <boxGeometry args={[0.19, 0.5, 0.38]} />
        <meshStandardMaterial color={COLORS.jeans} flatShading />
      </mesh>
      <mesh position={[0.16, 1.3, 0.1]} castShadow>
        <boxGeometry args={[0.19, 0.5, 0.38]} />
        <meshStandardMaterial color={COLORS.jeans} flatShading />
      </mesh>

      {/* Lower legs (dangling from chair) */}
      <mesh position={[-0.16, 0.85, 0.25]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.17, 0.5, 0.2]} />
        <meshStandardMaterial color={COLORS.jeans} flatShading />
      </mesh>
      <mesh position={[0.16, 0.85, 0.25]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.17, 0.5, 0.2]} />
        <meshStandardMaterial color={COLORS.jeans} flatShading />
      </mesh>

      {/* Shoes */}
      <mesh position={[-0.16, 0.58, 0.38]}>
        <boxGeometry args={[0.16, 0.1, 0.24]} />
        <meshStandardMaterial color="#333333" flatShading />
      </mesh>
      <mesh position={[0.16, 0.58, 0.38]}>
        <boxGeometry args={[0.16, 0.1, 0.24]} />
        <meshStandardMaterial color="#333333" flatShading />
      </mesh>
      {/* Shoe soles */}
      <mesh position={[-0.16, 0.53, 0.38]}>
        <boxGeometry args={[0.17, 0.02, 0.25]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.16, 0.53, 0.38]}>
        <boxGeometry args={[0.17, 0.02, 0.25]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
}

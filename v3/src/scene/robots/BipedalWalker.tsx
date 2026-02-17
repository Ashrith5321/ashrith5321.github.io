import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BipedalWalker() {
  const groupRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Subtle sway
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 0.6) * 0.03;
      groupRef.current.position.y = 0.02 + Math.sin(t * 1.2) * 0.01;
    }
    // Leg shifts
    if (leftLegRef.current) leftLegRef.current.rotation.x = Math.sin(t * 0.8) * 0.06;
    if (rightLegRef.current) rightLegRef.current.rotation.x = -Math.sin(t * 0.8) * 0.06;
  });

  const metalColor = '#c0c0c0';
  const darkMetal = '#444';
  const accentColor = '#22c55e';

  return (
    <group ref={groupRef} position={[-5, 0, 5]}>
      {/* Pelvis / hip structure */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <boxGeometry args={[0.4, 0.12, 0.18]} />
        <meshStandardMaterial color={metalColor} flatShading metalness={0.5} />
      </mesh>

      {/* Torso column */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[0.2, 0.4, 0.15]} />
        <meshStandardMaterial color={metalColor} flatShading metalness={0.5} />
      </mesh>

      {/* Chest plate */}
      <mesh position={[0, 1.25, 0.08]}>
        <boxGeometry args={[0.25, 0.15, 0.02]} />
        <meshStandardMaterial color={accentColor} flatShading />
      </mesh>

      {/* Head / sensor dome */}
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshStandardMaterial color={darkMetal} flatShading metalness={0.5} />
      </mesh>
      {/* Eye visor */}
      <mesh position={[0, 1.42, 0.08]}>
        <boxGeometry args={[0.14, 0.03, 0.02]} />
        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={2} />
      </mesh>

      {/* Left leg */}
      <group ref={leftLegRef} position={[-0.12, 0.78, 0]}>
        {/* Upper leg */}
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[0.1, 0.3, 0.1]} />
          <meshStandardMaterial color={metalColor} flatShading metalness={0.5} />
        </mesh>
        {/* Knee joint */}
        <mesh position={[0, -0.32, 0]}>
          <sphereGeometry args={[0.05, 6, 6]} />
          <meshStandardMaterial color={darkMetal} metalness={0.6} />
        </mesh>
        {/* Lower leg */}
        <mesh position={[0, -0.48, 0]}>
          <boxGeometry args={[0.08, 0.28, 0.08]} />
          <meshStandardMaterial color={metalColor} flatShading metalness={0.5} />
        </mesh>
        {/* Foot */}
        <mesh position={[0, -0.65, 0.03]}>
          <boxGeometry args={[0.12, 0.04, 0.18]} />
          <meshStandardMaterial color={darkMetal} metalness={0.4} />
        </mesh>
      </group>

      {/* Right leg */}
      <group ref={rightLegRef} position={[0.12, 0.78, 0]}>
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[0.1, 0.3, 0.1]} />
          <meshStandardMaterial color={metalColor} flatShading metalness={0.5} />
        </mesh>
        <mesh position={[0, -0.32, 0]}>
          <sphereGeometry args={[0.05, 6, 6]} />
          <meshStandardMaterial color={darkMetal} metalness={0.6} />
        </mesh>
        <mesh position={[0, -0.48, 0]}>
          <boxGeometry args={[0.08, 0.28, 0.08]} />
          <meshStandardMaterial color={metalColor} flatShading metalness={0.5} />
        </mesh>
        <mesh position={[0, -0.65, 0.03]}>
          <boxGeometry args={[0.12, 0.04, 0.18]} />
          <meshStandardMaterial color={darkMetal} metalness={0.4} />
        </mesh>
      </group>

      {/* Eye glow */}
      <pointLight position={[0, 1.42, 0.15]} color={accentColor} intensity={1} distance={1} decay={2} />
    </group>
  );
}

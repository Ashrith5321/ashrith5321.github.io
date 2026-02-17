import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RobotDog() {
  const groupRef = useRef<THREE.Group>(null);
  const frontLeftRef = useRef<THREE.Group>(null);
  const frontRightRef = useRef<THREE.Group>(null);
  const backLeftRef = useRef<THREE.Group>(null);
  const backRightRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Subtle idle weight-shifting
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 0.8) * 0.02;
    }
    // Leg idle shifts
    const shift = Math.sin(t * 1.5) * 0.04;
    if (frontLeftRef.current) frontLeftRef.current.rotation.x = shift;
    if (frontRightRef.current) frontRightRef.current.rotation.x = -shift;
    if (backLeftRef.current) backLeftRef.current.rotation.x = -shift * 0.7;
    if (backRightRef.current) backRightRef.current.rotation.x = shift * 0.7;
  });

  const bodyColor = '#e0e0e0';
  const jointColor = '#444';
  const accentColor = '#f59e0b';

  function Leg({ position, legRef }: {
    position: [number, number, number];
    legRef: React.RefObject<THREE.Group | null>;
  }) {
    return (
      <group ref={legRef} position={position}>
        {/* Upper leg */}
        <mesh position={[0, -0.12, 0]}>
          <boxGeometry args={[0.08, 0.24, 0.08]} />
          <meshStandardMaterial color={bodyColor} flatShading metalness={0.4} />
        </mesh>
        {/* Joint */}
        <mesh position={[0, -0.25, 0]}>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshStandardMaterial color={jointColor} metalness={0.5} />
        </mesh>
        {/* Lower leg */}
        <mesh position={[0, -0.38, 0.02]}>
          <boxGeometry args={[0.06, 0.22, 0.06]} />
          <meshStandardMaterial color={bodyColor} flatShading metalness={0.4} />
        </mesh>
        {/* Foot pad */}
        <mesh position={[0, -0.5, 0.02]}>
          <boxGeometry args={[0.08, 0.03, 0.1]} />
          <meshStandardMaterial color={jointColor} metalness={0.3} />
        </mesh>
      </group>
    );
  }

  return (
    <group ref={groupRef} position={[-6, 0.55, 2]}>
      {/* Main body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.35, 0.18, 0.7]} />
        <meshStandardMaterial color={bodyColor} flatShading metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Top panel with accent stripe */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.3, 0.02, 0.6]} />
        <meshStandardMaterial color={accentColor} flatShading />
      </mesh>

      {/* Head */}
      <group position={[0, 0.06, 0.42]}>
        {/* Head block */}
        <mesh castShadow>
          <boxGeometry args={[0.22, 0.14, 0.18]} />
          <meshStandardMaterial color={bodyColor} flatShading metalness={0.4} />
        </mesh>
        {/* Eyes */}
        {[-0.06, 0.06].map((x, i) => (
          <mesh key={i} position={[x, 0.02, 0.091]}>
            <boxGeometry args={[0.04, 0.02, 0.005]} />
            <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2} />
          </mesh>
        ))}
        {/* Sensor array on top */}
        <mesh position={[0, 0.08, 0.02]}>
          <boxGeometry args={[0.12, 0.02, 0.08]} />
          <meshStandardMaterial color={jointColor} metalness={0.6} />
        </mesh>
      </group>

      {/* Tail stub */}
      <mesh position={[0, 0.06, -0.4]}>
        <boxGeometry args={[0.06, 0.04, 0.1]} />
        <meshStandardMaterial color={bodyColor} flatShading metalness={0.4} />
      </mesh>

      {/* Legs */}
      <Leg position={[-0.15, -0.05, 0.22]} legRef={frontLeftRef} />
      <Leg position={[0.15, -0.05, 0.22]} legRef={frontRightRef} />
      <Leg position={[-0.15, -0.05, -0.22]} legRef={backLeftRef} />
      <Leg position={[0.15, -0.05, -0.22]} legRef={backRightRef} />

      {/* Belly accent light */}
      <pointLight position={[0, -0.1, 0.2]} color="#00e5ff" intensity={1} distance={1} decay={2} />
    </group>
  );
}

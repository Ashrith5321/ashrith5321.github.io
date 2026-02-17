import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Finger({ position, rotation = 0, length = 0.12 }: {
  position: [number, number, number];
  rotation?: number;
  length?: number;
}) {
  return (
    <group position={position} rotation={[rotation, 0, 0]}>
      {/* Proximal */}
      <mesh position={[0, length / 2, 0]}>
        <boxGeometry args={[0.018, length, 0.016]} />
        <meshStandardMaterial color="#ccc" flatShading metalness={0.5} />
      </mesh>
      {/* Joint */}
      <mesh position={[0, length, 0]}>
        <sphereGeometry args={[0.01, 4, 4]} />
        <meshStandardMaterial color="#666" metalness={0.6} />
      </mesh>
      {/* Distal */}
      <mesh position={[0, length + 0.04, 0]}>
        <boxGeometry args={[0.015, 0.06, 0.014]} />
        <meshStandardMaterial color="#bbb" flatShading metalness={0.5} />
      </mesh>
    </group>
  );
}

export function HumanoidHands() {
  const leftRef = useRef<THREE.Group>(null);
  const rightRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Subtle finger curl animation
    const curl = Math.sin(t * 0.8) * 0.15;
    if (leftRef.current) {
      leftRef.current.children.forEach((child, i) => {
        if (i < 5) child.rotation.x = curl * (0.5 + i * 0.1);
      });
    }
    if (rightRef.current) {
      rightRef.current.children.forEach((child, i) => {
        if (i < 5) child.rotation.x = -curl * (0.5 + i * 0.1);
      });
    }
  });

  return (
    <group position={[5, 1.0, -2]}>
      {/* Display stand */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.15, 0.18, 0.04, 8]} />
        <meshStandardMaterial color="#333" metalness={0.4} />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.18, 6]} />
        <meshStandardMaterial color="#555" metalness={0.4} />
      </mesh>

      {/* Left hand */}
      <group ref={leftRef} position={[-0.1, 0.05, 0]}>
        {/* Palm */}
        <mesh>
          <boxGeometry args={[0.1, 0.06, 0.12]} />
          <meshStandardMaterial color="#ddd" flatShading metalness={0.5} />
        </mesh>
        {/* Fingers */}
        <Finger position={[-0.035, 0.03, 0.05]} />
        <Finger position={[-0.012, 0.03, 0.055]} length={0.13} />
        <Finger position={[0.012, 0.03, 0.05]} length={0.12} />
        <Finger position={[0.035, 0.03, 0.04]} length={0.1} />
        {/* Thumb */}
        <Finger position={[-0.05, 0.01, -0.03]} rotation={-0.5} length={0.08} />
      </group>

      {/* Right hand */}
      <group ref={rightRef} position={[0.1, 0.05, 0]} rotation={[0, Math.PI, 0]}>
        <mesh>
          <boxGeometry args={[0.1, 0.06, 0.12]} />
          <meshStandardMaterial color="#ddd" flatShading metalness={0.5} />
        </mesh>
        <Finger position={[-0.035, 0.03, 0.05]} />
        <Finger position={[-0.012, 0.03, 0.055]} length={0.13} />
        <Finger position={[0.012, 0.03, 0.05]} length={0.12} />
        <Finger position={[0.035, 0.03, 0.04]} length={0.1} />
        <Finger position={[-0.05, 0.01, -0.03]} rotation={-0.5} length={0.08} />
      </group>

      {/* Label plate */}
      <mesh position={[0, -0.17, 0.12]}>
        <boxGeometry args={[0.15, 0.02, 0.005]} />
        <meshStandardMaterial color="#00b4d8" />
      </mesh>
    </group>
  );
}

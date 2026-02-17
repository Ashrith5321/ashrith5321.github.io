import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Oscilloscope({ position }: { position: [number, number, number] }) {
  const lineRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.position.x = Math.sin(clock.elapsedTime * 3) * 0.02;
    }
  });

  return (
    <group position={position}>
      {/* Body */}
      <mesh castShadow>
        <boxGeometry args={[0.35, 0.25, 0.25]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0.02, 0.126]}>
        <planeGeometry args={[0.25, 0.16]} />
        <meshStandardMaterial
          color="#001a00"
          emissive="#003300"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Waveform line (animated) */}
      <mesh ref={lineRef} position={[0, 0.02, 0.128]}>
        <boxGeometry args={[0.2, 0.008, 0.001]} />
        <meshBasicMaterial color="#00ff44" />
      </mesh>

      {/* Knobs */}
      {[[-0.12, -0.08], [0, -0.08], [0.12, -0.08]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.126]}>
          <cylinderGeometry args={[0.015, 0.015, 0.02, 8]} />
          <meshStandardMaterial color="#666" metalness={0.5} />
        </mesh>
      ))}

      {/* Probe cables */}
      <mesh position={[-0.1, -0.12, 0.15]} rotation={[0.5, 0, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.15, 4]} />
        <meshStandardMaterial color="#e74c3c" />
      </mesh>
      <mesh position={[0.1, -0.12, 0.15]} rotation={[0.5, 0, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.15, 4]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
}

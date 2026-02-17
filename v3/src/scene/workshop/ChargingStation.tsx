import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ChargingStation({ position }: { position: [number, number, number] }) {
  const ledsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ledsRef.current) return;
    const t = clock.elapsedTime;
    ledsRef.current.children.forEach((led, i) => {
      const mat = (led as THREE.Mesh).material as THREE.MeshBasicMaterial;
      const phase = (t * 2 + i * 0.5) % 3;
      mat.color.set(phase < 1 ? '#ff4444' : phase < 2 ? '#ffaa00' : '#00ff44');
    });
  });

  return (
    <group position={position}>
      {/* Station rack frame */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.8, 1.2, 0.35]} />
        <meshStandardMaterial color="#333" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Battery slots (4 slots) */}
      {[0.35, 0.1, -0.15, -0.4].map((y, i) => (
        <group key={i}>
          {/* Slot opening */}
          <mesh position={[0, 0.6 + y, 0.18]}>
            <boxGeometry args={[0.6, 0.18, 0.01]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          {/* Battery block inside */}
          <mesh position={[0, 0.6 + y, 0.1]}>
            <boxGeometry args={[0.5, 0.14, 0.15]} />
            <meshStandardMaterial color="#444" metalness={0.3} />
          </mesh>
        </group>
      ))}

      {/* LED indicators */}
      <group ref={ledsRef}>
        {[0.35, 0.1, -0.15, -0.4].map((y, i) => (
          <mesh key={`led-${i}`} position={[0.35, 0.6 + y, 0.19]}>
            <sphereGeometry args={[0.02, 6, 6]} />
            <meshBasicMaterial color="#00ff44" />
          </mesh>
        ))}
      </group>

      {/* Power cable */}
      <mesh position={[-0.35, 0.15, 0.1]} rotation={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.3, 6]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
}

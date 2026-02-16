import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Monitor({ position, screenColor, screenIntensity }: {
  position: [number, number, number];
  screenColor: string;
  screenIntensity: number;
}) {
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (screenRef.current) {
      const mat = screenRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = screenIntensity + Math.sin(clock.elapsedTime * 2) * 0.15;
    }
  });

  return (
    <group position={position}>
      {/* Bezel */}
      <mesh castShadow>
        <boxGeometry args={[1.4, 0.9, 0.05]} />
        <meshStandardMaterial color="#111111" roughness={0.8} />
      </mesh>

      {/* Screen face */}
      <mesh ref={screenRef} position={[0, 0, 0.026]}>
        <planeGeometry args={[1.3, 0.8]} />
        <meshStandardMaterial
          color="#000000"
          emissive={screenColor}
          emissiveIntensity={screenIntensity}
        />
      </mesh>

      {/* Thin screen bezel line */}
      <mesh position={[0, -0.48, 0]}>
        <boxGeometry args={[0.5, 0.02, 0.06]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* Stand neck */}
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[0.08, 0.35, 0.08]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} />
      </mesh>

      {/* Stand base */}
      <mesh position={[0, -0.8, 0.05]}>
        <cylinderGeometry args={[0.22, 0.25, 0.03, 8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} />
      </mesh>
    </group>
  );
}

export function MonitorSetup() {
  return (
    <group position={[0, 2.18, -3.5]}>
      {/* Left monitor - blue code screen */}
      <Monitor position={[-0.8, 0, 0]} screenColor="#3a7adf" screenIntensity={4.0} />

      {/* Right monitor - green terminal */}
      <Monitor position={[0.8, 0, 0]} screenColor="#2aaa5a" screenIntensity={3.5} />

      {/* Desktop tower - on the right side */}
      <group position={[2.8, -0.8, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.8, 0.7]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.8} />
        </mesh>
        {/* Power LED */}
        <mesh position={[0.21, 0.2, 0]}>
          <sphereGeometry args={[0.02, 6, 6]} />
          <meshBasicMaterial color="#00ff44" />
        </mesh>
        {/* USB ports */}
        {[0, -0.08].map((y, i) => (
          <mesh key={i} position={[0.21, y, 0.15]}>
            <boxGeometry args={[0.01, 0.03, 0.06]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
        ))}
        {/* Ventilation lines */}
        {[-0.15, -0.2, -0.25].map((y, i) => (
          <mesh key={`vent-${i}`} position={[0.21, y, -0.1]}>
            <boxGeometry args={[0.01, 0.015, 0.15]} />
            <meshStandardMaterial color="#222222" />
          </mesh>
        ))}
      </group>
    </group>
  );
}

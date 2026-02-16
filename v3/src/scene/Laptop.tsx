import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Laptop() {
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (screenRef.current) {
      const mat = screenRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.2 + Math.sin(clock.elapsedTime * 1.5) * 0.1;
    }
  });

  return (
    <group position={[2.75, 1.58, -2.8]} rotation={[0, -0.3, 0]}>
      {/* Base / keyboard */}
      <mesh castShadow>
        <boxGeometry args={[0.7, 0.03, 0.45]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Keyboard surface detail */}
      <mesh position={[0, 0.016, -0.02]}>
        <planeGeometry args={[0.6, 0.3]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.016, 0.15]}>
        <planeGeometry args={[0.2, 0.12]} />
        <meshStandardMaterial color="#333333" roughness={0.7} />
      </mesh>

      {/* Screen (angled back) */}
      <group position={[0, 0.25, -0.2]} rotation={[-0.3, 0, 0]}>
        {/* Screen bezel */}
        <mesh>
          <boxGeometry args={[0.68, 0.45, 0.02]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.3} />
        </mesh>
        {/* Screen face */}
        <mesh ref={screenRef} position={[0, 0, 0.011]}>
          <planeGeometry args={[0.6, 0.38]} />
          <meshStandardMaterial
            color="#000000"
            emissive="#2a1a4a"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>
    </group>
  );
}

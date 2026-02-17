import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Printer3D({ position }: { position: [number, number, number] }) {
  const headRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (headRef.current) {
      headRef.current.position.x = Math.sin(clock.elapsedTime * 1.5) * 0.12;
    }
  });

  return (
    <group position={position}>
      {/* Frame — box frame structure */}
      {/* Vertical posts */}
      {[
        [-0.2, 0.15, -0.15],
        [0.2, 0.15, -0.15],
        [-0.2, 0.15, 0.15],
        [0.2, 0.15, 0.15],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <boxGeometry args={[0.025, 0.3, 0.025]} />
          <meshStandardMaterial color="#333" metalness={0.5} />
        </mesh>
      ))}

      {/* Top frame bars */}
      <mesh position={[0, 0.3, -0.15]}>
        <boxGeometry args={[0.44, 0.025, 0.025]} />
        <meshStandardMaterial color="#333" metalness={0.5} />
      </mesh>
      <mesh position={[0, 0.3, 0.15]}>
        <boxGeometry args={[0.44, 0.025, 0.025]} />
        <meshStandardMaterial color="#333" metalness={0.5} />
      </mesh>

      {/* Print bed */}
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[0.35, 0.02, 0.28]} />
        <meshStandardMaterial color="#444" metalness={0.3} />
      </mesh>

      {/* Print head (animated) */}
      <mesh ref={headRef} position={[0, 0.25, 0]}>
        <boxGeometry args={[0.06, 0.04, 0.06]} />
        <meshStandardMaterial color="#e74c3c" metalness={0.3} flatShading />
      </mesh>

      {/* Partially printed object on bed */}
      <mesh position={[0, 0.06, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.08]} />
        <meshStandardMaterial color="#00b4d8" flatShading />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.06, 0.02, 0.06]} />
        <meshStandardMaterial color="#00b4d8" flatShading />
      </mesh>

      {/* Filament spool on side */}
      <mesh position={[0.28, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.06, 0.025, 6, 12]} />
        <meshStandardMaterial color="#f59e0b" flatShading />
      </mesh>
    </group>
  );
}

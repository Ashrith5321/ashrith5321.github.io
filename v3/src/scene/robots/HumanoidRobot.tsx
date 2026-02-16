import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function HumanoidRobot() {
  const groupRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.03;
    }
    [leftEyeRef, rightEyeRef].forEach((ref) => {
      if (ref.current) {
        const mat = ref.current.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = 2.5 + Math.sin(t * 3) * 0.8;
      }
    });
  });

  const metalColor = '#e0e0e0';

  return (
    <group ref={groupRef} position={[3.8, 0, 1.5]}>
      {/* Feet */}
      {[-0.1, 0.1].map((x, i) => (
        <mesh key={`foot-${i}`} position={[x, 0.03, 0]}>
          <boxGeometry args={[0.14, 0.06, 0.2]} />
          <meshStandardMaterial color="#666666" metalness={0.5} flatShading />
        </mesh>
      ))}

      {/* Lower legs */}
      {[-0.1, 0.1].map((x, i) => (
        <mesh key={`lleg-${i}`} position={[x, 0.35, 0]}>
          <cylinderGeometry args={[0.055, 0.06, 0.5, 6]} />
          <meshStandardMaterial color="#a0a0a0" metalness={0.4} flatShading />
        </mesh>
      ))}

      {/* Knee joints */}
      {[-0.1, 0.1].map((x, i) => (
        <mesh key={`knee-${i}`} position={[x, 0.6, 0]}>
          <sphereGeometry args={[0.06, 6, 6]} />
          <meshStandardMaterial color="#888888" metalness={0.5} flatShading />
        </mesh>
      ))}

      {/* Upper legs */}
      {[-0.1, 0.1].map((x, i) => (
        <mesh key={`uleg-${i}`} position={[x, 0.85, 0]}>
          <cylinderGeometry args={[0.06, 0.055, 0.45, 6]} />
          <meshStandardMaterial color="#a0a0a0" metalness={0.4} flatShading />
        </mesh>
      ))}

      {/* Body */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.25, 1.0, 8]} />
        <meshStandardMaterial color={metalColor} metalness={0.6} roughness={0.3} flatShading />
      </mesh>

      {/* Chest plate */}
      <mesh position={[0, 1.5, 0.16]}>
        <boxGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.3} metalness={0.3} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.95, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.1, 6]} />
        <meshStandardMaterial color="#888888" metalness={0.5} flatShading />
      </mesh>

      {/* Head */}
      <mesh position={[0, 2.2, 0]} castShadow>
        <boxGeometry args={[0.35, 0.3, 0.3]} />
        <meshStandardMaterial color={metalColor} metalness={0.6} roughness={0.3} flatShading />
      </mesh>

      {/* Eyes */}
      <mesh ref={leftEyeRef} position={[-0.08, 2.22, 0.16]}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2.5} />
      </mesh>
      <mesh ref={rightEyeRef} position={[0.08, 2.22, 0.16]}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2.5} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 2.45, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.2, 4]} />
        <meshStandardMaterial color="#888888" metalness={0.5} />
      </mesh>
      <mesh position={[0, 2.56, 0]}>
        <sphereGeometry args={[0.025, 6, 6]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff3333" emissiveIntensity={2} />
      </mesh>

      {/* Arms */}
      {/* Shoulders */}
      {[-0.35, 0.35].map((x, i) => (
        <mesh key={`shoulder-${i}`} position={[x, 1.75, 0]}>
          <sphereGeometry args={[0.07, 6, 6]} />
          <meshStandardMaterial color="#888888" metalness={0.5} flatShading />
        </mesh>
      ))}
      {/* Upper arms */}
      {[-0.38, 0.38].map((x, i) => (
        <mesh key={`uarm-${i}`} position={[x, 1.5, 0]}>
          <cylinderGeometry args={[0.05, 0.055, 0.45, 6]} />
          <meshStandardMaterial color="#a0a0a0" metalness={0.4} flatShading />
        </mesh>
      ))}
      {/* Elbow joints */}
      {[-0.38, 0.38].map((x, i) => (
        <mesh key={`elbow-${i}`} position={[x, 1.25, 0]}>
          <sphereGeometry args={[0.05, 6, 6]} />
          <meshStandardMaterial color="#888888" metalness={0.5} flatShading />
        </mesh>
      ))}
      {/* Forearms */}
      {[-0.38, 0.38].map((x, i) => (
        <mesh key={`farm-${i}`} position={[x, 1.02, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.4, 6]} />
          <meshStandardMaterial color="#a0a0a0" metalness={0.4} flatShading />
        </mesh>
      ))}
      {/* Hands */}
      {[-0.38, 0.38].map((x, i) => (
        <mesh key={`hand-${i}`} position={[x, 0.8, 0]}>
          <boxGeometry args={[0.08, 0.06, 0.06]} />
          <meshStandardMaterial color="#888888" metalness={0.5} flatShading />
        </mesh>
      ))}
    </group>
  );
}

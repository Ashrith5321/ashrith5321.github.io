import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RobotLegs() {
  const legRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (legRef.current) {
      // Subtle joint test movement
      const t = clock.elapsedTime;
      legRef.current.rotation.x = Math.sin(t * 0.6) * 0.08;
    }
  });

  const metalColor = '#d0d0d0';
  const jointColor = '#555';
  const accentColor = '#ef4444';

  return (
    <group position={[-8, 0, -3]}>
      {/* Test stand frame */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[0.6, 0.06, 0.4]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Stand legs */}
      {[[-0.25, -0.25], [-0.25, 0.15], [0.25, -0.15], [0.25, 0.15]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.4, z]}>
          <boxGeometry args={[0.04, 0.8, 0.04]} />
          <meshStandardMaterial color="#444" metalness={0.4} />
        </mesh>
      ))}

      {/* The robotic leg assembly — hanging from stand */}
      <group ref={legRef} position={[0, 0.75, 0]}>
        {/* Hip joint */}
        <mesh>
          <sphereGeometry args={[0.06, 8, 6]} />
          <meshStandardMaterial color={jointColor} metalness={0.6} />
        </mesh>

        {/* Upper leg (thigh) */}
        <mesh position={[0, -0.18, 0]}>
          <boxGeometry args={[0.1, 0.32, 0.08]} />
          <meshStandardMaterial color={metalColor} flatShading metalness={0.5} />
        </mesh>

        {/* Accent stripe on thigh */}
        <mesh position={[0.051, -0.18, 0]}>
          <boxGeometry args={[0.002, 0.25, 0.04]} />
          <meshBasicMaterial color={accentColor} />
        </mesh>

        {/* Knee joint */}
        <mesh position={[0, -0.36, 0]}>
          <sphereGeometry args={[0.05, 8, 6]} />
          <meshStandardMaterial color={jointColor} metalness={0.6} />
        </mesh>

        {/* Knee actuator detail */}
        <mesh position={[0.05, -0.36, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.06, 6]} />
          <meshStandardMaterial color={accentColor} flatShading metalness={0.3} />
        </mesh>

        {/* Lower leg (shin) */}
        <mesh position={[0, -0.55, 0.02]}>
          <boxGeometry args={[0.08, 0.32, 0.07]} />
          <meshStandardMaterial color={metalColor} flatShading metalness={0.5} />
        </mesh>

        {/* Ankle joint */}
        <mesh position={[0, -0.73, 0.02]}>
          <sphereGeometry args={[0.04, 8, 6]} />
          <meshStandardMaterial color={jointColor} metalness={0.6} />
        </mesh>

        {/* Foot */}
        <mesh position={[0, -0.78, 0.05]}>
          <boxGeometry args={[0.12, 0.04, 0.2]} />
          <meshStandardMaterial color={metalColor} flatShading metalness={0.5} />
        </mesh>

        {/* Toe section */}
        <mesh position={[0, -0.79, 0.16]}>
          <boxGeometry args={[0.1, 0.02, 0.04]} />
          <meshStandardMaterial color={jointColor} metalness={0.5} />
        </mesh>
      </group>

      {/* Wiring detail */}
      <mesh position={[-0.08, 0.65, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.3, 4]} />
        <meshStandardMaterial color={accentColor} />
      </mesh>
    </group>
  );
}

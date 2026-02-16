import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function DroneBot() {
  const groupRef = useRef<THREE.Group>(null);
  const rotorsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.y = 3.5 + Math.sin(t * 1.5) * 0.1;
      groupRef.current.rotation.z = Math.sin(t * 0.8) * 0.05;
      groupRef.current.rotation.x = Math.sin(t * 0.6) * 0.03;
    }
    if (rotorsRef.current) {
      rotorsRef.current.children.forEach((rotor) => {
        rotor.rotation.y += 0.3;
      });
    }
  });

  const armAngle = Math.PI / 4;
  const armLength = 0.25;
  const arms = [0, 1, 2, 3].map((i) => {
    const angle = armAngle + (i * Math.PI) / 2;
    return {
      x: Math.cos(angle) * armLength,
      z: Math.sin(angle) * armLength,
      rotation: angle,
    };
  });

  return (
    <group ref={groupRef} position={[-2, 3.5, 0.5]}>
      {/* Body */}
      <mesh castShadow>
        <sphereGeometry args={[0.15, 8, 6]} />
        <meshStandardMaterial color="#6366f1" flatShading />
      </mesh>

      {/* Camera underneath */}
      <mesh position={[0, -0.12, 0.05]}>
        <sphereGeometry args={[0.03, 6, 6]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={1.5} />
      </mesh>

      {/* Arms */}
      {arms.map(({ x, z, rotation }, i) => (
        <mesh key={i} position={[x / 2, 0, z / 2]} rotation={[0, -rotation + Math.PI / 2, Math.PI / 2]}>
          <cylinderGeometry args={[0.015, 0.015, armLength, 4]} />
          <meshStandardMaterial color="#333333" metalness={0.3} />
        </mesh>
      ))}

      {/* Motor housings */}
      {arms.map(({ x, z }, i) => (
        <mesh key={`motor-${i}`} position={[x, 0, z]}>
          <cylinderGeometry args={[0.03, 0.03, 0.04, 6]} />
          <meshStandardMaterial color="#444444" metalness={0.4} />
        </mesh>
      ))}

      {/* Rotors */}
      <group ref={rotorsRef}>
        {arms.map(({ x, z }, i) => (
          <mesh key={`rotor-${i}`} position={[x, 0.03, z]}>
            <torusGeometry args={[0.08, 0.008, 4, 12]} />
            <meshBasicMaterial color="#00e5ff" transparent opacity={0.4} />
          </mesh>
        ))}
      </group>

      {/* LED indicator on top */}
      <mesh position={[0, 0.16, 0]}>
        <sphereGeometry args={[0.015, 6, 6]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff3333" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

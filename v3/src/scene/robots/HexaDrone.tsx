import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function HexaDrone() {
  const groupRef = useRef<THREE.Group>(null);
  const rotorsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Hover bob
    if (groupRef.current) {
      groupRef.current.position.y = 5 + Math.sin(t * 1.2) * 0.08;
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.03;
    }
    // Spin rotors
    if (rotorsRef.current) {
      rotorsRef.current.children.forEach((rotor) => {
        rotor.rotation.y += 0.35;
      });
    }
  });

  const arms: [number, number, number][] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    arms.push([Math.sin(angle) * 0.4, 0, Math.cos(angle) * 0.4]);
  }

  return (
    <group ref={groupRef} position={[-4, 5, -3]}>
      {/* Central body — hexagonal plate */}
      <mesh castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.08, 6]} />
        <meshStandardMaterial color="#333" flatShading metalness={0.5} />
      </mesh>

      {/* Top dome (sensor housing) */}
      <mesh position={[0, 0.06, 0]}>
        <sphereGeometry args={[0.08, 6, 4]} />
        <meshStandardMaterial color="#444" flatShading metalness={0.5} />
      </mesh>

      {/* Bottom camera/payload */}
      <mesh position={[0, -0.06, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 0.04, 6]} />
        <meshStandardMaterial color="#222" metalness={0.4} />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <sphereGeometry args={[0.025, 6, 6]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={1.5} />
      </mesh>

      {/* Arms */}
      {arms.map((pos, i) => {
        const angle = (i * Math.PI * 2) / 6;
        return (
          <group key={i}>
            {/* Arm tube */}
            <mesh position={[pos[0] / 2, 0, pos[2] / 2]} rotation={[0, -angle, Math.PI / 2]}>
              <cylinderGeometry args={[0.015, 0.015, 0.4, 4]} />
              <meshStandardMaterial color="#555" metalness={0.5} />
            </mesh>
            {/* Motor housing at tip */}
            <mesh position={pos}>
              <cylinderGeometry args={[0.035, 0.035, 0.04, 6]} />
              <meshStandardMaterial color="#444" metalness={0.5} />
            </mesh>
          </group>
        );
      })}

      {/* Rotor discs (spinning) */}
      <group ref={rotorsRef}>
        {arms.map((pos, i) => (
          <mesh key={`rotor-${i}`} position={[pos[0], 0.03, pos[2]]}>
            <cylinderGeometry args={[0.08, 0.08, 0.005, 3]} />
            <meshStandardMaterial color="#aaa" transparent opacity={0.3} flatShading />
          </mesh>
        ))}
      </group>

      {/* Landing gear legs */}
      {[-0.12, 0.12].map((x, i) => (
        <group key={`gear-${i}`}>
          <mesh position={[x, -0.12, -0.08]}>
            <cylinderGeometry args={[0.008, 0.008, 0.12, 4]} />
            <meshStandardMaterial color="#555" metalness={0.4} />
          </mesh>
          <mesh position={[x, -0.12, 0.08]}>
            <cylinderGeometry args={[0.008, 0.008, 0.12, 4]} />
            <meshStandardMaterial color="#555" metalness={0.4} />
          </mesh>
        </group>
      ))}

      {/* Downward light */}
      <pointLight position={[0, -0.15, 0]} color="#00e5ff" intensity={3} distance={3} decay={2} />
    </group>
  );
}

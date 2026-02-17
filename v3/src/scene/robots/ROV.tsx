import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ROV() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Subtle hovering movement as if underwater
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.7) * 0.02;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.5) * 0.015;
    }
  });

  const hullColor = '#f59e0b';
  const frameColor = '#444';

  return (
    <group ref={groupRef} position={[7, 1.3, -5]}>
      {/* Main hull — torpedo-ish body */}
      <mesh castShadow>
        <boxGeometry args={[0.35, 0.2, 0.5]} />
        <meshStandardMaterial color={hullColor} flatShading metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Frame cage around hull */}
      {/* Top bars */}
      <mesh position={[0, 0.14, 0]}>
        <boxGeometry args={[0.4, 0.02, 0.55]} />
        <meshStandardMaterial color={frameColor} metalness={0.5} />
      </mesh>
      {/* Bottom bars */}
      <mesh position={[0, -0.14, 0]}>
        <boxGeometry args={[0.4, 0.02, 0.55]} />
        <meshStandardMaterial color={frameColor} metalness={0.5} />
      </mesh>

      {/* Camera dome — front */}
      <mesh position={[0, 0, 0.28]}>
        <sphereGeometry args={[0.06, 8, 6]} />
        <meshStandardMaterial
          color="#88ccee"
          transparent
          opacity={0.6}
          metalness={0.3}
        />
      </mesh>
      {/* Camera lens inside dome */}
      <mesh position={[0, 0, 0.3]}>
        <sphereGeometry args={[0.025, 6, 6]} />
        <meshStandardMaterial color="#111" metalness={0.6} />
      </mesh>

      {/* Thrusters — 4 horizontal */}
      {[
        [-0.2, 0, 0.2],
        [0.2, 0, 0.2],
        [-0.2, 0, -0.2],
        [0.2, 0, -0.2],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.03, 0.025, 0.06, 6]} />
            <meshStandardMaterial color="#333" metalness={0.5} />
          </mesh>
          {/* Propeller inside */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.02, 0.02, 0.003, 3]} />
            <meshStandardMaterial color="#888" />
          </mesh>
        </group>
      ))}

      {/* Vertical thrusters */}
      {[-0.1, 0.1].map((x, i) => (
        <mesh key={`vt-${i}`} position={[x, 0.12, 0]}>
          <cylinderGeometry args={[0.025, 0.02, 0.05, 6]} />
          <meshStandardMaterial color="#333" metalness={0.5} />
        </mesh>
      ))}

      {/* Lights — front */}
      {[-0.1, 0.1].map((x, i) => (
        <group key={`light-${i}`}>
          <mesh position={[x, 0.04, 0.26]}>
            <sphereGeometry args={[0.02, 6, 6]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
          </mesh>
        </group>
      ))}

      {/* Tether cable stub */}
      <mesh position={[0, 0.05, -0.28]}>
        <cylinderGeometry args={[0.015, 0.015, 0.08, 4]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Accent light */}
      <pointLight position={[0, 0, 0.3]} color="#ffffff" intensity={1} distance={1} decay={2} />
    </group>
  );
}

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Group } from 'three';

const SKIN = '#c4956a';
const HAIR = '#2a1a0a';
const HOODIE = '#2563eb';
const JEANS = '#334155';
const SHOE = '#222222';

export function Driver() {
  const headRef = useRef<Group>(null);

  // Subtle idle head turn animation
  useFrame(({ clock }) => {
    if (headRef.current) {
      const t = clock.elapsedTime;
      headRef.current.rotation.y = Math.sin(t * 0.4) * 0.08;
      headRef.current.rotation.x = Math.sin(t * 0.6) * 0.02;
    }
  });

  return (
    <group position={[-0.4, 0.45, 0.2]}>
      {/* Head */}
      <group ref={headRef} position={[0, 0.58, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.11, 10, 8]} />
          <meshStandardMaterial color={SKIN} flatShading />
        </mesh>

        {/* Hair (flat cap / short hair) */}
        <mesh position={[0, 0.04, -0.01]} scale={[1.05, 0.6, 1.05]}>
          <sphereGeometry args={[0.12, 8, 6]} />
          <meshStandardMaterial color={HAIR} flatShading />
        </mesh>
        {/* Hair front */}
        <mesh position={[0, 0.05, 0.06]} scale={[0.8, 0.3, 0.3]}>
          <sphereGeometry args={[0.09, 6, 4]} />
          <meshStandardMaterial color={HAIR} flatShading />
        </mesh>

        {/* Glasses frames */}
        {([-0.04, 0.04] as const).map((x, i) => (
          <mesh key={`lens-${i}`} position={[x, 0, 0.1]}>
            <torusGeometry args={[0.025, 0.004, 4, 8]} />
            <meshStandardMaterial color="#333" metalness={0.5} />
          </mesh>
        ))}
        {/* Glasses bridge */}
        <mesh position={[0, 0, 0.105]}>
          <boxGeometry args={[0.02, 0.004, 0.004]} />
          <meshStandardMaterial color="#333" metalness={0.5} />
        </mesh>

        {/* Ears */}
        {([-0.11, 0.11] as const).map((x, i) => (
          <mesh key={`ear-${i}`} position={[x, -0.01, 0]}>
            <sphereGeometry args={[0.022, 5, 5]} />
            <meshStandardMaterial color={SKIN} flatShading />
          </mesh>
        ))}
      </group>

      {/* Neck */}
      <mesh position={[0, 0.46, 0]}>
        <cylinderGeometry args={[0.028, 0.032, 0.06, 6]} />
        <meshStandardMaterial color={SKIN} flatShading />
      </mesh>

      {/* Torso (Michigan hoodie) */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[0.28, 0.3, 0.16]} />
        <meshStandardMaterial color={HOODIE} flatShading />
      </mesh>

      {/* "M" logo on chest */}
      <mesh position={[0, 0.34, 0.085]}>
        <boxGeometry args={[0.05, 0.06, 0.003]} />
        <meshStandardMaterial color="#f59e0b" flatShading />
      </mesh>

      {/* Left upper arm (reaching to wheel) */}
      <mesh position={[-0.2, 0.35, 0.05]} rotation={[0.6, 0.3, 0.4]} castShadow>
        <cylinderGeometry args={[0.035, 0.03, 0.2, 6]} />
        <meshStandardMaterial color={HOODIE} flatShading />
      </mesh>
      {/* Left forearm */}
      <mesh position={[-0.3, 0.3, 0.2]} rotation={[1.2, 0.2, 0.2]}>
        <cylinderGeometry args={[0.028, 0.025, 0.18, 6]} />
        <meshStandardMaterial color={HOODIE} flatShading />
      </mesh>
      {/* Left hand (on steering wheel area) */}
      <mesh position={[-0.32, 0.28, 0.35]}>
        <boxGeometry args={[0.035, 0.02, 0.03]} />
        <meshStandardMaterial color={SKIN} flatShading />
      </mesh>

      {/* Right upper arm (reaching to wheel) */}
      <mesh position={[0.2, 0.35, 0.05]} rotation={[0.6, -0.3, -0.4]} castShadow>
        <cylinderGeometry args={[0.035, 0.03, 0.2, 6]} />
        <meshStandardMaterial color={HOODIE} flatShading />
      </mesh>
      {/* Right forearm */}
      <mesh position={[0.3, 0.3, 0.2]} rotation={[1.2, -0.2, -0.2]}>
        <cylinderGeometry args={[0.028, 0.025, 0.18, 6]} />
        <meshStandardMaterial color={HOODIE} flatShading />
      </mesh>
      {/* Right hand (on steering wheel area) */}
      <mesh position={[0.32, 0.28, 0.35]}>
        <boxGeometry args={[0.035, 0.02, 0.03]} />
        <meshStandardMaterial color={SKIN} flatShading />
      </mesh>

      {/* Left thigh (seated, bent 90 degrees) */}
      <mesh position={[-0.08, 0.12, 0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.04, 0.22, 6]} />
        <meshStandardMaterial color={JEANS} flatShading />
      </mesh>
      {/* Left shin (bent down at knee) */}
      <mesh position={[-0.08, 0.0, 0.22]}>
        <cylinderGeometry args={[0.038, 0.035, 0.2, 6]} />
        <meshStandardMaterial color={JEANS} flatShading />
      </mesh>
      {/* Left shoe */}
      <mesh position={[-0.08, -0.1, 0.26]}>
        <boxGeometry args={[0.06, 0.04, 0.1]} />
        <meshStandardMaterial color={SHOE} flatShading />
      </mesh>

      {/* Right thigh (seated, bent 90 degrees) */}
      <mesh position={[0.08, 0.12, 0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.04, 0.22, 6]} />
        <meshStandardMaterial color={JEANS} flatShading />
      </mesh>
      {/* Right shin (bent down at knee) */}
      <mesh position={[0.08, 0.0, 0.22]}>
        <cylinderGeometry args={[0.038, 0.035, 0.2, 6]} />
        <meshStandardMaterial color={JEANS} flatShading />
      </mesh>
      {/* Right shoe */}
      <mesh position={[0.08, -0.1, 0.26]}>
        <boxGeometry args={[0.06, 0.04, 0.1]} />
        <meshStandardMaterial color={SHOE} flatShading />
      </mesh>
    </group>
  );
}

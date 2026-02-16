import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RoboticArm() {
  const seg1Ref = useRef<THREE.Group>(null);
  const seg2Ref = useRef<THREE.Group>(null);
  const gripperRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (seg1Ref.current) {
      seg1Ref.current.rotation.z = Math.sin(t * 0.5) * 0.2 + 0.3;
    }
    if (seg2Ref.current) {
      seg2Ref.current.rotation.z = Math.sin(t * 0.7 + 1) * 0.15 - 0.2;
    }
    if (gripperRef.current) {
      const grip = Math.sin(t * 1.5) * 0.05 + 0.08;
      gripperRef.current.children[0].position.x = grip;
      gripperRef.current.children[1].position.x = -grip;
    }
  });

  return (
    <group position={[2.5, 1.58, -2.3]}>
      {/* Base */}
      <mesh castShadow>
        <cylinderGeometry args={[0.15, 0.18, 0.1, 8]} />
        <meshStandardMaterial color="#444444" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Turntable */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.04, 8]} />
        <meshStandardMaterial color="#555555" metalness={0.4} />
      </mesh>

      {/* Segment 1 */}
      <group ref={seg1Ref} position={[0, 0.1, 0]}>
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[0.08, 0.4, 0.08]} />
          <meshStandardMaterial color="#e74c3c" flatShading metalness={0.2} />
        </mesh>

        {/* Joint 1 */}
        <mesh position={[0, 0.44, 0]}>
          <sphereGeometry args={[0.055, 8, 6]} />
          <meshStandardMaterial color="#555555" metalness={0.5} flatShading />
        </mesh>

        {/* Segment 2 */}
        <group ref={seg2Ref} position={[0, 0.44, 0]}>
          <mesh position={[0, 0.18, 0]}>
            <boxGeometry args={[0.06, 0.35, 0.06]} />
            <meshStandardMaterial color="#e74c3c" flatShading metalness={0.2} />
          </mesh>

          {/* Joint 2 */}
          <mesh position={[0, 0.36, 0]}>
            <sphereGeometry args={[0.04, 6, 6]} />
            <meshStandardMaterial color="#555555" metalness={0.5} flatShading />
          </mesh>

          {/* Gripper */}
          <group ref={gripperRef} position={[0, 0.42, 0]}>
            {/* Left gripper finger */}
            <mesh position={[0.08, 0, 0]}>
              <boxGeometry args={[0.02, 0.12, 0.03]} />
              <meshStandardMaterial color="#666666" metalness={0.4} flatShading />
            </mesh>
            {/* Right gripper finger */}
            <mesh position={[-0.08, 0, 0]}>
              <boxGeometry args={[0.02, 0.12, 0.03]} />
              <meshStandardMaterial color="#666666" metalness={0.4} flatShading />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

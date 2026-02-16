import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FloatingParticles({ count = 150 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Concentrate particles around the desk lamp area
      positions[i * 3] = (Math.random() - 0.5) * 5 - 0.5;
      positions[i * 3 + 1] = Math.random() * 4 + 0.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1;

      velocities[i * 3] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 1] = Math.random() * 0.003 + 0.001;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return { positions, velocities };
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position;
    const arr = pos.array as Float32Array;
    const t = clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3] + Math.sin(t + i) * 0.0005;
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2] + Math.cos(t + i * 0.7) * 0.0005;

      // Reset particle when it goes too high
      if (arr[i * 3 + 1] > 5) {
        arr[i * 3] = (Math.random() - 0.5) * 5 - 0.5;
        arr[i * 3 + 1] = 0.5;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1;
      }
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#c0a060"
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </points>
  );
}

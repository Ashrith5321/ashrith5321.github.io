import { useMemo } from 'react';
import * as THREE from 'three';

export function Skybox() {
  // Generate star positions on upper hemisphere
  const starPositions = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.45; // upper hemisphere only
      const r = 70 + Math.random() * 8;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return positions;
  }, []);

  // Generate building data for city skyline
  const buildings = useMemo(() => {
    const result: Array<{
      x: number;
      z: number;
      width: number;
      depth: number;
      height: number;
      windows: Array<{ wx: number; wy: number }>;
    }> = [];
    for (let i = 0; i < 18; i++) {
      const angle = ((i - 9) / 18) * Math.PI * 0.6; // arc behind car
      const distance = 62 + Math.random() * 8;
      const height = 5 + Math.random() * 20;
      const width = 2 + Math.random() * 3;
      const depth = 2 + Math.random() * 3;

      // Random lit windows
      const windowCount = Math.floor(Math.random() * 5) + 2;
      const windows: Array<{ wx: number; wy: number }> = [];
      for (let w = 0; w < windowCount; w++) {
        windows.push({
          wx: (Math.random() - 0.5) * (width * 0.7),
          wy: Math.random() * (height * 0.8) - height * 0.1,
        });
      }

      result.push({
        x: Math.sin(angle) * distance,
        z: -Math.cos(angle) * distance,
        width,
        depth,
        height,
        windows,
      });
    }
    return result;
  }, []);

  return (
    <group>
      {/* Sky dome */}
      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry args={[80, 32, 16]} />
        <meshBasicMaterial color="#050510" side={THREE.BackSide} />
      </mesh>

      {/* Moon */}
      <group position={[30, 40, -50]}>
        <mesh>
          <sphereGeometry args={[3, 16, 16]} />
          <meshStandardMaterial
            color="#ffffee"
            emissive="#ffffcc"
            emissiveIntensity={0.6}
          />
        </mesh>
        <pointLight color="#aaaacc" intensity={0.3} distance={100} />
      </group>

      {/* Stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[starPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.15} sizeAttenuation />
      </points>

      {/* City skyline buildings */}
      {buildings.map((b, i) => (
        <group key={`building-${i}`} position={[b.x, b.height / 2, b.z]}>
          {/* Building body */}
          <mesh>
            <boxGeometry args={[b.width, b.height, b.depth]} />
            <meshStandardMaterial color="#0a0a15" roughness={0.9} />
          </mesh>

          {/* Lit windows */}
          {b.windows.map((w, wi) => (
            <mesh
              key={`win-${i}-${wi}`}
              position={[w.wx, w.wy, b.depth / 2 + 0.01]}
            >
              <planeGeometry args={[0.3, 0.4]} />
              <meshStandardMaterial
                color="#ffdd88"
                emissive="#ffcc66"
                emissiveIntensity={0.8}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

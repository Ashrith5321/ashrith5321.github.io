import { useMemo } from 'react';

// ============================================================
// Wheels.tsx — Tesla Model 3 style wheel assemblies
// 4 wheels with torus tire, cylinder rim, and 5 radial spokes.
// Wheel diameter: ~0.65, tire width: ~0.22.
// Front axle z=+1.45, rear axle z=-1.45.
// Left x=-0.85, right x=+0.85. Wheels touch y=0.
// ============================================================

// --- Single wheel assembly ---
interface WheelProps {
  position: [number, number, number];
  side: 'left' | 'right';
}

function Wheel({ position, side }: WheelProps) {
  const wheelRadius = 0.325; // half of 0.65 diameter
  const tireWidth = 0.22;
  const rimRadius = 0.24;
  const spokeCount = 5;

  // Pre-compute spoke rotation angles
  const spokeAngles = useMemo(() => {
    return Array.from({ length: spokeCount }, (_, i) => (i * Math.PI * 2) / spokeCount);
  }, []);

  // Wheel faces outward on each side
  const flipY = side === 'left' ? Math.PI / 2 : -Math.PI / 2;

  return (
    <group position={position} rotation={[0, flipY, 0]}>

      {/* Tire — black rubber torus */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[wheelRadius - 0.04, 0.08, 12, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* Tire sidewall — cylinder giving the tire its width/volume */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[wheelRadius, wheelRadius, tireWidth, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* Rim — chrome/silver disc */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[rimRadius, rimRadius, tireWidth * 0.6, 32]} />
        <meshStandardMaterial
          color="#c8c8d0"
          metalness={0.95}
          roughness={0.08}
        />
      </mesh>

      {/* Hub center cap */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, tireWidth * 0.31]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
        <meshStandardMaterial
          color="#888890"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* 5 Spokes — Tesla aero hubcap style (radial boxes) */}
      {spokeAngles.map((angle, i) => {
        const spokeLength = rimRadius - 0.06;
        const cx = Math.cos(angle) * (spokeLength / 2 + 0.03);
        const cy = Math.sin(angle) * (spokeLength / 2 + 0.03);
        return (
          <mesh
            key={i}
            position={[cx, cy, tireWidth * 0.28]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[spokeLength, 0.04, 0.015]} />
            <meshStandardMaterial
              color="#a0a0a8"
              metalness={0.9}
              roughness={0.12}
            />
          </mesh>
        );
      })}

      {/* Aero cover triangular panels between spokes */}
      {spokeAngles.map((angle, i) => {
        const nextAngle = spokeAngles[(i + 1) % spokeCount];
        const midAngle = (angle + nextAngle) / 2 + (i === spokeCount - 1 ? Math.PI : 0);
        const panelDist = rimRadius * 0.55;
        const px = Math.cos(midAngle) * panelDist;
        const py = Math.sin(midAngle) * panelDist;
        return (
          <mesh
            key={`panel-${i}`}
            position={[px, py, tireWidth * 0.27]}
            rotation={[0, 0, midAngle]}
          >
            <boxGeometry args={[0.1, 0.06, 0.01]} />
            <meshStandardMaterial
              color="#b0b0b8"
              metalness={0.85}
              roughness={0.15}
            />
          </mesh>
        );
      })}

      {/* Brake disc — visible behind rim (dark metallic) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[rimRadius * 0.85, rimRadius * 0.85, 0.02, 24]} />
        <meshStandardMaterial
          color="#555555"
          metalness={0.7}
          roughness={0.4}
        />
      </mesh>

    </group>
  );
}

// ============================================================
// All 4 wheels positioned at car corners
// ============================================================
export function Wheels() {
  const wheelY = 0.325; // radius — wheel center so tires touch y=0

  return (
    <group name="wheels">
      {/* Front left (driver side) */}
      <Wheel position={[-0.85, wheelY, 1.45]} side="left" />
      {/* Front right (passenger side) */}
      <Wheel position={[0.85, wheelY, 1.45]} side="right" />
      {/* Rear left */}
      <Wheel position={[-0.85, wheelY, -1.45]} side="left" />
      {/* Rear right */}
      <Wheel position={[0.85, wheelY, -1.45]} side="right" />
    </group>
  );
}

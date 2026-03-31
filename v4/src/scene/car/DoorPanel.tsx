/**
 * DoorPanel.tsx — Inner door panel (Tesla Model 3 style)
 *
 * Props:
 *   side: 'left' | 'right' — automatically mirrors geometry
 *
 * Features: main panel, armrest, speaker grille, window controls,
 * door pull handle. Material is dark gray, distinct from seat leather.
 *
 * Door panels sit at x ≈ ±0.85, spanning roughly z = -0.3 to 1.4
 */

interface DoorPanelProps {
  side: 'left' | 'right';
}

function DoorPanelSingle({ side }: DoorPanelProps) {
  const mirror = side === 'left' ? -1 : 1;
  const x = 0.85 * mirror;

  // Main panel material — slightly warmer gray than seats
  const panelMaterial = (
    <meshStandardMaterial
      color="#262626"
      metalness={0.1}
      roughness={0.85}
    />
  );

  // Armrest soft-touch material
  const armrestMaterial = (
    <meshStandardMaterial
      color="#1e1e1e"
      metalness={0.15}
      roughness={0.8}
    />
  );

  return (
    <group name={`door-panel-${side}`}>
      {/* ───────── Main door panel surface ───────── */}
      <mesh position={[x, 0.7, 0.55]} castShadow receiveShadow>
        <boxGeometry args={[0.05, 0.65, 1.1]} />
        {panelMaterial}
      </mesh>

      {/* Upper door trim — lighter accent strip */}
      <mesh position={[x, 1.0, 0.55]}>
        <boxGeometry args={[0.04, 0.03, 1.05]} />
        <meshStandardMaterial color="#303030" metalness={0.2} roughness={0.7} />
      </mesh>

      {/* ───────── Armrest ───────── */}
      {/* Protruding horizontal rest at elbow height */}
      <mesh
        position={[x - 0.04 * mirror, 0.8, 0.45]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.1, 0.05, 0.4]} />
        {armrestMaterial}
      </mesh>

      {/* Armrest top pad — slightly softer surface */}
      <mesh position={[x - 0.04 * mirror, 0.83, 0.45]}>
        <boxGeometry args={[0.09, 0.02, 0.38]} />
        {armrestMaterial}
      </mesh>

      {/* ───────── Window control buttons ───────── */}
      {/* Raised rectangle on armrest surface */}
      <mesh position={[x - 0.04 * mirror, 0.845, 0.55]}>
        <boxGeometry args={[0.06, 0.008, 0.1]} />
        <meshStandardMaterial color="#111111" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Individual button nubs (4 window switches) */}
      {[0, 0.022, 0.044, 0.066].map((offset, i) => (
        <mesh
          key={i}
          position={[x - 0.04 * mirror, 0.85, 0.525 + offset]}
        >
          <boxGeometry args={[0.015, 0.006, 0.016]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.4} roughness={0.5} />
        </mesh>
      ))}

      {/* ───────── Door pull handle ───────── */}
      {/* Thin horizontal bar recessed into the panel */}
      <mesh position={[x - 0.02 * mirror, 0.78, 0.7]}>
        <boxGeometry args={[0.025, 0.02, 0.18]} />
        <meshStandardMaterial color="#444444" metalness={0.6} roughness={0.35} />
      </mesh>

      {/* ───────── Speaker grille ───────── */}
      {/* Circular cluster of small dots representing the speaker mesh */}
      <group position={[x - 0.005 * mirror, 0.5, 0.35]}>
        {/* Speaker housing ring */}
        <mesh rotation={[0, Math.PI / 2 * mirror, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 24]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.8} />
        </mesh>

        {/* Grille dots — concentric rings of small circles */}
        {Array.from({ length: 3 }, (_, ring) => {
          const radius = 0.02 + ring * 0.02;
          const count = 6 + ring * 4;
          return Array.from({ length: count }, (_, j) => {
            const angle = (j / count) * Math.PI * 2;
            const py = Math.sin(angle) * radius;
            const pz = Math.cos(angle) * radius;
            return (
              <mesh
                key={`${ring}-${j}`}
                position={[-0.01 * mirror, py, pz]}
              >
                <sphereGeometry args={[0.004, 6, 6]} />
                <meshStandardMaterial
                  color="#0d0d0d"
                  metalness={0.1}
                  roughness={0.9}
                />
              </mesh>
            );
          });
        })}
      </group>

      {/* ───────── Lower door pocket ───────── */}
      {/* Storage bin at the bottom of the door */}
      <mesh position={[x - 0.02 * mirror, 0.45, 0.55]} receiveShadow>
        <boxGeometry args={[0.06, 0.1, 0.5]} />
        <meshStandardMaterial color="#151515" metalness={0.05} roughness={0.95} />
      </mesh>
    </group>
  );
}

/**
 * DoorPanels — renders both left (driver) and right (passenger) door panels.
 */
export function DoorPanels() {
  return (
    <group name="door-panels">
      <DoorPanelSingle side="left" />
      <DoorPanelSingle side="right" />
    </group>
  );
}

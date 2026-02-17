import { COLORS } from '../data/sceneConfig';

export function Room() {
  // Room dimensions: 20 wide (x) × 8 tall (y) × 16 deep (z)
  const W = 20, H = 8, D = 16;

  return (
    <group>
      {/* Floor — polished concrete */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[W, 0.1, D]} />
        <meshStandardMaterial color={COLORS.floor} roughness={0.85} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, H / 2, -D / 2]} receiveShadow>
        <boxGeometry args={[W, H, 0.15]} />
        <meshStandardMaterial color={COLORS.wallDark} roughness={0.85} />
      </mesh>

      {/* Left Wall — with window cutouts */}
      <group>
        {/* Below windows */}
        <mesh position={[-W / 2, 1.2, 0]}>
          <boxGeometry args={[0.15, 2.4, D]} />
          <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
        </mesh>
        {/* Above windows */}
        <mesh position={[-W / 2, H - 1, 0]}>
          <boxGeometry args={[0.15, 2, D]} />
          <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
        </mesh>
        {/* Pillars between windows */}
        {[-6, -2, 2, 6].map((z, i) => (
          <mesh key={`pillar-${i}`} position={[-W / 2, 4, z]}>
            <boxGeometry args={[0.15, 2.4, 0.6]} />
            <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
          </mesh>
        ))}
      </group>

      {/* Right Wall */}
      <mesh position={[W / 2, H / 2, 0]}>
        <boxGeometry args={[0.15, H, D]} />
        <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, H, 0]}>
        <boxGeometry args={[W, 0.1, D]} />
        <meshStandardMaterial color={COLORS.ceiling} roughness={1.0} />
      </mesh>

      {/* Front wall (partial — open feel with large opening) */}
      <mesh position={[-W / 2 + 2, H / 2, D / 2]}>
        <boxGeometry args={[4, H, 0.15]} />
        <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
      </mesh>
      <mesh position={[W / 2 - 2, H / 2, D / 2]}>
        <boxGeometry args={[4, H, 0.15]} />
        <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
      </mesh>
      {/* Front wall top (above opening) */}
      <mesh position={[0, H - 0.75, D / 2]}>
        <boxGeometry args={[12, 1.5, 0.15]} />
        <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
      </mesh>

      {/* Baseboard trims */}
      <mesh position={[0, 0.075, -D / 2 + 0.08]}>
        <boxGeometry args={[W, 0.15, 0.05]} />
        <meshStandardMaterial color="#8a7a6a" />
      </mesh>
      <mesh position={[W / 2 - 0.08, 0.075, 0]}>
        <boxGeometry args={[0.05, 0.15, D]} />
        <meshStandardMaterial color="#8a7a6a" />
      </mesh>

      {/* ===== OVERHEAD INDUSTRIAL RAILS ===== */}
      {/* Main rail running lengthwise */}
      <mesh position={[0, H - 0.3, 0]}>
        <boxGeometry args={[0.12, 0.25, D - 1]} />
        <meshStandardMaterial color="#666" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Secondary rail */}
      <mesh position={[-5, H - 0.3, 0]}>
        <boxGeometry args={[0.12, 0.25, D - 1]} />
        <meshStandardMaterial color="#666" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Cross beams */}
      {[-6, -3, 0, 3, 6].map((z, i) => (
        <mesh key={`beam-${i}`} position={[-2.5, H - 0.3, z]}>
          <boxGeometry args={[5.5, 0.15, 0.1]} />
          <meshStandardMaterial color="#555" metalness={0.5} roughness={0.4} />
        </mesh>
      ))}

      {/* ===== NEON ACCENT STRIPS ===== */}

      {/* Cyan strip — ceiling edge along back wall */}
      <mesh position={[0, H - 0.1, -D / 2 + 0.15]}>
        <boxGeometry args={[W - 1, 0.04, 0.04]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>

      {/* Cyan strip — ceiling edge along right wall */}
      <mesh position={[W / 2 - 0.15, H - 0.1, 0]}>
        <boxGeometry args={[0.04, 0.04, D - 1]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>

      {/* Floor accent — back wall */}
      <mesh position={[0, 0.02, -D / 2 + 0.1]}>
        <boxGeometry args={[W - 0.5, 0.02, 0.02]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>

      {/* Floor accent — right wall */}
      <mesh position={[W / 2 - 0.1, 0.02, 0]}>
        <boxGeometry args={[0.02, 0.02, D - 0.5]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>

      {/* Magenta strip — under desk area */}
      <mesh position={[0, 0.08, -5.95]}>
        <boxGeometry args={[3.8, 0.03, 0.03]} />
        <meshBasicMaterial color="#ff00ff" />
      </mesh>

      {/* Purple strip — behind monitors */}
      <mesh position={[0, 2.5, -D / 2 + 0.12]}>
        <boxGeometry args={[2.8, 0.03, 0.03]} />
        <meshBasicMaterial color="#7c3aed" />
      </mesh>
    </group>
  );
}

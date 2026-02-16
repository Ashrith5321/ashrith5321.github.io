import { COLORS } from '../data/sceneConfig';

export function Room() {
  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[10, 0.1, 8]} />
        <meshStandardMaterial color={COLORS.floor} roughness={0.9} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 3, -4]} receiveShadow>
        <boxGeometry args={[10, 6, 0.15]} />
        <meshStandardMaterial color={COLORS.wallDark} roughness={0.85} />
      </mesh>

      {/* Left Wall - with window cutout (upper and lower parts) */}
      <group>
        {/* Left wall - below window */}
        <mesh position={[-5, 1, 0]}>
          <boxGeometry args={[0.15, 2, 8]} />
          <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
        </mesh>
        {/* Left wall - above window */}
        <mesh position={[-5, 5, 0]}>
          <boxGeometry args={[0.15, 2, 8]} />
          <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
        </mesh>
        {/* Left wall - left of window */}
        <mesh position={[-5, 3, 2.5]}>
          <boxGeometry args={[0.15, 2, 3]} />
          <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
        </mesh>
        {/* Left wall - right of window */}
        <mesh position={[-5, 3, -2.5]}>
          <boxGeometry args={[0.15, 2, 3]} />
          <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
        </mesh>
      </group>

      {/* Right Wall */}
      <mesh position={[5, 3, 0]}>
        <boxGeometry args={[0.15, 6, 8]} />
        <meshStandardMaterial color={COLORS.wallSide} roughness={0.85} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 6, 0]}>
        <boxGeometry args={[10, 0.1, 8]} />
        <meshStandardMaterial color={COLORS.ceiling} roughness={1.0} />
      </mesh>

      {/* Baseboard trims */}
      <mesh position={[0, 0.075, -3.92]}>
        <boxGeometry args={[10, 0.15, 0.05]} />
        <meshStandardMaterial color="#8a7a6a" />
      </mesh>
      <mesh position={[4.92, 0.075, 0]}>
        <boxGeometry args={[0.05, 0.15, 8]} />
        <meshStandardMaterial color="#8a7a6a" />
      </mesh>

      {/* ======= VISIBLE NEON TUBE GEOMETRY ======= */}

      {/* Neon tube - ceiling edge along back wall (cyan) */}
      <mesh position={[0, 5.9, -3.85]}>
        <boxGeometry args={[9, 0.04, 0.04]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>

      {/* Neon tube - ceiling edge along right wall (cyan) */}
      <mesh position={[4.85, 5.9, 0]}>
        <boxGeometry args={[0.04, 0.04, 7]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>

      {/* Neon tube - under desk front edge (magenta) */}
      <mesh position={[0, 0.08, -2.05]}>
        <boxGeometry args={[3.8, 0.03, 0.03]} />
        <meshBasicMaterial color="#ff00ff" />
      </mesh>

      {/* Neon tube - behind monitors (purple) */}
      <mesh position={[0, 2.5, -3.88]}>
        <boxGeometry args={[2.8, 0.03, 0.03]} />
        <meshBasicMaterial color="#7c3aed" />
      </mesh>

      {/* Neon accent strip - floor edge along back wall */}
      <mesh position={[0, 0.02, -3.9]}>
        <boxGeometry args={[9.5, 0.02, 0.02]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>

      {/* Neon accent strip - floor edge along right wall */}
      <mesh position={[4.9, 0.02, 0]}>
        <boxGeometry args={[0.02, 0.02, 7.5]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>
    </group>
  );
}

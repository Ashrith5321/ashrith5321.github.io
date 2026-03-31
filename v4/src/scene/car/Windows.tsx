// ============================================================
// Windows.tsx — Tesla Model 3 style glass surfaces
// Uses meshPhysicalMaterial with transmission for realistic glass.
// Car: front = +Z, driver = -X.
// ============================================================

// Shared glass material properties
function GlassMaterial() {
  return (
    <meshPhysicalMaterial
      color="#88aacc"
      transmission={0.85}
      roughness={0.05}
      thickness={0.02}
      metalness={0.1}
      transparent={true}
      opacity={0.3}
    />
  );
}

export function Windows() {
  const bodyWidth = 1.85;
  const bodyLength = 4.8;

  return (
    <group name="windows">

      {/* ========================================
          Windshield — front, angled ~30 deg from vertical
          ======================================== */}
      <mesh
        position={[0, 1.12, bodyLength * 0.14]}
        rotation={[-1.05, 0, 0]}
      >
        <planeGeometry args={[bodyWidth * 0.76, 0.6]} />
        <GlassMaterial />
      </mesh>

      {/* ========================================
          Rear window — angled back
          ======================================== */}
      <mesh
        position={[0, 1.1, -bodyLength * 0.28]}
        rotation={[-2.0, 0, 0]}
      >
        <planeGeometry args={[bodyWidth * 0.7, 0.55]} />
        <GlassMaterial />
      </mesh>

      {/* ========================================
          Side windows — 4 total (front/rear, driver/passenger)
          ======================================== */}
      {/* Left front (driver) */}
      <mesh
        position={[-bodyWidth * 0.455, 1.0, 0.35]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <planeGeometry args={[0.55, 0.35]} />
        <GlassMaterial />
      </mesh>

      {/* Left rear (driver side) */}
      <mesh
        position={[-bodyWidth * 0.455, 0.98, -0.35]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <planeGeometry args={[0.5, 0.32]} />
        <GlassMaterial />
      </mesh>

      {/* Right front (passenger) */}
      <mesh
        position={[bodyWidth * 0.455, 1.0, 0.35]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <planeGeometry args={[0.55, 0.35]} />
        <GlassMaterial />
      </mesh>

      {/* Right rear (passenger side) */}
      <mesh
        position={[bodyWidth * 0.455, 0.98, -0.35]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <planeGeometry args={[0.5, 0.32]} />
        <GlassMaterial />
      </mesh>

      {/* ========================================
          Panoramic glass roof strip
          Runs between the A-pillar and C-pillar area.
          ======================================== */}
      <mesh position={[0, 1.46, -0.08]}>
        <planeGeometry args={[bodyWidth * 0.72, bodyLength * 0.3]} />
        <meshPhysicalMaterial
          color="#667799"
          transmission={0.7}
          roughness={0.05}
          thickness={0.03}
          metalness={0.1}
          transparent={true}
          opacity={0.25}
        />
      </mesh>

    </group>
  );
}

/**
 * Dashboard.tsx — Tesla-style minimalist dashboard
 *
 * The dashboard spans the full interior width, curving down from the
 * windshield base to the center console. Tesla's design philosophy means
 * no instrument cluster — all info goes to the 15" center touchscreen.
 *
 * Reference points:
 *   Dashboard top surface: y ≈ 1.05
 *   Dashboard spans z ≈ 1.5 to 2.0
 *   Full width: x ≈ -0.85 to 0.85
 */

export function Dashboard() {
  // Shared soft-touch dash material
  const dashMaterial = (
    <meshStandardMaterial
      color="#1a1a1a"
      metalness={0.1}
      roughness={0.9}
    />
  );

  // Slightly lighter accent for trim pieces
  const trimMaterial = (
    <meshStandardMaterial
      color="#252525"
      metalness={0.15}
      roughness={0.85}
    />
  );

  return (
    <group name="dashboard">
      {/* ───────── Main dash body ───────── */}
      {/* Wide slab spanning the full cabin width */}
      <mesh position={[0, 0.95, 1.75]} castShadow receiveShadow>
        <boxGeometry args={[1.7, 0.25, 0.5]} />
        {dashMaterial}
      </mesh>

      {/* Upper dash surface — the wide shelf below the windshield */}
      <mesh position={[0, 1.05, 1.85]} castShadow receiveShadow>
        <boxGeometry args={[1.7, 0.06, 0.35]} />
        {dashMaterial}
      </mesh>

      {/* ───────── Dash-to-windshield curve ───────── */}
      {/* Angled transition piece from dash top up toward windshield */}
      <mesh
        position={[0, 1.12, 2.0]}
        rotation={[-0.45, 0, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1.7, 0.06, 0.25]} />
        {dashMaterial}
      </mesh>

      {/* ───────── Lower dash face ───────── */}
      {/* The vertical face below the main shelf, facing the cabin */}
      <mesh position={[0, 0.78, 1.55]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.3, 0.08]} />
        {dashMaterial}
      </mesh>

      {/* ───────── Driver-side dash extension ───────── */}
      {/* Wraps around toward the A-pillar on the driver side */}
      <mesh position={[-0.7, 0.95, 1.85]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.2, 0.4]} />
        {dashMaterial}
      </mesh>

      {/* ───────── Passenger-side dash extension ───────── */}
      <mesh position={[0.7, 0.95, 1.85]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.2, 0.4]} />
        {dashMaterial}
      </mesh>

      {/* ───────── Center screen cutout area ───────── */}
      {/* Flat recessed area where the 15" touchscreen mounts */}
      <mesh position={[0.15, 0.92, 1.52]} castShadow receiveShadow>
        <boxGeometry args={[0.42, 0.28, 0.03]} />
        <meshStandardMaterial
          color="#0d0d0d"
          metalness={0.05}
          roughness={0.95}
        />
      </mesh>

      {/* Screen bezel / frame outline */}
      <mesh position={[0.15, 0.92, 1.51]}>
        <boxGeometry args={[0.44, 0.30, 0.01]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.3}
          roughness={0.6}
        />
      </mesh>

      {/* ───────── Air vent slits ───────── */}
      {/* Tesla's single long vent runs across the full dash width */}
      <AirVentSlit position={[0, 1.06, 1.68]} width={1.4} />

      {/* Secondary shorter vents closer to the windshield */}
      <AirVentSlit position={[-0.45, 1.08, 1.78]} width={0.35} />
      <AirVentSlit position={[0.45, 1.08, 1.78]} width={0.35} />

      {/* ───────── Dash pad top edge ───────── */}
      {/* Rounded lip at the front of the dash shelf */}
      <mesh position={[0, 1.075, 1.67]}>
        <boxGeometry args={[1.5, 0.02, 0.02]} />
        {trimMaterial}
      </mesh>

      {/* ───────── Center console transition ───────── */}
      {/* Where the dash meets the center console running between the seats */}
      <mesh position={[0, 0.72, 1.35]} castShadow receiveShadow>
        <boxGeometry args={[0.35, 0.2, 0.35]} />
        {dashMaterial}
      </mesh>

      {/* ───────── Steering column cover ───────── */}
      {/* Small housing on driver side where the steering column enters the dash */}
      <mesh position={[-0.4, 0.88, 1.55]} castShadow receiveShadow>
        <boxGeometry args={[0.18, 0.1, 0.15]} />
        {dashMaterial}
      </mesh>

      {/* ───────── Glovebox face ───────── */}
      {/* Flat panel on passenger side lower dash */}
      <mesh position={[0.4, 0.7, 1.55]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.18, 0.06]} />
        {trimMaterial}
      </mesh>

      {/* Glovebox seam line */}
      <mesh position={[0.4, 0.62, 1.555]}>
        <boxGeometry args={[0.48, 0.005, 0.005]} />
        <meshStandardMaterial color="#333333" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* ───────── Defrost vent strip (windshield base) ───────── */}
      <mesh position={[0, 1.1, 1.95]}>
        <boxGeometry args={[1.3, 0.015, 0.04]} />
        <meshStandardMaterial color="#222222" metalness={0.1} roughness={0.85} />
      </mesh>

      {/* ───────── Dash side trim strips ───────── */}
      {/* Subtle chrome-like accent lines */}
      <mesh position={[0, 0.84, 1.52]}>
        <boxGeometry args={[1.55, 0.008, 0.008]} />
        <meshStandardMaterial color="#444444" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* ───────── Upper dash padding ───────── */}
      {/* Soft-touch pad on driver side */}
      <mesh position={[-0.4, 1.04, 1.72]} receiveShadow>
        <boxGeometry args={[0.35, 0.04, 0.22]} />
        {dashMaterial}
      </mesh>

      {/* Soft-touch pad on passenger side */}
      <mesh position={[0.4, 1.04, 1.72]} receiveShadow>
        <boxGeometry args={[0.35, 0.04, 0.22]} />
        {dashMaterial}
      </mesh>
    </group>
  );
}

/* ───────── Sub-component: Air vent slit ───────── */

function AirVentSlit({
  position,
  width,
}: {
  position: [number, number, number];
  width: number;
}) {
  // Each vent is a thin horizontal slot with a subtle inner shadow
  return (
    <group position={position}>
      {/* Outer slot housing */}
      <mesh>
        <boxGeometry args={[width, 0.012, 0.025]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.05}
          roughness={0.95}
        />
      </mesh>
      {/* Inner dark recess */}
      <mesh position={[0, 0, 0.002]}>
        <boxGeometry args={[width - 0.02, 0.006, 0.015]} />
        <meshStandardMaterial
          color="#050505"
          metalness={0.0}
          roughness={1.0}
        />
      </mesh>
    </group>
  );
}

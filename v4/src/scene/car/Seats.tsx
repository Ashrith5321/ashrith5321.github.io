/**
 * Seats.tsx — Driver and passenger bucket seats (Tesla Model 3 style)
 *
 * Reusable Seat component with position/label props.
 * Each seat has: bottom cushion, reclined back, headrest, side bolsters,
 * and a subtle blue stitching accent line.
 *
 * Reference points:
 *   Seat bottom: y ≈ 0.45
 *   Seat back top: y ≈ 1.1
 *   Driver: x ≈ -0.4, Passenger: x ≈ 0.4
 *   Both at z ≈ 0.2 (slightly behind center)
 */

const SEAT_RECLINE = -0.26; // ~15° recline in radians

interface SeatProps {
  position: [number, number, number];
  label?: string;
}

function Seat({ position, label }: SeatProps) {
  // Primary leather material
  const leatherColor = '#222222';
  const leatherMaterial = (
    <meshStandardMaterial
      color={leatherColor}
      metalness={0.2}
      roughness={0.7}
    />
  );

  // Slightly darker bolster material for contrast
  const bolsterMaterial = (
    <meshStandardMaterial
      color="#1c1c1c"
      metalness={0.2}
      roughness={0.75}
    />
  );

  // Accent stitching material (subtle blue)
  const stitchMaterial = (
    <meshStandardMaterial
      color="#3366aa"
      metalness={0.1}
      roughness={0.6}
      emissive="#1a3366"
      emissiveIntensity={0.15}
    />
  );

  return (
    <group position={position} name={label ?? 'seat'}>
      {/* ═══════════ Seat bottom (cushion) ═══════════ */}
      <group position={[0, 0.45, 0]}>
        {/* Main cushion */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.48, 0.1, 0.5]} />
          {leatherMaterial}
        </mesh>

        {/* Cushion top surface — slight sculpted shape */}
        <mesh position={[0, 0.055, 0]} castShadow>
          <boxGeometry args={[0.42, 0.02, 0.46]} />
          {leatherMaterial}
        </mesh>

        {/* ──── Bottom side bolsters ──── */}
        {/* Left bolster */}
        <mesh position={[-0.22, 0.04, 0]} castShadow>
          <boxGeometry args={[0.06, 0.06, 0.46]} />
          {bolsterMaterial}
        </mesh>
        {/* Right bolster */}
        <mesh position={[0.22, 0.04, 0]} castShadow>
          <boxGeometry args={[0.06, 0.06, 0.46]} />
          {bolsterMaterial}
        </mesh>

        {/* Front lip — thigh support */}
        <mesh position={[0, 0.02, 0.22]} castShadow>
          <boxGeometry args={[0.4, 0.08, 0.08]} />
          {leatherMaterial}
        </mesh>

        {/* ──── Bottom stitching accent ──── */}
        <mesh position={[0, 0.066, 0]}>
          <boxGeometry args={[0.005, 0.005, 0.4]} />
          {stitchMaterial}
        </mesh>
      </group>

      {/* ═══════════ Seat back ═══════════ */}
      <group position={[0, 0.78, -0.2]} rotation={[SEAT_RECLINE, 0, 0]}>
        {/* Main back panel */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.46, 0.6, 0.08]} />
          {leatherMaterial}
        </mesh>

        {/* ──── Back side bolsters ──── */}
        {/* Left bolster */}
        <mesh position={[-0.21, 0, 0.03]} castShadow>
          <boxGeometry args={[0.06, 0.55, 0.12]} />
          {bolsterMaterial}
        </mesh>
        {/* Right bolster */}
        <mesh position={[0.21, 0, 0.03]} castShadow>
          <boxGeometry args={[0.06, 0.55, 0.12]} />
          {bolsterMaterial}
        </mesh>

        {/* Lumbar region — subtle bulge in lower back area */}
        <mesh position={[0, -0.12, 0.05]} castShadow>
          <boxGeometry args={[0.32, 0.2, 0.04]} />
          {leatherMaterial}
        </mesh>

        {/* Upper back contour */}
        <mesh position={[0, 0.15, 0.04]} castShadow>
          <boxGeometry args={[0.34, 0.18, 0.03]} />
          {leatherMaterial}
        </mesh>

        {/* ──── Back stitching accent ──── */}
        <mesh position={[0, 0, 0.045]}>
          <boxGeometry args={[0.005, 0.5, 0.005]} />
          {stitchMaterial}
        </mesh>

        {/* ═══════════ Headrest ═══════════ */}
        <group position={[0, 0.42, 0.01]}>
          {/* Headrest cushion */}
          <mesh castShadow>
            <boxGeometry args={[0.24, 0.15, 0.08]} />
            {leatherMaterial}
          </mesh>
          {/* Headrest rounded top */}
          <mesh position={[0, 0.06, 0]} castShadow>
            <boxGeometry args={[0.22, 0.04, 0.07]} />
            {leatherMaterial}
          </mesh>
          {/* Headrest posts (2 metal rods connecting to seat back) */}
          <mesh position={[-0.06, -0.12, 0]}>
            <cylinderGeometry args={[0.008, 0.008, 0.12, 8]} />
            <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.3} />
          </mesh>
          <mesh position={[0.06, -0.12, 0]}>
            <cylinderGeometry args={[0.008, 0.008, 0.12, 8]} />
            <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.3} />
          </mesh>
        </group>
      </group>

      {/* ═══════════ Seat base / rails ═══════════ */}
      {/* Metal rails that the seat slides on */}
      <mesh position={[-0.15, 0.35, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.55]} />
        <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0.15, 0.35, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.55]} />
        <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Side skirt — plastic trim covering rail mechanism */}
      <mesh position={[-0.24, 0.38, 0]} castShadow>
        <boxGeometry args={[0.02, 0.08, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} />
      </mesh>
      <mesh position={[0.24, 0.38, 0]} castShadow>
        <boxGeometry args={[0.02, 0.08, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} />
      </mesh>
    </group>
  );
}

/**
 * Seats — renders both driver and passenger seats.
 * Passenger seat is the interactive one (for "about" section).
 */
export function Seats() {
  return (
    <group name="seats">
      {/* Driver seat (left-hand drive, -X side) */}
      <Seat position={[-0.4, 0, 0.2]} label="driver-seat" />

      {/* Passenger seat (+X side) — interactive target for "about" */}
      <Seat position={[0.4, 0, 0.2]} label="passenger-seat" />
    </group>
  );
}

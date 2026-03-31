// ============================================================
// CarBody.tsx — Tesla Model 3 style main body shell
// All geometry is procedural using Three.js primitives.
// Car: ~4.8m long, ~1.85m wide, ~1.45m tall, centered at origin.
// Front = +Z, driver side = -X (left-hand drive).
// Wheels touch y=0, so body bottom is at ground clearance y≈0.14.
// ============================================================

// --- Shared materials ---
const bodyColor = '#1a1a2e'; // midnight blue

function BodyMaterial() {
  return (
    <meshStandardMaterial
      color={bodyColor}
      metalness={0.9}
      roughness={0.1}
    />
  );
}

function DarkTrimMaterial() {
  return (
    <meshStandardMaterial
      color="#0a0a12"
      metalness={0.6}
      roughness={0.3}
    />
  );
}

function DoorSeamMaterial() {
  return (
    <meshStandardMaterial
      color="#050510"
      metalness={0.5}
      roughness={0.4}
    />
  );
}

// ============================================================
// Wheel arch cutout — rounded fender arch shape
// ============================================================
function WheelArch({ position, side }: { position: [number, number, number]; side: 'left' | 'right' }) {
  // Arch is a half-torus to create the fender flare look
  const scaleX = side === 'left' ? 1 : -1;
  return (
    <group position={position} scale={[scaleX, 1, 1]}>
      {/* Arch lip — semi-circular trim around wheel opening */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.38, 0.03, 8, 16, Math.PI]} />
        <DarkTrimMaterial />
      </mesh>
      {/* Inner fender — dark panel behind wheel */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.36, 0.36, 0.06, 16, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#050510" metalness={0.3} roughness={0.7} />
      </mesh>
    </group>
  );
}

// ============================================================
// Door seam line
// ============================================================
function DoorSeam({ position, height }: { position: [number, number, number]; height: number }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.005, height, 0.005]} />
      <DoorSeamMaterial />
    </mesh>
  );
}

// ============================================================
// Main CarBody component
// ============================================================
export function CarBody() {
  // Key dimensions
  const bodyLength = 4.8;
  const bodyWidth = 1.85;
  const groundClearance = 0.14;
  const hoodHeight = 0.85;
  const roofHeight = 1.45;
  const trunkHeight = 1.2;

  return (
    <group name="car-body">

      {/* ========================================
          Main body volume — lower section (cabin + underbody)
          This is the primary mass of the car.
          ======================================== */}
      <group name="main-body-lower">
        {/* Lower body / sill area */}
        <mesh position={[0, groundClearance + 0.25, 0]}>
          <boxGeometry args={[bodyWidth, 0.36, bodyLength]} />
          <BodyMaterial />
        </mesh>

        {/* Mid body — cabin sides + door panels */}
        <mesh position={[0, groundClearance + 0.55, 0]}>
          <boxGeometry args={[bodyWidth, 0.24, bodyLength * 0.95]} />
          <BodyMaterial />
        </mesh>
      </group>

      {/* ========================================
          Hood — front section, slightly angled down
          ======================================== */}
      <group name="hood">
        {/* Hood panel — angled down toward front */}
        <mesh
          position={[0, hoodHeight - 0.08, bodyLength * 0.25]}
          rotation={[0.08, 0, 0]}
        >
          <boxGeometry args={[bodyWidth * 0.92, 0.06, bodyLength * 0.35]} />
          <BodyMaterial />
        </mesh>

        {/* Hood side panels — fender tops */}
        <mesh position={[-bodyWidth * 0.38, hoodHeight - 0.15, bodyLength * 0.22]}>
          <boxGeometry args={[0.2, 0.14, bodyLength * 0.32]} />
          <BodyMaterial />
        </mesh>
        <mesh position={[bodyWidth * 0.38, hoodHeight - 0.15, bodyLength * 0.22]}>
          <boxGeometry args={[0.2, 0.14, bodyLength * 0.32]} />
          <BodyMaterial />
        </mesh>

        {/* Frunk lid line (thin dark seam) */}
        <mesh position={[0, hoodHeight - 0.04, bodyLength * 0.1]}>
          <boxGeometry args={[bodyWidth * 0.8, 0.003, 0.005]} />
          <DoorSeamMaterial />
        </mesh>
      </group>

      {/* ========================================
          A-pillars & cabin structure
          ======================================== */}
      <group name="cabin-structure">
        {/* Left A-pillar */}
        <mesh
          position={[-bodyWidth * 0.4, roofHeight * 0.75, bodyLength * 0.12]}
          rotation={[0.45, 0, 0.08]}
        >
          <boxGeometry args={[0.06, 0.55, 0.06]} />
          <BodyMaterial />
        </mesh>
        {/* Right A-pillar */}
        <mesh
          position={[bodyWidth * 0.4, roofHeight * 0.75, bodyLength * 0.12]}
          rotation={[0.45, 0, -0.08]}
        >
          <boxGeometry args={[0.06, 0.55, 0.06]} />
          <BodyMaterial />
        </mesh>

        {/* Left B-pillar */}
        <mesh position={[-bodyWidth * 0.42, roofHeight * 0.68, -0.1]}>
          <boxGeometry args={[0.05, 0.5, 0.06]} />
          <DarkTrimMaterial />
        </mesh>
        {/* Right B-pillar */}
        <mesh position={[bodyWidth * 0.42, roofHeight * 0.68, -0.1]}>
          <boxGeometry args={[0.05, 0.5, 0.06]} />
          <DarkTrimMaterial />
        </mesh>

        {/* Left C-pillar (rear, thicker, flowing into trunk) */}
        <mesh
          position={[-bodyWidth * 0.4, roofHeight * 0.72, -bodyLength * 0.2]}
          rotation={[-0.35, 0, -0.06]}
        >
          <boxGeometry args={[0.06, 0.5, 0.08]} />
          <BodyMaterial />
        </mesh>
        {/* Right C-pillar */}
        <mesh
          position={[bodyWidth * 0.4, roofHeight * 0.72, -bodyLength * 0.2]}
          rotation={[-0.35, 0, 0.06]}
        >
          <boxGeometry args={[0.06, 0.5, 0.08]} />
          <BodyMaterial />
        </mesh>
      </group>

      {/* ========================================
          Roof — with panoramic glass roof area
          ======================================== */}
      <group name="roof">
        {/* Main roof panel */}
        <mesh position={[0, roofHeight, -0.1]}>
          <boxGeometry args={[bodyWidth * 0.82, 0.05, bodyLength * 0.38]} />
          <BodyMaterial />
        </mesh>

        {/* Roof side rails */}
        <mesh position={[-bodyWidth * 0.43, roofHeight - 0.02, -0.1]}>
          <boxGeometry args={[0.05, 0.06, bodyLength * 0.4]} />
          <BodyMaterial />
        </mesh>
        <mesh position={[bodyWidth * 0.43, roofHeight - 0.02, -0.1]}>
          <boxGeometry args={[0.05, 0.06, bodyLength * 0.4]} />
          <BodyMaterial />
        </mesh>
      </group>

      {/* ========================================
          Trunk — rear section with slight lip
          ======================================== */}
      <group name="trunk">
        {/* Trunk deck — angled down from roof toward rear */}
        <mesh
          position={[0, trunkHeight - 0.06, -bodyLength * 0.33]}
          rotation={[-0.2, 0, 0]}
        >
          <boxGeometry args={[bodyWidth * 0.88, 0.06, bodyLength * 0.2]} />
          <BodyMaterial />
        </mesh>

        {/* Trunk lip (spoiler-like raised edge) */}
        <mesh position={[0, trunkHeight - 0.02, -bodyLength * 0.42]}>
          <boxGeometry args={[bodyWidth * 0.7, 0.03, 0.06]} />
          <BodyMaterial />
        </mesh>

        {/* Rear panel (vertical, below trunk lid) */}
        <mesh position={[0, (groundClearance + trunkHeight) * 0.48, -bodyLength * 0.47]}>
          <boxGeometry args={[bodyWidth * 0.94, trunkHeight * 0.65, 0.08]} />
          <BodyMaterial />
        </mesh>
      </group>

      {/* ========================================
          Front nose / fascia
          ======================================== */}
      <group name="front-fascia">
        {/* Front face panel */}
        <mesh position={[0, hoodHeight * 0.55, bodyLength * 0.46]}>
          <boxGeometry args={[bodyWidth * 0.94, hoodHeight * 0.6, 0.08]} />
          <BodyMaterial />
        </mesh>

        {/* Front lower grille / intake (Tesla has sealed nose but dark trim) */}
        <mesh position={[0, groundClearance + 0.12, bodyLength * 0.48]}>
          <boxGeometry args={[bodyWidth * 0.7, 0.12, 0.04]} />
          <DarkTrimMaterial />
        </mesh>
      </group>

      {/* ========================================
          Front bumper
          ======================================== */}
      <group name="front-bumper">
        <mesh position={[0, groundClearance + 0.16, bodyLength * 0.5]}>
          <boxGeometry args={[bodyWidth * 0.96, 0.18, 0.1]} />
          <BodyMaterial />
        </mesh>
        {/* Bumper lower lip */}
        <mesh position={[0, groundClearance + 0.04, bodyLength * 0.5]}>
          <boxGeometry args={[bodyWidth * 0.88, 0.06, 0.12]} />
          <DarkTrimMaterial />
        </mesh>
      </group>

      {/* ========================================
          Rear bumper
          ======================================== */}
      <group name="rear-bumper">
        <mesh position={[0, groundClearance + 0.16, -bodyLength * 0.5]}>
          <boxGeometry args={[bodyWidth * 0.96, 0.18, 0.1]} />
          <BodyMaterial />
        </mesh>
        {/* Rear diffuser / lower trim */}
        <mesh position={[0, groundClearance + 0.04, -bodyLength * 0.5]}>
          <boxGeometry args={[bodyWidth * 0.8, 0.06, 0.12]} />
          <DarkTrimMaterial />
        </mesh>
      </group>

      {/* ========================================
          Side skirts
          ======================================== */}
      <group name="side-skirts">
        {/* Left side skirt */}
        <mesh position={[-bodyWidth * 0.48, groundClearance + 0.08, 0]}>
          <boxGeometry args={[0.04, 0.1, bodyLength * 0.65]} />
          <DarkTrimMaterial />
        </mesh>
        {/* Right side skirt */}
        <mesh position={[bodyWidth * 0.48, groundClearance + 0.08, 0]}>
          <boxGeometry args={[0.04, 0.1, bodyLength * 0.65]} />
          <DarkTrimMaterial />
        </mesh>
      </group>

      {/* ========================================
          Door seams — 2 doors per side
          ======================================== */}
      <group name="door-seams">
        {/* Left side — front door leading edge */}
        <DoorSeam position={[-bodyWidth * 0.47, 0.65, 0.6]} height={0.45} />
        {/* Left side — front/rear door boundary */}
        <DoorSeam position={[-bodyWidth * 0.47, 0.65, -0.1]} height={0.45} />
        {/* Left side — rear door trailing edge */}
        <DoorSeam position={[-bodyWidth * 0.47, 0.65, -0.75]} height={0.4} />

        {/* Right side — front door leading edge */}
        <DoorSeam position={[bodyWidth * 0.47, 0.65, 0.6]} height={0.45} />
        {/* Right side — front/rear door boundary */}
        <DoorSeam position={[bodyWidth * 0.47, 0.65, -0.1]} height={0.45} />
        {/* Right side — rear door trailing edge */}
        <DoorSeam position={[bodyWidth * 0.47, 0.65, -0.75]} height={0.4} />

        {/* Horizontal seam lines along belt line */}
        <mesh position={[-bodyWidth * 0.47, 0.88, 0]}>
          <boxGeometry args={[0.004, 0.004, bodyLength * 0.55]} />
          <DoorSeamMaterial />
        </mesh>
        <mesh position={[bodyWidth * 0.47, 0.88, 0]}>
          <boxGeometry args={[0.004, 0.004, bodyLength * 0.55]} />
          <DoorSeamMaterial />
        </mesh>
      </group>

      {/* ========================================
          Wheel arches — 4 fender cutouts
          ======================================== */}
      <group name="wheel-arches">
        {/* Front left */}
        <WheelArch position={[-0.85, 0.33, 1.45]} side="left" />
        {/* Front right */}
        <WheelArch position={[0.85, 0.33, 1.45]} side="right" />
        {/* Rear left */}
        <WheelArch position={[-0.85, 0.33, -1.45]} side="left" />
        {/* Rear right */}
        <WheelArch position={[0.85, 0.33, -1.45]} side="right" />
      </group>

      {/* ========================================
          Underbody / chassis floor pan
          ======================================== */}
      <group name="underbody">
        <mesh position={[0, groundClearance, 0]}>
          <boxGeometry args={[bodyWidth * 0.9, 0.04, bodyLength * 0.9]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.3} roughness={0.8} />
        </mesh>
      </group>

      {/* ========================================
          Tesla badge / emblem area (front + rear)
          ======================================== */}
      <group name="badges">
        {/* Front "T" badge placeholder — small chrome rectangle */}
        <mesh position={[0, hoodHeight * 0.6, bodyLength * 0.49]}>
          <boxGeometry args={[0.06, 0.06, 0.005]} />
          <meshStandardMaterial color="#c0c0c0" metalness={1.0} roughness={0.1} />
        </mesh>
        {/* Rear "TESLA" text placeholder — thin chrome strip */}
        <mesh position={[0, trunkHeight * 0.65, -bodyLength * 0.49]}>
          <boxGeometry args={[0.25, 0.03, 0.005]} />
          <meshStandardMaterial color="#c0c0c0" metalness={1.0} roughness={0.1} />
        </mesh>
      </group>

      {/* ========================================
          Door handles — flush (Tesla style)
          ======================================== */}
      <group name="door-handles">
        {/* Left front */}
        <mesh position={[-bodyWidth * 0.475, 0.82, 0.35]}>
          <boxGeometry args={[0.008, 0.02, 0.12]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.15} />
        </mesh>
        {/* Left rear */}
        <mesh position={[-bodyWidth * 0.475, 0.82, -0.35]}>
          <boxGeometry args={[0.008, 0.02, 0.12]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.15} />
        </mesh>
        {/* Right front */}
        <mesh position={[bodyWidth * 0.475, 0.82, 0.35]}>
          <boxGeometry args={[0.008, 0.02, 0.12]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.15} />
        </mesh>
        {/* Right rear */}
        <mesh position={[bodyWidth * 0.475, 0.82, -0.35]}>
          <boxGeometry args={[0.008, 0.02, 0.12]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.15} />
        </mesh>
      </group>

    </group>
  );
}

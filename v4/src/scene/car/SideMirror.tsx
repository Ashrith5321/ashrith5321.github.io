// ============================================================
// SideMirror.tsx — Driver-side (left) mirror assembly
// Aerodynamic teardrop housing + reflective mirror face.
// Position: x=-0.93, y=1.05, z=1.2 (driver door area)
// This component is INTERACTIVE — will be wrapped in
// InteractableObject for the "experience" section.
// ============================================================

export function SideMirror() {
  return (
    <group name="side-mirror" position={[-0.93, 1.05, 1.2]}>

      {/* ========================================
          Mirror arm — connects housing to car body
          ======================================== */}
      <mesh position={[0.06, -0.01, 0]} rotation={[0, 0, 0.15]}>
        <boxGeometry args={[0.1, 0.025, 0.025]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* ========================================
          Mirror housing — aerodynamic teardrop shape
          Composed of a box (main body) + half-cylinder (rear taper)
          ======================================== */}
      <group position={[-0.06, 0, 0]}>
        {/* Main housing body */}
        <mesh>
          <boxGeometry args={[0.08, 0.07, 0.11]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>

        {/* Housing rear taper (half-cylinder for aerodynamic look) */}
        <mesh position={[0, 0, -0.055]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.035, 0.02, 0.08, 8, 1, false, 0, Math.PI]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>

        {/* Housing top cap (rounded) */}
        <mesh position={[0, 0.035, 0]}>
          <boxGeometry args={[0.07, 0.01, 0.1]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
      </group>

      {/* ========================================
          Reflective mirror face — flat plane
          Faces outward (-X direction)
          ======================================== */}
      <mesh position={[-0.1, 0, 0.005]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.09, 0.06]} />
        <meshStandardMaterial
          color="#aabbcc"
          metalness={1.0}
          roughness={0.05}
        />
      </mesh>

    </group>
  );
}

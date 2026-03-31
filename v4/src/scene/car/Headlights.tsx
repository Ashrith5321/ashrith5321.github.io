// ============================================================
// Headlights.tsx — Tesla Model 3 style front and rear lights
// Front: thin horizontal DRL LED strip + main beam areas with pointLights
// Rear: horizontal LED strip, red emissive with pointLights
// Lights are slightly inset into the body.
// ============================================================

export function Headlights() {
  const bodyWidth = 1.85;
  const bodyLength = 4.8;
  const hoodHeight = 0.85;

  return (
    <group name="headlights">

      {/* ========================================
          Front headlights — DRL LED strip
          Thin horizontal strip across the front face
          ======================================== */}
      <group name="front-lights">
        {/* Left DRL strip */}
        <mesh position={[-bodyWidth * 0.3, hoodHeight * 0.65, bodyLength * 0.485]}>
          <boxGeometry args={[0.35, 0.025, 0.01]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={2.5}
          />
        </mesh>

        {/* Right DRL strip */}
        <mesh position={[bodyWidth * 0.3, hoodHeight * 0.65, bodyLength * 0.485]}>
          <boxGeometry args={[0.35, 0.025, 0.01]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={2.5}
          />
        </mesh>

        {/* Left main beam area */}
        <mesh position={[-bodyWidth * 0.32, hoodHeight * 0.58, bodyLength * 0.483]}>
          <boxGeometry args={[0.2, 0.06, 0.01]} />
          <meshStandardMaterial
            color="#ddeeff"
            emissive="#aaccff"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Right main beam area */}
        <mesh position={[bodyWidth * 0.32, hoodHeight * 0.58, bodyLength * 0.483]}>
          <boxGeometry args={[0.2, 0.06, 0.01]} />
          <meshStandardMaterial
            color="#ddeeff"
            emissive="#aaccff"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Left headlight pointLight — casts forward */}
        <pointLight
          position={[-bodyWidth * 0.3, hoodHeight * 0.6, bodyLength * 0.52]}
          color="#ffffff"
          intensity={5}
          distance={15}
          decay={2}
        />

        {/* Right headlight pointLight */}
        <pointLight
          position={[bodyWidth * 0.3, hoodHeight * 0.6, bodyLength * 0.52]}
          color="#ffffff"
          intensity={5}
          distance={15}
          decay={2}
        />
      </group>

      {/* ========================================
          Rear taillights — horizontal LED strip, red
          ======================================== */}
      <group name="rear-lights">
        {/* Full-width rear light bar (Tesla signature) */}
        <mesh position={[0, 0.85, -bodyLength * 0.485]}>
          <boxGeometry args={[bodyWidth * 0.75, 0.04, 0.01]} />
          <meshStandardMaterial
            color="#ff1111"
            emissive="#ff0000"
            emissiveIntensity={2.0}
          />
        </mesh>

        {/* Left tail cluster — slightly brighter outer section */}
        <mesh position={[-bodyWidth * 0.32, 0.85, -bodyLength * 0.487]}>
          <boxGeometry args={[0.2, 0.06, 0.01]} />
          <meshStandardMaterial
            color="#ff2222"
            emissive="#ff0000"
            emissiveIntensity={2.5}
          />
        </mesh>

        {/* Right tail cluster */}
        <mesh position={[bodyWidth * 0.32, 0.85, -bodyLength * 0.487]}>
          <boxGeometry args={[0.2, 0.06, 0.01]} />
          <meshStandardMaterial
            color="#ff2222"
            emissive="#ff0000"
            emissiveIntensity={2.5}
          />
        </mesh>

        {/* Left tail pointLight */}
        <pointLight
          position={[-bodyWidth * 0.3, 0.85, -bodyLength * 0.52]}
          color="#ff0000"
          intensity={2}
          distance={5}
          decay={2}
        />

        {/* Right tail pointLight */}
        <pointLight
          position={[bodyWidth * 0.3, 0.85, -bodyLength * 0.52]}
          color="#ff0000"
          intensity={2}
          distance={5}
          decay={2}
        />
      </group>

    </group>
  );
}

export function SceneLighting() {
  return (
    <>
      {/* Soft ambient fill — morning daylight */}
      <ambientLight color="#faf8f5" intensity={1.2} />

      {/* Hemisphere: warm sky above, warm floor bounce below */}
      <hemisphereLight args={['#c8daf0', '#d4b896', 0.8]} />

      {/* Main sunlight through window — warm morning sun */}
      <directionalLight
        position={[-6, 8, 2]}
        color="#fff4e0"
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      {/* Secondary fill from right — cool sky bounce */}
      <directionalLight
        position={[5, 5, 3]}
        color="#e8ecf4"
        intensity={0.8}
      />

      {/* Back fill — prevents dark front faces */}
      <directionalLight
        position={[0, 3, 6]}
        color="#f0eee8"
        intensity={0.5}
      />

      {/* Overhead room light — like a ceiling fixture */}
      <pointLight
        position={[0, 5.5, 0]}
        color="#fff8f0"
        intensity={15}
        distance={14}
        decay={2}
      />

      {/* ============================================
          SUBTLE NEON ACCENT STRIPS (decorative)
          ============================================ */}

      {/* Neon cyan strip - along ceiling edge (back wall) */}
      <rectAreaLight
        position={[0, 5.9, -3.85]}
        rotation={[Math.PI / 2, 0, 0]}
        width={9}
        height={0.1}
        color="#00e5ff"
        intensity={3}
      />

      {/* Neon cyan strip - along ceiling edge (right wall) */}
      <rectAreaLight
        position={[4.85, 5.9, 0]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        width={7}
        height={0.1}
        color="#00e5ff"
        intensity={2}
      />

      {/* Under-desk accent */}
      <rectAreaLight
        position={[0, 0.15, -2]}
        rotation={[-Math.PI / 2, 0, 0]}
        width={4}
        height={0.1}
        color="#00b4d8"
        intensity={2}
      />

      {/* Behind monitors accent */}
      <rectAreaLight
        position={[0, 2.5, -3.85]}
        rotation={[0, 0, 0]}
        width={3}
        height={1.5}
        color="#7c3aed"
        intensity={1.5}
      />

      {/* ============================================
          MONITOR & DEVICE GLOW
          ============================================ */}
      <pointLight position={[-0.8, 2.8, -3]} color="#4a8abf" intensity={5} distance={3} decay={2} />
      <pointLight position={[0.8, 2.8, -3]} color="#3aaa5a" intensity={4} distance={3} decay={2} />
      <pointLight position={[2.75, 1.9, -2.7]} color="#7c3aed" intensity={3} distance={2} decay={2} />

      {/* Robot accent glows */}
      <pointLight position={[3.8, 2.3, 1.5]} color="#00e5ff" intensity={3} distance={3} decay={2} />
      <pointLight position={[-3.2, 0.6, 2]} color="#f59e0b" intensity={2} distance={2} decay={2} />
      <pointLight position={[-2, 3.5, 0.5]} color="#8b5cf6" intensity={3} distance={2} decay={2} />
    </>
  );
}

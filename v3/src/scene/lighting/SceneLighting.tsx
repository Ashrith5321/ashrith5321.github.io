export function SceneLighting() {
  return (
    <>
      {/* Soft ambient fill — morning daylight */}
      <ambientLight color="#faf8f5" intensity={1.2} />

      {/* Hemisphere: warm sky above, warm floor bounce below */}
      <hemisphereLight args={['#c8daf0', '#d4b896', 0.8]} />

      {/* Main sunlight through windows — warm morning sun */}
      <directionalLight
        position={[-12, 10, 4]}
        color="#fff4e0"
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={10}
        shadow-camera-bottom={-2}
      />

      {/* Secondary fill from right — cool sky bounce */}
      <directionalLight
        position={[10, 7, 5]}
        color="#e8ecf4"
        intensity={0.8}
      />

      {/* Back fill — prevents dark front faces */}
      <directionalLight
        position={[0, 5, 12]}
        color="#f0eee8"
        intensity={0.5}
      />

      {/* Overhead workshop lights (fluorescent-style) */}
      <pointLight position={[0, 7.5, -3]} color="#fff8f0" intensity={25} distance={18} decay={2} />
      <pointLight position={[0, 7.5, 4]} color="#fff8f0" intensity={20} distance={18} decay={2} />
      <pointLight position={[-6, 7.5, 0]} color="#fff8f0" intensity={18} distance={16} decay={2} />
      <pointLight position={[6, 7.5, 0]} color="#fff8f0" intensity={18} distance={16} decay={2} />

      {/* ===== NEON ACCENT LIGHTS ===== */}

      {/* Cyan strip — ceiling edge along back wall */}
      <rectAreaLight
        position={[0, 7.9, -7.85]}
        rotation={[Math.PI / 2, 0, 0]}
        width={18}
        height={0.1}
        color="#00e5ff"
        intensity={3}
      />

      {/* Cyan strip — ceiling edge along right wall */}
      <rectAreaLight
        position={[9.85, 7.9, 0]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        width={14}
        height={0.1}
        color="#00e5ff"
        intensity={2}
      />

      {/* Under-desk accent */}
      <rectAreaLight
        position={[0, 0.15, -6]}
        rotation={[-Math.PI / 2, 0, 0]}
        width={4}
        height={0.1}
        color="#00b4d8"
        intensity={2}
      />

      {/* Behind monitors accent */}
      <rectAreaLight
        position={[0, 2.5, -7.85]}
        rotation={[0, 0, 0]}
        width={3}
        height={1.5}
        color="#7c3aed"
        intensity={1.5}
      />

      {/* ===== MONITOR & DEVICE GLOW ===== */}
      <pointLight position={[-0.8, 2.8, -7]} color="#4a8abf" intensity={5} distance={3} decay={2} />
      <pointLight position={[0.8, 2.8, -7]} color="#3aaa5a" intensity={4} distance={3} decay={2} />
      <pointLight position={[2.75, 1.9, -6.7]} color="#7c3aed" intensity={3} distance={2} decay={2} />

      {/* Robot accent glows — spread across larger workshop */}
      <pointLight position={[7, 2.3, 1.5]} color="#00e5ff" intensity={3} distance={4} decay={2} />
      <pointLight position={[-6, 0.6, 2]} color="#f59e0b" intensity={2} distance={3} decay={2} />
      <pointLight position={[-4, 5, -3]} color="#8b5cf6" intensity={3} distance={4} decay={2} />
      <pointLight position={[6, 0.5, 3]} color="#00e5ff" intensity={2} distance={3} decay={2} />
      <pointLight position={[-5, 0.5, 5]} color="#22c55e" intensity={2} distance={3} decay={2} />
    </>
  );
}

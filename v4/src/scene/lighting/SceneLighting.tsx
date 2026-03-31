export function SceneLighting() {
  return (
    <>
      {/* Low ambient light with blue tint */}
      <ambientLight color="#1a1a3a" intensity={0.15} />

      {/* Hemisphere light: night sky to dark ground */}
      <hemisphereLight args={['#1a1a3a', '#0a0a0a', 0.3]} />

      {/* Moonlight — directional from upper right-back */}
      <directionalLight
        position={[10, 15, -10]}
        color="#8888cc"
        intensity={0.4}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Interior ambient LED strips — left door panel */}
      <rectAreaLight
        color="#4488ff"
        intensity={0.5}
        width={2}
        height={0.1}
        position={[-0.8, 0.2, 0.3]}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* Interior ambient LED strips — right door panel */}
      <rectAreaLight
        color="#4488ff"
        intensity={0.5}
        width={2}
        height={0.1}
        position={[0.8, 0.2, 0.3]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </>
  );
}

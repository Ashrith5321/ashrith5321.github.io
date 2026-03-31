import { useGLTF } from '@react-three/drei';

// Realistic sedan GLB model (compressed from 61MB to 4MB)
// Original: FetchCFD sedan, CC-BY license
// The model is ~0.5 units wide, ~1.25 units long — scale up to match
// our car dimensions (~1.85m wide, ~4.8m long)

const MODEL_PATH = '/drive/models/sedan.glb';

export function CarModel() {
  const { scene } = useGLTF(MODEL_PATH);

  return (
    <primitive
      object={scene}
      scale={[7.2, 7.2, 7.2]}
      position={[0, 0.01, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      castShadow
      receiveShadow
    />
  );
}

useGLTF.preload(MODEL_PATH);

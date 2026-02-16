import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { useStore } from '../../store/useStore';

export function PostProcessing() {
  const isMobile = useStore((s) => s.isMobile);

  if (isMobile) return null;

  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.6}
        luminanceThreshold={0.6}
        luminanceSmoothing={0.5}
        mipmapBlur
      />
      <Vignette
        offset={0.5}
        darkness={0.15}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}

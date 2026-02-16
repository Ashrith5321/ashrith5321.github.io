import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './scene/Scene';
import { LoadingScreen } from './ui/LoadingScreen';
import { NavigationMenu } from './ui/NavigationMenu';
import { InfoPanel } from './ui/InfoPanel';
import { HoverTooltip } from './ui/HoverTooltip';
import { BackButton } from './ui/BackButton';
import { useStore } from './store/useStore';
import './styles/global.css';

function ClickHint() {
  const introComplete = useStore((s) => s.introComplete);
  const activeSection = useStore((s) => s.activeSection);

  if (!introComplete || activeSection) return null;

  return (
    <div className="click-hint">
      Click objects to explore
    </div>
  );
}

export default function App() {
  const isMobile = useStore((s) => s.isMobile);
  const setIsMobile = useStore((s) => s.setIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);

  return (
    <>
      <LoadingScreen />
      <NavigationMenu />
      <InfoPanel />
      <HoverTooltip />
      <BackButton />
      <ClickHint />

      <Canvas
        shadows
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        camera={{ fov: 50, near: 0.1, far: 100 }}
        gl={{
          antialias: !isMobile,
          powerPreference: 'high-performance',
          toneMapping: 1,
          toneMappingExposure: 1.0,
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
}

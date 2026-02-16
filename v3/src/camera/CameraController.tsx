import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { useStore } from '../store/useStore';
import { DEFAULT_CAMERA, CAMERA_TARGETS } from '../data/sceneConfig';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

export function CameraController() {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();
  const activeSection = useStore((s) => s.activeSection);
  const setIsAnimating = useStore((s) => s.setIsAnimating);
  const introComplete = useStore((s) => s.introComplete);

  // Set initial camera position
  useEffect(() => {
    camera.position.set(10, 7, 10);
    if (controlsRef.current) {
      controlsRef.current.target.set(...DEFAULT_CAMERA.target);
    }
  }, [camera]);

  // Animate camera on section change
  useEffect(() => {
    if (!controlsRef.current) return;
    const controls = controlsRef.current;
    const target = activeSection ? CAMERA_TARGETS[activeSection] : DEFAULT_CAMERA;

    setIsAnimating(true);
    controls.enabled = false;

    gsap.to(camera.position, {
      x: target.position[0],
      y: target.position[1],
      z: target.position[2],
      duration: 1.2,
      ease: 'power3.inOut',
      onUpdate: () => camera.updateProjectionMatrix(),
    });

    gsap.to(controls.target, {
      x: target.target[0],
      y: target.target[1],
      z: target.target[2],
      duration: 1.2,
      ease: 'power3.inOut',
      onComplete: () => {
        controls.enabled = true;
        setIsAnimating(false);
      },
    });
  }, [activeSection, camera, setIsAnimating]);

  // Intro animation
  useEffect(() => {
    if (!introComplete || !controlsRef.current) return;
    const controls = controlsRef.current;
    controls.enabled = false;

    gsap.to(camera.position, {
      x: DEFAULT_CAMERA.position[0],
      y: DEFAULT_CAMERA.position[1],
      z: DEFAULT_CAMERA.position[2],
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => camera.updateProjectionMatrix(),
      onComplete: () => {
        controls.enabled = true;
      },
    });

    gsap.to(controls.target, {
      x: DEFAULT_CAMERA.target[0],
      y: DEFAULT_CAMERA.target[1],
      z: DEFAULT_CAMERA.target[2],
      duration: 2.5,
      ease: 'power2.inOut',
    });
  }, [introComplete, camera]);

  // Keep controls updated
  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enablePan={false}
      enableDamping
      dampingFactor={0.05}
      minDistance={2}
      maxDistance={12}
      minPolarAngle={0.3}
      maxPolarAngle={Math.PI / 2.1}
      maxAzimuthAngle={Math.PI / 1.5}
      minAzimuthAngle={-Math.PI / 4}
    />
  );
}

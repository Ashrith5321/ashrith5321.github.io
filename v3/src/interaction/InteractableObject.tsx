import { useRef, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import type { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from '../store/useStore';
import type { SectionId } from '../store/useStore';

interface InteractableObjectProps {
  section: SectionId;
  children: React.ReactNode;
}

export function InteractableObject({ section, children }: InteractableObjectProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const activeSection = useStore((s) => s.activeSection);
  const setActiveSection = useStore((s) => s.setActiveSection);
  const setHoveredObject = useStore((s) => s.setHoveredObject);
  const isAnimating = useStore((s) => s.isAnimating);

  const handleClick = useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (isAnimating) return;
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  }, [activeSection, section, setActiveSection, isAnimating]);

  const handlePointerOver = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
    setHoveredObject(section);
    document.body.style.cursor = 'pointer';
  }, [section, setHoveredObject]);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    setHoveredObject(null);
    document.body.style.cursor = 'default';
  }, [setHoveredObject]);

  // Hover scale animation
  useFrame(() => {
    if (!groupRef.current) return;
    const targetScale = hovered ? 1.04 : 1.0;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  return (
    <group
      ref={groupRef}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {children}
      {/* Hover glow indicator */}
      {hovered && (
        <pointLight
          position={[0, 1, 0]}
          color="#00e5ff"
          intensity={3}
          distance={2}
          decay={2}
        />
      )}
    </group>
  );
}

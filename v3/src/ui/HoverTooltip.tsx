import { useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';
import { SECTION_HINTS } from '../data/sceneConfig';

export function HoverTooltip() {
  const hoveredObject = useStore((s) => s.hoveredObject);
  const activeSection = useStore((s) => s.activeSection);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (tooltipRef.current) {
        tooltipRef.current.style.left = `${e.clientX + 16}px`;
        tooltipRef.current.style.top = `${e.clientY + 16}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!hoveredObject || activeSection) return null;

  return (
    <div ref={tooltipRef} style={styles.tooltip}>
      {SECTION_HINTS[hoveredObject]}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  tooltip: {
    position: 'fixed',
    zIndex: 200,
    padding: '6px 14px',
    background: 'rgba(0, 0, 0, 0.8)',
    border: '1px solid rgba(0, 229, 255, 0.2)',
    borderRadius: 6,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    color: '#00e5ff',
    letterSpacing: '0.05em',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
  },
};

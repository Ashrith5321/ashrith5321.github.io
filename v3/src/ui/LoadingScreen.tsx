import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useStore } from '../store/useStore';

export function LoadingScreen() {
  const setIntroComplete = useStore((s) => s.setIntroComplete);
  const finishLoading = useStore((s) => s.finishLoading);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'welcome'>('loading');
  const [statusText, setStatusText] = useState('INITIALIZING');
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 12 + 4;
      if (p > 100) p = 100;
      setProgress(p);

      if (p > 50) setStatusText('LOADING SCENE');
      if (p > 80) setStatusText('ALMOST READY');

      if (p >= 100) {
        clearInterval(interval);
        // Show welcome screen with controls
        setTimeout(() => setPhase('welcome'), 400);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
          setVisible(false);
          finishLoading();
          setTimeout(() => setIntroComplete(true), 100);
        },
      });
    }
  };

  if (!visible) return null;

  return (
    <div ref={containerRef} style={styles.container}>
      {phase === 'loading' ? (
        <>
          <div style={styles.statusText}>{statusText}</div>
          <div style={styles.barTrack}>
            <div style={{ ...styles.bar, width: `${progress}%` }} />
          </div>
          <div style={styles.smallText}>Ashrith Edukulla</div>
        </>
      ) : (
        <div style={styles.welcomeWrap}>
          {/* Title */}
          <div style={styles.welcomeLabel}>WELCOME TO</div>
          <h1 style={styles.welcomeTitle}>Ash's Workspace</h1>
          <div style={styles.welcomeTagline}>Interactive 3D Robotics Portfolio</div>

          {/* Divider */}
          <div style={styles.divider} />

          {/* Controls */}
          <div style={styles.controlsTitle}>CONTROLS</div>
          <div style={styles.controlsGrid}>
            <div style={styles.controlItem}>
              <div style={styles.controlIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="1.5">
                  <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                </svg>
              </div>
              <div>
                <div style={styles.controlLabel}>Click Objects</div>
                <div style={styles.controlDesc}>Click on items in the room to explore sections</div>
              </div>
            </div>

            <div style={styles.controlItem}>
              <div style={styles.controlIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <div>
                <div style={styles.controlLabel}>Drag to Orbit</div>
                <div style={styles.controlDesc}>Left-click and drag to rotate the camera</div>
              </div>
            </div>

            <div style={styles.controlItem}>
              <div style={styles.controlIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="1.5">
                  <path d="M21 12H3M12 3v18" />
                  <path d="M15 9l-3-3-3 3M9 15l3 3 3-3" />
                </svg>
              </div>
              <div>
                <div style={styles.controlLabel}>Scroll to Zoom</div>
                <div style={styles.controlDesc}>Mouse wheel to zoom in and out</div>
              </div>
            </div>

            <div style={styles.controlItem}>
              <div style={styles.controlIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 3v18M3 9h18" />
                </svg>
              </div>
              <div>
                <div style={styles.controlLabel}>Use the Menu</div>
                <div style={styles.controlDesc}>Top navigation to jump to any section</div>
              </div>
            </div>
          </div>

          {/* Enter button */}
          <button style={styles.enterButton} onClick={handleEnter}>
            Enter Workspace
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 8 }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: 'fixed',
    inset: 0,
    background: '#000',
    zIndex: 10000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    letterSpacing: '0.3em',
    color: '#00e5ff',
  },
  barTrack: {
    width: 200,
    height: 2,
    background: 'rgba(255,255,255,0.08)',
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 16,
  },
  bar: {
    height: '100%',
    background: '#00e5ff',
    transition: 'width 0.3s ease',
    borderRadius: 2,
  },
  smallText: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.2)',
    marginTop: 24,
    letterSpacing: '0.1em',
  },

  // Welcome phase
  welcomeWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: 520,
    padding: '0 24px',
    animation: 'fadeInUp 0.6s ease-out',
  },
  welcomeLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    letterSpacing: '0.4em',
    color: '#00e5ff',
    marginBottom: 8,
  },
  welcomeTitle: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
    color: '#fff',
    lineHeight: 1.1,
    margin: 0,
    letterSpacing: '-0.02em',
  },
  welcomeTagline: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.35)',
    marginTop: 12,
    letterSpacing: '0.05em',
  },
  divider: {
    width: 60,
    height: 1,
    background: 'rgba(0, 229, 255, 0.2)',
    margin: '32px 0',
  },
  controlsTitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.6rem',
    letterSpacing: '0.3em',
    color: 'rgba(255,255,255,0.3)',
    marginBottom: 20,
  },
  controlsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    width: '100%',
    marginBottom: 36,
  },
  controlItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    padding: '12px 14px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 10,
    textAlign: 'left',
  },
  controlIcon: {
    flexShrink: 0,
    width: 36,
    height: 36,
    borderRadius: 8,
    background: 'rgba(0, 229, 255, 0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlLabel: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#fff',
    marginBottom: 2,
  },
  controlDesc: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.65rem',
    color: 'rgba(255,255,255,0.3)',
    lineHeight: 1.4,
  },
  enterButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '14px 36px',
    background: 'transparent',
    border: '1px solid #00e5ff',
    borderRadius: 50,
    color: '#00e5ff',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
};

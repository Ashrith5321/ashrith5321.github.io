import { useState } from 'react';
import { useStore } from '../store/useStore';
import type { SectionId } from '../store/useStore';
import { SECTION_LABELS } from '../data/sceneConfig';

const SECTIONS: SectionId[] = ['about', 'education', 'experience', 'projects', 'skills', 'awards', 'contact', 'resume'];

export function NavigationMenu() {
  const activeSection = useStore((s) => s.activeSection);
  const setActiveSection = useStore((s) => s.setActiveSection);
  const introComplete = useStore((s) => s.introComplete);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!introComplete) return null;

  const handleClick = (section: SectionId) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={styles.nav}>
        <a
          href="#"
          style={styles.logo}
          onClick={(e) => { e.preventDefault(); setActiveSection(null); }}
        >
          Ash's Workspace
        </a>

        <div style={styles.links}>
          {SECTIONS.map((s) => (
            <button
              key={s}
              style={{
                ...styles.link,
                color: activeSection === s ? '#00e5ff' : 'rgba(255,255,255,0.6)',
              }}
              onClick={() => handleClick(s)}
            >
              {SECTION_LABELS[s]}
              {activeSection === s && <span style={styles.activeDot} />}
            </button>
          ))}
        </div>

        <button
          style={styles.mobileBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? '\u2715' : '\u2630'}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={styles.mobileOverlay}>
          {SECTIONS.map((s) => (
            <button
              key={s}
              style={{
                ...styles.mobileLink,
                color: activeSection === s ? '#00e5ff' : '#fff',
              }}
              onClick={() => handleClick(s)}
            >
              {SECTION_LABELS[s]}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mixBlendMode: 'difference',
  },
  logo: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: '1.2rem',
    color: '#fff',
    textDecoration: 'none',
    letterSpacing: '-0.02em',
  },
  links: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  },
  link: {
    background: 'none',
    border: 'none',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.72rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    position: 'relative' as const,
    padding: '4px 0',
    transition: 'color 0.3s',
  },
  activeDot: {
    position: 'absolute' as const,
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: '#00e5ff',
  },
  mobileBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  mobileOverlay: {
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(0,0,0,0.95)',
    zIndex: 99,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '28px',
  },
  mobileLink: {
    background: 'none',
    border: 'none',
    fontFamily: "'Syne', sans-serif",
    fontSize: '1.8rem',
    fontWeight: 700,
    cursor: 'pointer',
    letterSpacing: '0.05em',
  },
};

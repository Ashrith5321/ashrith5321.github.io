import { useStore } from '../store/useStore';

export function BackButton() {
  const activeSection = useStore((s) => s.activeSection);
  const setActiveSection = useStore((s) => s.setActiveSection);

  if (!activeSection) return null;

  return (
    <button
      style={styles.button}
      onClick={() => setActiveSection(null)}
      aria-label="Back to overview"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      <span>Back</span>
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  button: {
    position: 'fixed',
    bottom: 32,
    left: 32,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 20px',
    background: 'rgba(0, 0, 0, 0.6)',
    border: '1px solid rgba(0, 229, 255, 0.2)',
    borderRadius: 50,
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.8rem',
    letterSpacing: '0.05em',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s',
  },
};

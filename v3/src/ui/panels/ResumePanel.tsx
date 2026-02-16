const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.25rem',
  },
  heading: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#fff',
    margin: 0,
  },
  subtext: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.55)',
    margin: 0,
    lineHeight: 1.6,
  },
  downloadBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.75rem 1.25rem',
    borderRadius: '10px',
    background: 'rgba(0, 229, 255, 0.1)',
    border: '1px solid rgba(0, 229, 255, 0.25)',
    color: '#00e5ff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background 0.2s, border-color 0.2s',
    width: 'fit-content',
  },
  iframe: {
    width: '100%',
    height: '55vh',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.02)',
  },
};

export function ResumePanel() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Resume</h2>
      <p style={styles.subtext}>
        View or download my latest resume below.
      </p>

      <a
        href="../resume.pdf"
        download
        style={styles.downloadBtn}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0, 229, 255, 0.18)';
          e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.25)';
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download Resume (PDF)
      </a>

      <iframe
        src="../resume.pdf"
        title="Resume"
        style={styles.iframe}
      />
    </div>
  );
}

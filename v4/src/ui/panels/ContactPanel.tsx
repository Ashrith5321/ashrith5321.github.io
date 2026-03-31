import { aboutMe } from '../../data/content';

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
  grid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.65rem',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.88rem',
    transition: 'border-color 0.2s, background 0.2s',
    cursor: 'pointer',
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    flexShrink: 0,
  },
  label: {
    fontSize: '0.78rem',
    color: 'rgba(255, 255, 255, 0.4)',
    margin: 0,
  },
  value: {
    fontSize: '0.9rem',
    color: '#fff',
    margin: 0,
    fontWeight: 500,
  },
};

const contacts = [
  {
    label: 'Email',
    value: aboutMe.email,
    href: `mailto:${aboutMe.email}`,
    bg: '#00e5ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: aboutMe.phone,
    href: `tel:${aboutMe.phone.replace(/\D/g, '')}`,
    bg: '#22c55e',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Ashrith Edukulla',
    href: aboutMe.linkedin,
    bg: '#0a66c2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'ashrith5321',
    href: aboutMe.github,
    bg: '#fff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    value: '@AshrithEd',
    href: aboutMe.twitter,
    bg: '#1d9bf0',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function ContactPanel() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Get in Touch</h2>
      <p style={styles.subtext}>
        Feel free to reach out for collaborations, research opportunities, or just to chat about robotics and autonomy.
      </p>

      <div style={styles.grid}>
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={styles.btn}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.3)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
            }}
          >
            <span style={{ ...styles.icon, background: c.bg }}>{c.icon}</span>
            <div>
              <p style={styles.label}>{c.label}</p>
              <p style={styles.value}>{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

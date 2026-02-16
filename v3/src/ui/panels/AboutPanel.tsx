import { aboutMe } from '../../data/content';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    objectFit: 'cover' as const,
    border: '2px solid #00e5ff',
    flexShrink: 0,
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.25rem',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#fff',
    margin: 0,
    lineHeight: 1.2,
  },
  tagline: {
    fontSize: '0.9rem',
    color: '#00e5ff',
    margin: 0,
    fontStyle: 'italic' as const,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.35rem 0.75rem',
    borderRadius: '999px',
    background: 'rgba(0, 229, 255, 0.08)',
    border: '1px solid rgba(0, 229, 255, 0.2)',
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.7)',
    width: 'fit-content',
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#00e5ff',
  },
  paragraph: {
    fontSize: '0.88rem',
    lineHeight: 1.7,
    color: 'rgba(255, 255, 255, 0.55)',
    margin: 0,
  },
};

export function AboutPanel() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="../ashrith.jpg" alt={aboutMe.name} style={styles.photo} />
        <div style={styles.headerText}>
          <h2 style={styles.name}>{aboutMe.name}</h2>
          <p style={styles.tagline}>{aboutMe.tagline}</p>
        </div>
      </div>

      <div style={styles.badge}>
        <span style={styles.badgeDot} />
        {aboutMe.university} &middot; {aboutMe.degree}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {aboutMe.paragraphs.map((p, i) => (
          <p key={i} style={styles.paragraph}>{p}</p>
        ))}
      </div>
    </div>
  );
}

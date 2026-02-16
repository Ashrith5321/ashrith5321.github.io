import { awards } from '../../data/content';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '12px',
    padding: '1rem 1.15rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.4rem',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    margin: 0,
  },
  subtitle: {
    fontSize: '0.88rem',
    color: '#fbbf24',
    fontWeight: 500,
    margin: 0,
  },
  description: {
    fontSize: '0.84rem',
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.55)',
    margin: 0,
  },
  bullets: {
    margin: '0.2rem 0 0 0',
    padding: '0 0 0 1rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.2rem',
    listStyle: 'none' as const,
  },
  bullet: {
    fontSize: '0.82rem',
    lineHeight: 1.55,
    color: 'rgba(255, 255, 255, 0.55)',
    position: 'relative' as const,
    paddingLeft: '0.75rem',
  },
  bulletDot: {
    position: 'absolute' as const,
    left: 0,
    top: '0.55em',
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: '#fbbf24',
    opacity: 0.5,
  },
  trophy: {
    fontSize: '1.1rem',
    marginRight: '0.4rem',
  },
};

export function AwardsPanel() {
  return (
    <div style={styles.container}>
      {awards.map((award, i) => (
        <div key={i} style={styles.card}>
          <h3 style={styles.title}>{award.title}</h3>
          <p style={styles.subtitle}>{award.subtitle}</p>
          {award.description && (
            <p style={styles.description}>{award.description}</p>
          )}
          {award.bullets && (
            <ul style={styles.bullets}>
              {award.bullets.map((b, j) => (
                <li key={j} style={styles.bullet}>
                  <span style={styles.bulletDot} />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

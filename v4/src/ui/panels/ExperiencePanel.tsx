import { experience } from '../../data/content';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 0,
    position: 'relative' as const,
    paddingLeft: '1.5rem',
  },
  timelineLine: {
    position: 'absolute' as const,
    left: '5px',
    top: '8px',
    bottom: '8px',
    width: '1px',
    background: 'rgba(0, 229, 255, 0.15)',
  },
  item: {
    position: 'relative' as const,
    paddingBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.35rem',
  },
  dot: {
    position: 'absolute' as const,
    left: '-1.5rem',
    top: '6px',
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: '#00e5ff',
    border: '2px solid rgba(0, 0, 0, 0.8)',
    marginLeft: '0px',
  },
  org: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    margin: 0,
  },
  role: {
    fontSize: '0.85rem',
    color: '#00e5ff',
    margin: 0,
  },
  dates: {
    fontSize: '0.78rem',
    color: 'rgba(255, 255, 255, 0.4)',
    margin: 0,
  },
  bullets: {
    margin: '0.35rem 0 0 0',
    padding: '0 0 0 1rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.25rem',
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
    background: 'rgba(255, 255, 255, 0.25)',
  },
};

export function ExperiencePanel() {
  return (
    <div style={styles.container}>
      <div style={styles.timelineLine} />
      {experience.map((exp, i) => (
        <div key={i} style={styles.item}>
          <span style={styles.dot} />
          <h3 style={styles.org}>{exp.org}</h3>
          <p style={styles.role}>{exp.role}</p>
          <p style={styles.dates}>{exp.dates}</p>
          <ul style={styles.bullets}>
            {exp.bullets.map((b, j) => (
              <li key={j} style={styles.bullet}>
                <span style={styles.bulletDot} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

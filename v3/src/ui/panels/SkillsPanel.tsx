import { skills } from '../../data/content';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.25rem',
  },
  category: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '12px',
    padding: '1rem 1.15rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
  },
  categoryTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  colorDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    flexShrink: 0,
  },
  group: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.35rem',
  },
  groupLabel: {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.4)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    margin: 0,
  },
  pillGrid: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.35rem',
  },
};

function pillStyle(color: string) {
  return {
    padding: '0.25rem 0.6rem',
    borderRadius: '999px',
    background: `${color}10`,
    border: `1px solid ${color}30`,
    fontSize: '0.78rem',
    color: `${color}cc`,
  };
}

export function SkillsPanel() {
  return (
    <div style={styles.container}>
      {skills.map((cat) => (
        <div key={cat.title} style={styles.category}>
          <h3 style={styles.categoryTitle}>
            <span style={{ ...styles.colorDot, background: cat.color }} />
            {cat.title}
          </h3>
          {cat.groups.map((g) => (
            <div key={g.label} style={styles.group}>
              <p style={styles.groupLabel}>{g.label}</p>
              <div style={styles.pillGrid}>
                {g.items.map((item) => (
                  <span key={item} style={pillStyle(cat.color)}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

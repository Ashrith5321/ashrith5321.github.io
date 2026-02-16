import { aboutMe, coursework } from '../../data/content';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '12px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.6rem',
  },
  university: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#fff',
    margin: 0,
  },
  degree: {
    fontSize: '0.95rem',
    color: '#00e5ff',
    margin: 0,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
  },
  gpa: {
    fontSize: '0.9rem',
    color: '#fbbf24',
    fontWeight: 600,
    margin: 0,
  },
  dates: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.45)',
    margin: 0,
  },
  location: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.45)',
    margin: 0,
  },
  sectionTitle: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.7)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    margin: 0,
  },
  pillGrid: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.45rem',
  },
  pill: {
    padding: '0.3rem 0.7rem',
    borderRadius: '999px',
    background: 'rgba(0, 229, 255, 0.08)',
    border: '1px solid rgba(0, 229, 255, 0.15)',
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.7)',
  },
};

export function EducationPanel() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.university}>{aboutMe.university}</h2>
        <p style={styles.degree}>{aboutMe.degree}</p>
        <div style={styles.row}>
          <p style={styles.gpa}>GPA: {aboutMe.gpa}</p>
          <p style={styles.dates}>{aboutMe.dates}</p>
        </div>
        <p style={styles.location}>{aboutMe.location}</p>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>
          <strong style={{ color: '#fbbf24' }}>Honors:</strong> Rank 3 (WRO), 4× IYRC medalist, 3× AMC qualifier, 2× AIME qualifier
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={styles.sectionTitle}>Relevant Coursework</p>
        {coursework.map((cat) => (
          <div key={cat.category} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', margin: 0, fontWeight: 600 }}>
              {cat.category}
            </p>
            <div style={styles.pillGrid}>
              {cat.courses.map((c) => (
                <span key={c} style={styles.pill}>{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

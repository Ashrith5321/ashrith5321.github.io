import { projects } from '../../data/content';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    maxHeight: '70vh',
    overflowY: 'auto' as const,
    paddingRight: '0.5rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '12px',
    padding: '1rem 1.15rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
    transition: 'border-color 0.2s',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    margin: 0,
  },
  featured: {
    fontSize: '0.7rem',
    fontWeight: 600,
    padding: '0.15rem 0.5rem',
    borderRadius: '999px',
    background: 'rgba(251, 191, 36, 0.12)',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    color: '#fbbf24',
    flexShrink: 0,
  },
  description: {
    fontSize: '0.84rem',
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.55)',
    margin: 0,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.35rem',
    marginTop: '0.15rem',
  },
  tag: {
    padding: '0.2rem 0.55rem',
    borderRadius: '999px',
    background: 'rgba(0, 229, 255, 0.07)',
    border: '1px solid rgba(0, 229, 255, 0.12)',
    fontSize: '0.72rem',
    color: 'rgba(0, 229, 255, 0.8)',
  },
  link: {
    fontSize: '0.8rem',
    color: '#00e5ff',
    textDecoration: 'none',
    marginTop: '0.15rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  media: {
    width: '100%',
    borderRadius: '8px',
    maxHeight: 180,
    objectFit: 'cover' as const,
    marginTop: '0.25rem',
  },
};

export function ProjectsPanel() {
  return (
    <div style={styles.container}>
      {projects.map((p, i) => (
        <div
          key={i}
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)')}
        >
          <div style={styles.titleRow}>
            <h3 style={styles.title}>{p.title}</h3>
            {p.featured && <span style={styles.featured}>Featured</span>}
          </div>
          <p style={styles.description}>{p.description}</p>

          {p.media && p.mediaType === 'image' && (
            <img src={p.media} alt={p.title} style={styles.media} loading="lazy" />
          )}
          {p.media && p.mediaType === 'video' && (
            <video src={p.media} style={styles.media} muted autoPlay loop playsInline />
          )}

          <div style={styles.tags}>
            {p.tags.map((t) => (
              <span key={t} style={styles.tag}>{t}</span>
            ))}
          </div>

          {p.link && (
            <a href={p.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              View Project &#8599;
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

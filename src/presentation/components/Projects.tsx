"use client";
import styles from "../styles/Projects.module.css";
import { useProjects } from "../hooks/useProjects";

export default function Projects() {
  const { projects, loading, error } = useProjects();
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.label}>PROJECTS</p>
          <h2 className={styles.heading}>
            <span className={styles.headingMuted}>Things I&apos;ve </span>
            <span className={styles.headingBold}>Shipped.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {loading ? (
            <div className={styles.loading}>Loading projects...</div>
          ) : error ? (
            <div className={styles.error}>Error loading projects: {error}</div>
          ) : (
            projects.map((project, i) => (
              <div
                key={i}
                className={`${styles.card} ${project.featured ? styles.cardFeatured : ""}`}
              >
                {/* Top row */}
                <div className={styles.cardTop}>
                  <span className={styles.tag}>{project.tag}</span>
                  <div className={styles.cardLinks}>
                    {/* Repo icon */}
                  
                    {/* External link icon */}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="Live site">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                {/* Tech stack */}
                <div className={styles.techList}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
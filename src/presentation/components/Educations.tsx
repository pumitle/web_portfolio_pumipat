"use client";
import styles from "../styles/Education.module.css";
import { useEducations } from "../hooks/useEducations";
import { useKnowledgeGraphAnimation } from "../../presentation/hooks/useKnowledgeGraphAnimation";

export default function Educations() {
  const { educations, loading, error } = useEducations();
  const canvasRef = useKnowledgeGraphAnimation();

  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>

        {/* Left: content */}
        <div className={styles.left}>
          <div className={styles.header}>
            <p className={styles.label}>EDUCATION</p>
            <h2 className={styles.heading}>
              <span className={styles.headingMuted}>How I </span>
              <span className={styles.headingBold}>Got Here.</span>
            </h2>
          </div>

          <div className={styles.cardList}>
            {loading ? (
              <div className={styles.loading}>Loading education...</div>
            ) : error ? (
              <div className={styles.error}>Error loading education: {error}</div>
            ) : (
              educations.map((edu, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.accentBar} />
                  <div className={styles.cardBody}>
                    <div className={styles.cardTop}>
                      <div>
                        <h3 className={styles.degree}>{edu.degree}</h3>
                        <p className={styles.institution}>{edu.institution}</p>
                      </div>
                      <span className={styles.duration}>{edu.duration}</span>
                    </div>

                    <p className={styles.gpax}>
                      GPAX <span className={styles.gpaxValue}>{edu.gpax}</span>
                    </p>

                    <div className={styles.tags}>
                      {edu.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: knowledge graph animation */}
        <div className={styles.right}>
          <canvas ref={canvasRef} className={styles.canvas} />
          <p className={styles.canvasCaption}>knowledge graph</p>
        </div>

      </div>
    </section>
  );
}
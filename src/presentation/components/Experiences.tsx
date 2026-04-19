"use client";
import styles from "../styles/Experiences.module.css";
import { useExperiences } from "../hooks/useExperiences";
import { useCanvasAnimation } from "../hooks/useCanvasAnimation";

export default function Experiences() {
  const canvasRef = useCanvasAnimation();
  const { experiences, loading, error } = useExperiences();

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>

        {/* Left: Canvas animation */}
        <div className={styles.left}>
          <canvas ref={canvasRef} className={styles.canvas} />
          <div className={styles.leftLabel}>
            <p className={styles.sectionLabel}>EXPERIENCE</p>
            <h2 className={styles.heading}>
              <span className={styles.headingMuted}>Where</span>
              <br />
              <span className={styles.headingBold}>I&apos;ve Built.</span>
            </h2>
          </div>
        </div>

        {/* Right: Timeline */}
        <div className={styles.right}>
          <div className={styles.timeline}>
            {loading ? (
              <div className={styles.loading}>Loading experiences...</div>
            ) : error ? (
              <div className={styles.error}>Error: {error}</div>
            ) : (
              experiences.map((exp, i) => (
                <div key={i} className={styles.timelineItem}>
                  {/* Dot + line */}
                  <div className={styles.timelineTrack}>
                    <div className={styles.dot} />
                    {i < experiences.length - 1 && <div className={styles.line} />}
                  </div>

                  {/* Card */}
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <span className={styles.duration}>{exp.duration}</span>
                    </div>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    <p className={styles.description}>{exp.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
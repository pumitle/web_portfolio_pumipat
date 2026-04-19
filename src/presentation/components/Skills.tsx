"use client";
import styles from "../styles/Skills.module.css";
import { useSkills } from "../hooks/useSkills";

export default function Skills() {
  const { skills, loading, error } = useSkills();
  const doubled = skills ? [...skills, ...skills] : [];

  return (
    <section id="skills" className={styles.section}>
      <p className={styles.label}>TECHNOLOGIES &amp; TOOLS</p>

      {loading ? (
        <div className={styles.loading}>Loading skills...</div>
      ) : error ? (
        <div className={styles.error}>Error loading skills: {error}</div>
      ) : (
        <div className={styles.tagSlider}>
          <div className={styles.tagList}>
            {doubled.map((skill, index) => (
              <span key={`${skill.name}-${index}`} className={styles.tag}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width={16}
                  height={16}
                  className={styles.tagIcon}
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
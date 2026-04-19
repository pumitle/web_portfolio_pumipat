"use client";
import Image from "next/image";
import styles from "../styles/About.module.css";
import { useSkillCategories } from "../hooks/useSkillCategories";
import { SkillIcon } from "./SkillIcon";

export default function About() {
  const { skillCategories, loading, error } = useSkillCategories();
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
 
        {/* Left */}
        <div className={styles.left}>
 
          {/* Profile Image */}
          <div className={styles.profileWrapper}>
            <Image
              src="/images/IMG_1422.JPG"
              alt="Pumipat Nadee"
              width={200}
              height={200}
              className={styles.profileImage}
            />
            <span className={styles.profileOnline} />
          </div>
 
          <h2 className={styles.heading}>
            <span className={styles.headingMuted}>Who</span>
            <span className={styles.headingBold}> I Am?</span>
          </h2>
 
          <p className={styles.paragraph}>
            I am Pumipat Nadee, a dedicated new graduate software developer building polished frontends with TypeScript and React, paired with scalable backend systems in Go, Node.js, and Java. I care about clean code, performance, and delivering real value for users and teams.
          </p>
        </div>
 
        {/* Right: Skill Cards Grid */}
        <div className={styles.grid}>
          {loading ? (
            <div className={styles.loading}>Loading skills...</div>
          ) : error ? (
            <div className={styles.error}>Error loading skills: {error}</div>
          ) : (
            skillCategories.map((skill) => (
              <div key={skill.title} className={styles.card}>
                <span className={`${styles.icon} ${styles[`icon_${skill.color}`]}`}>
                  <SkillIcon type={skill.iconType} />
                </span>
                <h3 className={styles.cardTitle}>{skill.title}</h3>
                <p className={styles.cardDesc}>{skill.description}</p>
              </div>
            ))
          )}
        </div>
 
      </div>
    </section>
  );
}
 
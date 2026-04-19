"use client";
import { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building things end-to-end.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const codePanels = [0, 1, 2];
  const lineWidths = ["short", "medium", "long", "long", "medium"] as const;

  return (
    <section id="home" className={styles.section}>

      {/* Hero Body */}
      <div className={styles.body}>
        {/* Left Content */}
        <div className={styles.left}>
          <span className={styles.statusBadge}>&gt;_ System Online</span>

          <h1 className={styles.title}>
            <span className={styles.titleName}>Pumipat Nadee</span>
            <span className={styles.titleRole}>Full Stack</span>
            <span className={styles.titleHighlight}>Developer</span>
          </h1>

          <p className={styles.quote}>"{typedText}"</p>

          <div className={styles.ctaGroup}>
            <a href="https://github.com/pumitle" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>View Work →</a>
            <a href="#contact" className={styles.btnSecondary}>Contact Me</a>
          </div>
        </div>

        {/* Right: Monitor Mockup */}
        <div className={styles.right}>
          <div className={styles.monitorFrame}>
            <div className={styles.monitorInner}>
              {codePanels.map((panel) => (
                <div className={styles.codePanel} key={panel}>
                  {Array.from({ length: 22 }).map((_, i) => {
                    const width = lineWidths[i % lineWidths.length];
                    const color =
                      i % 7 === 0 ? styles.cyan :
                      i % 5 === 0 ? styles.blue :
                      i % 9 === 0 ? styles.orange : "";

                    return (
                      <div
                        key={i}
                        className={`${styles.codeLine} ${styles[width]} ${color}`}
                        style={{ animationDelay: `${(i + panel * 3) * 0.12}s` }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.monitorGlow} />
        </div>
      </div>
    </section>
  );
}
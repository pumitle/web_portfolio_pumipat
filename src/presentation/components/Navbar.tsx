import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        POTFOLIO<span className={styles.logoDot}>.</span>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact" className={styles.navActive}>Contact</a></li>
      </ul>
    </nav>
  );
}

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Rayan el Kaouid</div>
      <ul className={styles.links}>
        <li>
          <a href="#about">Over mij</a>
        </li>
        <li>
          <a href="#experience">Ervaring</a>
        </li>
        <li>
          <a href="#projects">Projecten</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="/CV Rayan juist (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

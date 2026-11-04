import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>Over mij</h2>
      <div className={styles.container}>
        <div className={styles.aboutCard}>
          <p className={styles.introduction}>
            Ik studeerde in 2026 af als programmeur aan AP Hogeschool. Tijdens
            mijn stage bij Trans-IT werkte ik als full-stack developer. Ik ben
            analytisch, leergierig en klaar om te starten in mijn eerste vaste
            functie als developer.
          </p>

          <div className={styles.skillsContainer}>
            <h3 className={styles.skillsTitle}>Mijn Expertise</h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <h4>Frontend</h4>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>C#</li>
                  <li>SQL</li>
                  <li>Full-stack ontwikkeling</li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h4>Tools & Omgeving</h4>
                <ul>
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Linux</li>
                  <li>Samenwerking in team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

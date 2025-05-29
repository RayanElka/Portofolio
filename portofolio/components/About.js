import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>Over mij</h2>
      <div className={styles.container}>
        <div className={styles.aboutCard}>
          <p className={styles.introduction}>
            Analytisch, enthousiast en leergierig. Ik geloof in slimme digitale
            oplossingen en duidelijke communicatie.
          </p>

          <div className={styles.skillsContainer}>
            <h3 className={styles.skillsTitle}>Mijn Expertise</h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <h4>Frontend</h4>
                <ul>
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h4>Backend</h4>
                <ul>
                  <li>.NET Core</li>
                  <li>C#</li>
                  <li>SQL</li>
                  <li>API Development</li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h4>Tools & Methods</h4>
                <ul>
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Agile/Scrum</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

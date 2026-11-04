import styles from "../styles/About.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const isNl = language === "nl";

  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>{isNl ? "Over mij" : "About me"}</h2>
      <div className={styles.container}>
        <div className={styles.aboutCard}>
          <p className={styles.introduction}>
            {isNl
              ? "Ik studeerde in 2026 af als programmeur aan AP Hogeschool. Tijdens mijn stage bij Trans-IT werkte ik als full-stack developer. Ik ben analytisch, leergierig en klaar om te starten in mijn eerste vaste functie als developer."
              : "I graduated in 2026 as a programmer at AP University College. During my internship at Trans-IT, I worked as a full-stack developer. I am analytical, eager to learn, and ready to start my first full-time developer role."}
          </p>

          <div className={styles.skillsContainer}>
            <h3 className={styles.skillsTitle}>
              {isNl ? "Mijn Expertise" : "My Expertise"}
            </h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <h4>Frontend</h4>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>{isNl ? "Responsive Design" : "Responsive Design"}</li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>C#</li>
                  <li>SQL</li>
                  <li>
                    {isNl ? "Full-stack ontwikkeling" : "Full-stack development"}
                  </li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h4>{isNl ? "Tools & Omgeving" : "Tools & Environment"}</h4>
                <ul>
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Linux</li>
                  <li>{isNl ? "Samenwerking in team" : "Team collaboration"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

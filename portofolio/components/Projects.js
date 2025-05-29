// Je zou ook een icoon voor 'live demo' kunnen importeren, bv. FaExternalLinkAlt
import { FaGithub, FaMobileAlt, FaExternalLinkAlt } from "react-icons/fa";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Bobkes",
    github: "https://github.com/orhancalik/Bobkes",
    live: "https://bobkes.onrender.com/",
    image: "/pokemon.png",
    description:
      "Een originele webapplicatie waar gebruikers interactieve mini-games kunnen ontdekken en spelen. Gebouwd met een modern JavaScript-framework en gericht op snelle, leuke ervaringen.",
  },
  {
    title: "Webontwikkeling Project Finance",
    github: "https://github.com/RayanElka/Webontwikkeling-project-24-25",
    live: "https://webontwikkeling-project-24-25-1.onrender.com",
    image: "/Finance.png", // Updated image path

    description:
      "Solo-webproject waarin ik verschillende webtechnieken en frameworks test, optimaliseer en visualiseer. Experimenteerruimte voor nieuwe technologieën & creatieve ideeën.",
  },
  {
    title: "Avatar Mobile App (In Progress)",
    image: "/avatarjuist.png", // Updated image path
    description:
      "Deze mobiele app (React Native, TypeScript) is volledig modulair opgezet. Gebruikers kunnen via verschillende schermen alle episodes/seasons bekijken, quiz spelen, en een character screen voor info over je favoriete avatar character. Modules: character-list, quiz, Episodes, lokale storage. Structuur: custom navigatie, herbruikbare componenten, theming & moderne best practices.",
    isApp: true,
  },
  {
    title: "Sociale Media Api",
    image: "/deskdrive.jpg", // Added image
    description:
      "Ontwikkeld een geavanceerd social media planning systeem dat automatisch berichten plaatst op sociale media volgens een vooraf ingesteld tijdschema of een directe post. Deze full-stack applicatie biedt een oplossing voor professionals en marketingteams die hun online aanwezigheid willen optimaliseren door content strategisch in te plannen. (Groepswerk voor een bedrijfsproject)",
  },
];

export default function Projects() {
  return (
    <section className={styles.projectSection}>
      <h2 className={styles.sectionTitle}>Projecten</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className={`${styles.projectImage} ${
                  project.title === "Avatar Mobile App (In Progress)"
                    ? styles.avatarAppImage
                    : ""
                }`}
              />
            ) : (
              <FaMobileAlt size={48} color="#46a6fd" />
            )}

            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>
                {project.title}
                {project.isApp && (
                  <FaMobileAlt size={16} style={{ marginLeft: "8px" }} />
                )}
              </h3>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectLinks}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveLink}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

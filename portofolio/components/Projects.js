// Je zou ook een icoon voor 'live demo' kunnen importeren, bv. FaExternalLinkAlt
import { FaGithub, FaMobileAlt, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    titleNl: "Trans-IT Stageproject",
    titleEn: "Trans-IT Internship Project",
    image: "/trans-it-logo.svg",
    descriptionNl:
      "Tijdens mijn stage bij Trans-IT werkte ik aan full-stack softwareontwikkeling: features uitwerken, code verbeteren en samenwerken op een professionele workflow.",
    descriptionEn:
      "During my internship at Trans-IT, I worked on full-stack software development: implementing features, improving code, and collaborating in a professional workflow.",
    stack: "JavaScript, TypeScript, Node.js, SQL",
    highlightNl: "Stage 2026",
    highlightEn: "Internship 2026",
  },
  {
    titleNl: "Stageblog",
    titleEn: "Internship Blog",
    live: "https://wpl-stage-blog.vercel.app",
    descriptionNl:
      "Persoonlijke stageblog waarin ik mijn leerproces, technische keuzes en voortgang tijdens mijn stage als full-stack developer documenteerde.",
    descriptionEn:
      "Personal internship blog where I documented my learning process, technical choices, and progress during my full-stack internship.",
    stack: "Next.js, CSS",
    highlightNl: "Live",
    highlightEn: "Live",
  },
  {
    titleNl: "Bobkes",
    titleEn: "Bobkes",
    github: "https://github.com/orhancalik/Bobkes",
    live: "https://bobkes.onrender.com/",
    image: "/pokemon.png",
    descriptionNl:
      "Een originele webapplicatie waar gebruikers interactieve mini-games kunnen ontdekken en spelen. Gebouwd met een modern JavaScript-framework en gericht op snelle, leuke ervaringen.",
    descriptionEn:
      "An original web application where users can discover and play interactive mini-games. Built with a modern JavaScript stack and focused on fast, fun experiences.",
    stack: "JavaScript, Node.js",
    highlightNl: "Team",
    highlightEn: "Team",
  },
  {
    titleNl: "Webontwikkeling Project Finance",
    titleEn: "Web Development Finance Project",
    github: "https://github.com/RayanElka/Webontwikkeling-project-24-25",
    live: "https://webontwikkeling-project-24-25-1.onrender.com",
    image: "/Finance.png", // Updated image path

    descriptionNl:
      "Solo-webproject waarin ik verschillende webtechnieken en frameworks test, optimaliseer en visualiseer. Experimenteerruimte voor nieuwe technologieën & creatieve ideeën.",
    descriptionEn:
      "Solo web project where I test, optimize, and visualize different web technologies and frameworks. A practical playground for new technologies and creative ideas.",
    stack: "JavaScript, HTML, CSS",
    highlightNl: "Solo",
    highlightEn: "Solo",
  },
  {
    titleNl: "Avatar Mobile App (In Progress)",
    titleEn: "Avatar Mobile App (In Progress)",
    image: "/avatarjuist.png", // Updated image path
    descriptionNl:
      "Deze mobiele app (React Native, TypeScript) is volledig modulair opgezet. Gebruikers kunnen via verschillende schermen alle episodes/seasons bekijken, quiz spelen, en een character screen voor info over je favoriete avatar character. Modules: character-list, quiz, Episodes, lokale storage. Structuur: custom navigatie, herbruikbare componenten, theming & moderne best practices.",
    descriptionEn:
      "This mobile app (React Native, TypeScript) is fully modular. Users can browse episodes and seasons, play quizzes, and view character details. Modules include character list, quiz, episodes, and local storage with reusable components and modern architecture.",
    isApp: true,
    stack: "React Native, TypeScript",
    highlightNl: "In progress",
    highlightEn: "In progress",
  },
  {
    titleNl: "Sociale Media Api",
    titleEn: "Social Media API",
    image: "/deskdrive.jpg", // Added image
    descriptionNl:
      "Ontwikkeld een geavanceerd social media planning systeem dat automatisch berichten plaatst op sociale media volgens een vooraf ingesteld tijdschema of een directe post. Deze full-stack applicatie biedt een oplossing voor professionals en marketingteams die hun online aanwezigheid willen optimaliseren door content strategisch in te plannen. (Groepswerk voor een bedrijfsproject)",
    descriptionEn:
      "Developed an advanced social media scheduling system that posts automatically based on predefined timing or direct publishing. This full-stack application helps professionals and marketing teams optimize their online presence through strategic planning. (Team project)",
    stack: "API, Full-stack",
    highlightNl: "Groepswerk",
    highlightEn: "Team project",
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const isNl = language === "nl";

  return (
    <section className={styles.projectSection}>
      <h2 className={styles.sectionTitle}>{isNl ? "Projecten" : "Projects"}</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {project.image ? (
              <img
                src={project.image}
                alt={`${isNl ? project.titleNl : project.titleEn} preview`}
                className={`${styles.projectImage} ${
                  (isNl ? project.titleNl : project.titleEn) ===
                  "Avatar Mobile App (In Progress)"
                    ? styles.avatarAppImage
                    : ""
                }`}
              />
            ) : (
              <FaMobileAlt size={48} color="#46a6fd" />
            )}

            <div className={styles.projectContent}>
              {(project.highlightNl || project.highlightEn) && (
                <span className={styles.projectBadge}>
                  {isNl ? project.highlightNl : project.highlightEn}
                </span>
              )}
              <h3 className={styles.projectTitle}>
                {isNl ? project.titleNl : project.titleEn}
                {project.isApp && (
                  <FaMobileAlt size={16} style={{ marginLeft: "8px" }} />
                )}
              </h3>
              {project.stack && (
                <p className={styles.projectStack}>{project.stack}</p>
              )}

              <p className={styles.projectDescription}>
                {isNl ? project.descriptionNl : project.descriptionEn}
              </p>

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
                    <FaExternalLinkAlt /> {isNl ? "Live Demo" : "Live Demo"}
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

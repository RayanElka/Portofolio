import styles from "../styles/Experience.module.css";
import { useLanguage } from "../context/LanguageContext";

const itExperiences = [
  {
    functieNl: "Full-stack developer (stage)",
    functieEn: "Full-stack developer (internship)",
    bedrijf: "Trans-IT",
    periodeNl: "Jan 2026 - Jun 2026",
    periodeEn: "Jan 2026 - Jun 2026",
    beschrijvingNl:
      "Stage in softwareontwikkeling als full-stack developer met focus op bouwen, testen en verbeteren van weboplossingen.",
    beschrijvingEn:
      "Software development internship as a full-stack developer with focus on building, testing, and improving web solutions.",
  },
  {
    functieNl: "AI Trainer",
    functieEn: "AI Trainer",
    bedrijf: "Outlier AI",
    periodeNl: "2023 - 2025",
    periodeEn: "2023 - 2025",
    beschrijvingNl:
      "Werken aan AI- en AI-coding trainingsprojecten in een remote context, met aandacht voor kwaliteit en consistente output.",
    beschrijvingEn:
      "Worked on AI and AI-coding training projects in a remote environment, with strong focus on quality and consistency.",
  },
];

const otherExperiences = [
  {
    functieNl: "Sporttoezicht",
    functieEn: "Sports supervision",
    bedrijfNl: "Gemeente",
    bedrijfEn: "Municipality",
    periodeNl: "2025 - 2026",
    periodeEn: "2025 - 2026",
    beschrijvingNl:
      "Toezicht en ondersteuning op sportactiviteiten met focus op veiligheid en samenwerking.",
    beschrijvingEn:
      "Supervised and supported sports activities with focus on safety and collaboration.",
  },
  {
    functieNl: "Orderpicker",
    functieEn: "Order picker",
    bedrijfNl: "PostNL, Bornem",
    bedrijfEn: "PostNL, Bornem",
    periodeNl: "2020 - 2022",
    periodeEn: "2020 - 2022",
    beschrijvingNl:
      "Verantwoordelijk voor het verzamelen en verzendklaar maken van bestellingen in het distributiecentrum van Bornem.",
    beschrijvingEn:
      "Responsible for picking and preparing orders for shipment in the Bornem distribution center.",
  },
  {
    functieNl: "Studentenjob",
    functieEn: "Student job",
    bedrijfNl: "Carrefour, Bornem",
    bedrijfEn: "Carrefour, Bornem",
    periodeNl: "2018 - 2020",
    periodeEn: "2018 - 2020",
    beschrijvingNl:
      "Diverse ondersteunende taken als student-medewerker in Bornem.",
    beschrijvingEn:
      "Performed various support tasks as a student employee in Bornem.",
  },
];

export default function Experience() {
  const { language } = useLanguage();
  const isNl = language === "nl";

  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>
        {isNl ? "Relevante IT-ervaring" : "Relevant IT experience"}
      </h2>
      <div className={styles.experienceGrid}>
        {itExperiences.map((exp, i) => (
          <div key={i} className={styles.experienceCard}>
            <h3 className={styles.jobTitle}>{isNl ? exp.functieNl : exp.functieEn}</h3>
            <h4 className={styles.company}>{exp.bedrijf}</h4>
            <strong className={styles.period}>{isNl ? exp.periodeNl : exp.periodeEn}</strong>
            <p className={styles.description}>
              {isNl ? exp.beschrijvingNl : exp.beschrijvingEn}
            </p>
          </div>
        ))}
      </div>

      <h2 className={styles.sectionTitle} style={{ marginTop: "2.5rem" }}>
        {isNl ? "Overige werkervaring" : "Other work experience"}
      </h2>
      <div className={styles.experienceGrid}>
        {otherExperiences.map((exp, i) => (
          <div key={i} className={styles.experienceCard}>
            <h3 className={styles.jobTitle}>{isNl ? exp.functieNl : exp.functieEn}</h3>
            <h4 className={styles.company}>{isNl ? exp.bedrijfNl : exp.bedrijfEn}</h4>
            <strong className={styles.period}>{isNl ? exp.periodeNl : exp.periodeEn}</strong>
            <p className={styles.description}>
              {isNl ? exp.beschrijvingNl : exp.beschrijvingEn}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import styles from "../styles/Experience.module.css";

const itExperiences = [
  {
    functie: "Full-stack developer (stage)",
    bedrijf: "Trans-IT",
    periode: "Jan 2026 - Jun 2026",
    beschrijving:
      "Stage in softwareontwikkeling als full-stack developer met focus op bouwen, testen en verbeteren van weboplossingen.",
  },
  {
    functie: "AI Trainer",
    bedrijf: "Outlier AI",
    periode: "2023 - 2025",
    beschrijving:
      "Werken aan AI- en AI-coding trainingsprojecten in een remote context, met aandacht voor kwaliteit en consistente output.",
  },
];

const otherExperiences = [
  {
    functie: "Sporttoezicht",
    bedrijf: "Gemeente",
    periode: "2025 - 2026",
    beschrijving:
      "Toezicht en ondersteuning op sportactiviteiten met focus op veiligheid en samenwerking.",
  },
  {
    functie: "Orderpicker",
    bedrijf: "PostNL, Bornem",
    periode: "2020 - 2022",
    beschrijving:
      "Verantwoordelijk voor het verzamelen en verzendklaar maken van bestellingen in het distributiecentrum van Bornem.",
  },
  {
    functie: "Studentenjob",
    bedrijf: "Carrefour, Bornem",
    periode: "2018 - 2020",
    beschrijving:
      "Diverse ondersteunende taken als student-medewerker in Bornem.",
  },
];

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Relevante IT-ervaring</h2>
      <div className={styles.experienceGrid}>
        {itExperiences.map((exp, i) => (
          <div key={i} className={styles.experienceCard}>
            <h3 className={styles.jobTitle}>{exp.functie}</h3>
            <h4 className={styles.company}>{exp.bedrijf}</h4>
            <strong className={styles.period}>{exp.periode}</strong>
            <p className={styles.description}>{exp.beschrijving}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.sectionTitle} style={{ marginTop: "2.5rem" }}>
        Overige werkervaring
      </h2>
      <div className={styles.experienceGrid}>
        {otherExperiences.map((exp, i) => (
          <div key={i} className={styles.experienceCard}>
            <h3 className={styles.jobTitle}>{exp.functie}</h3>
            <h4 className={styles.company}>{exp.bedrijf}</h4>
            <strong className={styles.period}>{exp.periode}</strong>
            <p className={styles.description}>{exp.beschrijving}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

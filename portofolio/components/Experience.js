import styles from "../styles/Experience.module.css";

const experiences = [
  {
    functie: "AI Training & AI Coding Training",
    bedrijf: "Outlier AI",
    periode: "Nov 2024 - heden",
    beschrijving:
      "Werken aan het trainen en ontwikkelen van AI-systemen en het ondersteunen van AI-coding projecten. Remote functie gericht op innovatie en technologie.",
  },
  {
    functie: "Schoonmaker/Handyman",
    bedrijf: "ISS Facility Services/Cleaningservices",
    periode: "Aug 2023 — Sept 2024",
    beschrijving:
      "Uitvoeren van schoonmaak- en kluswerkzaamheden op verschillende locaties in Puurs.",
  },
  {
    functie: "Orderpicker",
    bedrijf: "PostNL",
    periode: "2021 — 2023",
    beschrijving:
      "Verantwoordelijk voor het verzamelen en verzendklaar maken van bestellingen in het distributiecentrum van Bornem.",
  },
  {
    functie: "Student",
    bedrijf: "Carrefour",
    periode: "2018 — 2021",
    beschrijving:
      "Diverse ondersteunende taken als student-medewerker in Bornem.",
  },
];

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Werkervaring</h2>
      <div className={styles.experienceGrid}>
        {experiences.map((exp, i) => (
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

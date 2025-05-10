const experiences = [
  {
    functie: "Data & Project Consultant",
    bedrijf: "Jouw Bedrijf",
    periode: "2024 - heden",
    beschrijving: "Consulting, data, innovatie & projectbegeleiding.",
  },
  // ...meer ervaring...
];
export default function Experience() {
  return (
    <section
      id="experience"
      style={{ background: "#f2f7fb", padding: "54px 0" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2.1rem" }}>
        Werkervaring
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.3rem",
          justifyContent: "center",
        }}
      >
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 2px 10px rgba(80,140,220,.07)",
              maxWidth: "300px",
              padding: "1.6rem 1.1rem",
              margin: "6px",
            }}
          >
            <h3>{exp.functie}</h3>
            <h4 style={{ color: "#46a6fd" }}>{exp.bedrijf}</h4>
            <strong>{exp.periode}</strong>
            <p style={{ marginTop: "1em" }}>{exp.beschrijving}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

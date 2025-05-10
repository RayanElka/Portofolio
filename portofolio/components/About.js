export default function About() {
  return (
    <section id="about" style={{ padding: "40px 0", background: "#fff" }}>
      <h2 style={{ textAlign: "center" }}>Over mij</h2>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <p>
          Analytisch, enthousiast en leergierig. Ik geloof in slimme digitale
          oplossingen en duidelijke communicatie.
        </p>
        <ul
          style={{
            display: "inline-block",
            textAlign: "left",
            margin: "1.5em auto",
            padding: "0 1em",
            fontSize: "1.07em",
          }}
        >
          <li>Data-analyse</li>
          <li>Projectmanagement</li>
          <li>Consulting & advies</li>
          <li>Goede communicator</li>
          <li>Klantgerichte blik</li>
        </ul>
      </div>
    </section>
  );
}

import BubbleBackground from "./BubbleBackground";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "320px",
        background: "linear-gradient(110deg, #46a6fd 50%, #234 100%)",
        color: "#fff",
        textAlign: "center",
        padding: "90px 0 110px 0",
      }}
    >
      <BubbleBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{ fontSize: "2.9rem", marginBottom: "1rem" }}>
          Hi, ik ben Rayan el Kaouid
        </h1>
        <p
          style={{
            fontSize: "1.18rem",
            maxWidth: 540,
            margin: "0 auto 1.7rem",
          }}
        >
          Gemotiveerde student met een passie voor data en innovatie, op zoek
          naar een uitdagende stageplek. <br />
          <span
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "4px 12px",
              borderRadius: 16,
              fontWeight: "bold",
            }}
          >
            I build creative digital solutions
          </span>
        </p>
      </div>
    </section>
  );
}

import BubbleBackground from "./BubbleBackground";
import Link from "next/link";

export default function Hero() {
  const badges = ["Temse, België", "Beschikbaar voor junior rollen", "Startklaar"];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "360px",
        background:
          "linear-gradient(130deg, rgba(27,142,224,0.92) 0%, rgba(14,41,65,0.94) 64%, rgba(10,31,52,0.96) 100%)",
        color: "#fff",
        textAlign: "center",
        padding: "92px 0 86px 0",
      }}
    >
      <BubbleBackground />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 940,
          margin: "0 auto",
          padding: "0 14px",
        }}
      >
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "1rem" }}>
          Hi, ik ben Rayan el Kaouid
        </h1>
        <p
          style={{
            fontSize: "1.06rem",
            maxWidth: 720,
            margin: "0 auto 1.7rem",
            lineHeight: 1.75,
          }}
        >
          Junior Software Developer / Full-stack uit Temse. Afgestudeerd in
          2026 aan AP Hogeschool en op zoek naar een eerste vaste job als
          developer.
          <br />
          <span
            style={{
              display: "inline-block",
              marginTop: 12,
              background: "rgba(255,255,255,0.13)",
              padding: "5px 14px",
              borderRadius: 16,
              fontWeight: 700,
            }}
          >
            JavaScript, TypeScript, Node.js, C#, SQL en Linux
          </span>
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 18,
          }}
        >
          {badges.map((badge) => (
            <span
              key={badge}
              style={{
                padding: "6px 12px",
                border: "1px solid rgba(255,255,255,0.33)",
                borderRadius: 999,
                fontSize: 13,
                background: "rgba(255,255,255,0.08)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <Link
            href="/contact"
            style={{
              background: "#fff",
              color: "#123",
              padding: "10px 18px",
              borderRadius: 999,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Contacteer mij
          </Link>
          <a
            href="/cv-rayan-el-kaouid-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.6)",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 999,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Bekijk CV
          </a>
        </div>
      </div>
    </section>
  );
}

import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiDotnet, SiMysql, SiTypescript } from "react-icons/si";
import { IoLogoWindows } from "react-icons/io";

const skills = [
  {
    name: "Microsoft Office",
    icon: <IoLogoWindows color="#0078D4" size={38} />,
  },
  {
    name: "C# / .NET",
    icon: <SiDotnet color="#5C2D91" size={38} />,
    style: { background: "radial-gradient(circle, #e7e1ff 60%, #f6f5ff 100%)" },
  },
  {
    name: "HTML/CSS",
    icon: (
      <span style={{ display: "flex", gap: 4 }}>
        <FaHtml5 color="#e44d26" size={32} />
        <FaCss3Alt color="#264de4" size={32} />
      </span>
    ),
    style: { background: "radial-gradient(circle, #ffe8e0 60%, #fcf6f2 100%)" },
  },
  {
    name: "SQL / MySQL",
    icon: <SiMysql color="#00758f" size={38} />,
    style: { background: "radial-gradient(circle, #e8f8ff 60%, #f3fdff 100%)" },
  },
  {
    name: "Javascript",
    icon: <FaJs color="#f0db4f" size={38} />,
    style: { background: "radial-gradient(circle, #fffbe0 60%, #f7fbfb 100%)" },
  },
  {
    name: "Typescript / Node.js",
    icon: (
      <span style={{ display: "flex", gap: 4 }}>
        <SiTypescript color="#3178C6" size={32} />
        <FaNodeJs color="#3c873a" size={32} />
      </span>
    ),
    style: { background: "radial-gradient(circle, #e5f7f8 60%, #f6ffff 100%)" },
  },
  {
    name: "React.js",
    icon: <FaReact color="#61DBFB" size={38} />,
    style: { background: "radial-gradient(circle, #eafffd 60%, #f5fcfe 100%)" },
  },
  {
    name: "React Native",
    icon: <FaReact color="#38d7ff" size={38} />,
    style: { background: "radial-gradient(circle, #e7f7ff 60%, #f4fdff 100%)" },
  },
];

export default function Skills() {
  return (
    <section
      style={{
        padding: "60px 0",
        background: "linear-gradient(120deg,#f3faff,#e7f2fb 100%)",
      }}
    >
      <h2 style={{ textAlign: "center", fontWeight: 800, marginBottom: 8 }}>
        Mijn Skills
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "36px 40px",
          margin: "40px auto 0 auto",
          maxWidth: "940px",
        }}
      >
        {skills.map((s, i) => (
          <div
            key={i}
            style={{
              ...{
                borderRadius: "20px",
                padding: "30px 19px 24px 19px",
                minWidth: "147px",
                minHeight: "116px",
                boxShadow: "0 7px 34px rgba(0,63,177,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform .23s, box-shadow .23s",
                position: "relative",
                border: "2px solid rgba(70,166,253,0.12)",
                boxSizing: "border-box",
                cursor: "pointer",
                overflow: "hidden",
                background: "#fff",
              },
              ...s.style,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.07)";
              e.currentTarget.style.boxShadow = "0 10px 35px #2fdfff44";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 7px 34px rgba(0,63,177,0.08)";
            }}
          >
            <div
              style={{
                filter: "drop-shadow(0px 3px 10px #46a6fd33)",
              }}
            >
              {s.icon}
            </div>
            <div
              style={{
                fontWeight: 700,
                marginTop: "13px",
                color: "#253c51",
                fontSize: "1.06rem",
                letterSpacing: 0.2,
                textAlign: "center",
              }}
            >
              {s.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

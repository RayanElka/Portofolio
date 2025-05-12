import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "../styles/keen-slider.css";
import {
  FaGithub,
  FaMobileAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

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
    title: "Web24",
    github: "https://github.com/RayanElka/web24",
    description:
      "Solo-webproject waarin ik verschillende webtechnieken en frameworks test, optimaliseer en visualiseer. Experimenteerruimte voor nieuwe technologieën & creatieve ideeën.",
  },
  {
    title: "Avatar Mobile App (In Progress)",
    link: "",
    image: "/Avatar1.png",
    image: "/Avatar2.png",
    image: "/Avatar3.png",
    description:
      "Deze mobiele app (React Native, TypeScript) is volledig modulair opgezet. Gebruikers kunnen via verschillende schermen alle episodes/seasons bekijken, quiz spelen, en een character screen voor info over je favoriete avatar character. Modules: character-list, quiz, Episodes, lokale storage. Structuur: custom navigatie, herbruikbare componenten, theming & moderne best practices.",
    isApp: true,
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1.1,
      spacing: 15,
    },
    loop: true,
    breakpoints: {
      "(min-width: 700px)": { slides: { perView: 2, spacing: 30 } },
      "(min-width: 1050px)": { slides: { perView: 3, spacing: 32 } },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section id="projects" style={{ background: "#f8fbff", padding: "54px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2.1rem" }}>
          Projecten
        </h2>

        <div className="navigation-wrapper" style={{ position: "relative" }}>
          <div ref={sliderRef} className="keen-slider">
            {projects.map((project, index) => (
              <div
                className="keen-slider__slide"
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  boxShadow: "0 2px 10px rgba(80,140,220,.09)",
                  padding: "2rem 1.3rem",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "340px",
                  height: "auto",
                }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    style={{
                      borderRadius: "10px",
                      width: "85px",
                      height: "85px",
                      objectFit: "cover",
                      margin: "0 auto 12px auto",
                      boxShadow: "0 2px 10px #2fdfff2c",
                    }}
                  />
                )}

                <h3
                  style={{
                    marginBottom: ".5em",
                    color: "#1576c9",
                    fontSize: "1.18em",
                    textAlign: "center",
                  }}
                >
                  {project.title}
                </h3>

                <div
                  style={{ flex: 1, marginBottom: ".7em", textAlign: "left" }}
                >
                  {project.isApp ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 7,
                          fontWeight: 700,
                          fontSize: "1.01em",
                          marginBottom: 3,
                        }}
                      >
                        <FaMobileAlt style={{ color: "#2fdfff" }} />
                        <span>React Native App</span>
                      </div>
                      <div>
                        {project.description.split(". ").slice(0, 1).join(". ")}
                        .
                        <ul
                          style={{
                            margin: "12px 0 0 20px",
                            padding: 0,
                            fontSize: "0.98em",
                          }}
                        >
                          {project.description
                            .split(". ")
                            .slice(1)
                            .map((item, i) => (
                              <li key={i}>{item.trim()}</li>
                            ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    project.description
                  )}
                </div>

                <div style={{ marginTop: "auto", display: "flex", gap: 10 }}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "#fff",
                        background: "#46a6fd",
                        fontWeight: "bold",
                        textDecoration: "none",
                        borderRadius: 6,
                        padding: "7px 16px",
                      }}
                    >
                      🌐 Live demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "#46a6fd",
                        fontWeight: "bold",
                        textDecoration: "none",
                        background: "none",
                      }}
                    >
                      <FaGithub style={{ fontSize: "1.15em" }} /> Bekijk op
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="arrow arrow-left"
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "-30px",
                  background: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={() => instanceRef.current?.next()}
                className="arrow arrow-right"
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "-30px",
                  background: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>

        {loaded && instanceRef.current && (
          <div
            className="dots"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={"dot" + (currentSlide === idx ? " active" : "")}
                style={{
                  border: "none",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  margin: "0 5px",
                  padding: 0,
                  cursor: "pointer",
                  background: currentSlide === idx ? "#1576c9" : "#ccc",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

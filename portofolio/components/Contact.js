import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Contact.module.css";

export default function Contact() {
  const { language } = useLanguage();
  const isNl = language === "nl";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(isNl ? "Bezig met verzenden..." : "Sending...");
    try {
      const res = await fetch("https://formspree.io/f/xrblkqyn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus(
          isNl ? "Bericht succesvol verzonden!" : "Message sent successfully!"
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(isNl ? "Er ging iets mis. Probeer opnieuw." : "Something went wrong. Please try again.");
      }
    } catch {
      setStatus(isNl ? "Er ging iets mis. Probeer opnieuw." : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2>{isNl ? "Contact" : "Contact"}</h2>
      <p className={styles.introText}>
        {isNl
          ? "Zin om samen te werken of heb je een vacature die past bij mijn profiel? Stuur gerust een bericht."
          : "Open to collaboration or have a vacancy that matches my profile? Feel free to send a message."}
      </p>
      <div className={styles.contactContainer}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            type="text"
            placeholder={isNl ? "Naam" : "Name"}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder={isNl ? "Email" : "Email"}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <textarea
            placeholder={isNl ? "Bericht" : "Message"}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
          <button type="submit">{isNl ? "Verstuur" : "Send"}</button>
          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>

        <div className={styles.contactInfo}>
          <h3>{isNl ? "Direct contact" : "Direct contact"}</h3>
          <a href="mailto:elkaouid@hotmail.com">elkaouid@hotmail.com</a>
          <a href="tel:+32485711419">+32 485 71 14 19</a>

          <div className={styles.socialButtons}>
            <a
              href="https://www.linkedin.com/in/rayan-el-kaouid-760336304/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <FaLinkedin size={24} />
              LinkedIn
            </a>

            <a
              href="https://github.com/RayanElka"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <FaGithub size={24} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

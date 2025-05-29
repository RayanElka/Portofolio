import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form handling logic here
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contact</h2>
      <div className={styles.contactContainer}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            type="text"
            placeholder="Naam"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Bericht"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
          <button type="submit">Verstuur</button>
        </form>

        <div className={styles.contactInfo}>
          <h3>Direct contact</h3>
          <a href="mailto:elkaouid@hotmail.com">elkaouid@hotmail.com</a>

          <div className={styles.socialButtons}>
            <div className={styles.lightButton}>
              <a
                href="https://www.linkedin.com/in/rayan-el-kaouid-760336304/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinButton}
              >
                <div className={styles.lightHolder}>
                  <div className={styles.dot}></div>
                  <div className={styles.light}></div>
                </div>
                <div className={styles.buttonHolder}>
                  <FaLinkedin size={50} />
                  LinkedIn
                </div>
              </a>
            </div>

            <div className={styles.lightButton}>
              <a
                href="https://github.com/RayanElka"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubButton}
              >
                <div className={styles.lightHolder}>
                  <div className={`${styles.dot} ${styles.githubDot}`}></div>
                  <div
                    className={`${styles.light} ${styles.githubLight}`}
                  ></div>
                </div>
                <div
                  className={`${styles.buttonHolder} ${styles.githubHolder}`}
                >
                  <FaGithub size={50} />
                  GitHub
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

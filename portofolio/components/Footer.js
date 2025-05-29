import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/rayan-el-kaouid-760336304/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/RayanElka"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
          <a href="mailto:elkaouid@hotmail.com" className={styles.socialLink}>
            <FaEnvelope size={24} />
            <span>Email</span>
          </a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Rayan el Kaouid. Alle rechten
          voorbehouden.
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const t = {
    about: language === "nl" ? "Over mij" : "About",
    experience: language === "nl" ? "Ervaring" : "Experience",
    projects: language === "nl" ? "Projecten" : "Projects",
    contact: language === "nl" ? "Contact" : "Contact",
    cv: language === "nl" ? "CV" : "Resume",
    langLabel: language === "nl" ? "EN" : "NL",
    langAria:
      language === "nl"
        ? "Switch to English"
        : "Schakel naar Nederlands",
  };

  // Sluit menu bij navigatie
  const handleNavClick = () => setOpen(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Rayan el Kaouid
      </Link>
      <button
        className={styles.hamburger}
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <FaTimes size={26} /> : <FaBars size={26} />}
      </button>
      <ul className={`${styles.links} ${open ? styles.open : ""}`}>
        <li>
          <Link
            href="/about"
            className={router.pathname === "/about" ? styles.active : ""}
            onClick={handleNavClick}
          >
            {t.about}
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className={router.pathname === "/experience" ? styles.active : ""}
            onClick={handleNavClick}
          >
            {t.experience}
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={router.pathname === "/projects" ? styles.active : ""}
            onClick={handleNavClick}
          >
            {t.projects}
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={router.pathname === "/contact" ? styles.active : ""}
            onClick={handleNavClick}
          >
            {t.contact}
          </Link>
        </li>
        <li>
          <a
            href="/cv-rayan-el-kaouid-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            {t.cv}
          </a>
        </li>
        <li>
          <button
            className={styles.languageToggle}
            onClick={toggleLanguage}
            aria-label={t.langAria}
            type="button"
          >
            {t.langLabel}
          </button>
        </li>
      </ul>
    </nav>
  );
}

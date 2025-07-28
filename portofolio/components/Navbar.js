import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

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
            Over mij
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className={router.pathname === "/experience" ? styles.active : ""}
            onClick={handleNavClick}
          >
            Ervaring
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={router.pathname === "/projects" ? styles.active : ""}
            onClick={handleNavClick}
          >
            Projecten
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={router.pathname === "/contact" ? styles.active : ""}
            onClick={handleNavClick}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            href="/CV Rayan juist (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Rayan el Kaouid
      </Link>
      <ul className={styles.links}>
        <li>
          <Link
            href="/about"
            className={router.pathname === "/about" ? styles.active : ""}
          >
            Over mij
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className={router.pathname === "/experience" ? styles.active : ""}
          >
            Ervaring
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={router.pathname === "/projects" ? styles.active : ""}
          >
            Projecten
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={router.pathname === "/contact" ? styles.active : ""}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            href="/CV Rayan juist (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

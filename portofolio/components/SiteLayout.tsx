import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { profile, type Locale } from "../content/portfolio";

const routes = [
  { href: "/projects", nl: "Projecten", en: "Work" },
  { href: "/experience", nl: "Ervaring", en: "Experience" },
  { href: "/about", nl: "Over mij", en: "About" },
  { href: "/contact", nl: "Contact", en: "Contact" },
] as const;

export function useLocale(): Locale {
  return useRouter().locale === "en" ? "en" : "nl";
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className={diagonal ? "arrow arrow-diagonal" : "arrow"} aria-hidden="true" />;
}

export function ProfileLinks({ locale }: { locale: Locale }) {
  return (
    <ul className="profile-links">
      <li><a href={profile.github}>GitHub <Arrow diagonal /></a></li>
      <li><a href={profile.linkedin}>LinkedIn <Arrow diagonal /></a></li>
      <li><a href={profile.cv}>{locale === "nl" ? "Cv (pdf)" : "CV (PDF)"} <Arrow diagonal /></a></li>
    </ul>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const locale = useLocale();
  const { resolvedTheme, setTheme } = useTheme();
  const nl = locale === "nl";

  return (
    <>
      <a className="skip-link" href="#main-content">{nl ? "Naar de inhoud" : "Skip to content"}</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link prefetch={false} href="/" className="brand">
            <span className="monogram" aria-hidden="true">RE<span>.</span></span>
            <span className="brand-name">{profile.name}</span>
          </Link>
          <nav aria-label={nl ? "Hoofdnavigatie" : "Main navigation"}>
            <ul className="nav-list">
              {routes.map((route) => {
                const currentPage = router.pathname === route.href;
                const currentSection = router.pathname.startsWith(`${route.href}/`);
                return (
                  <li key={route.href}>
                    <Link prefetch={false} href={route.href} aria-current={currentPage ? "page" : undefined} data-active={currentPage || currentSection}>
                      {route[locale]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="header-controls">
            <Link
              prefetch={false}
              href={{ pathname: router.pathname, query: router.query }}
              as={router.asPath}
              locale={nl ? "en" : "nl"}
              hrefLang={nl ? "en" : "nl"}
              lang={nl ? "en" : "nl"}
              aria-label={nl ? "EN — Switch to English" : "NL — Schakel naar Nederlands"}
              className="control locale-control"
            >
              {nl ? "EN" : "NL"}
            </Link>
            <button
              type="button"
              className="control theme-control"
              aria-label={nl ? "Kleurthema wisselen" : "Toggle color theme"}
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              <span aria-hidden="true" className="theme-icon" />
            </button>
          </div>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <div><strong>{profile.name}</strong><p>{nl ? "Full-stack developer · Temse, België" : "Full-stack developer · Temse, Belgium"}</p></div>
          <ProfileLinks locale={locale} />
        </div>
      </footer>
    </>
  );
}

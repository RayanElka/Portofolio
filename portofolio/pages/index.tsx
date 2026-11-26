import Link from "next/link";
import Seo from "../components/Seo";
import TechStack from "../components/TechStack";
import { AboutContent, ContactPanel, Hero, ProjectGrid, Timeline } from "../components/PortfolioSections";
import { Arrow, useLocale } from "../components/SiteLayout";

export default function Home() {
  const locale = useLocale();
  const nl = locale === "nl";

  return (
    <>
      <Seo
        title={nl ? "Rayan el Kaouid · Full-stack developer in Temse" : "Rayan el Kaouid · Full-stack developer in Belgium"}
        description={nl ? "Full-stack developer. Bekijk werk rond logistieke software, webapplicaties en TypeScript, of neem contact op." : "Full-stack developer. Explore my work on logistics software, web applications and TypeScript, or get in touch."}
        path="/"
        locale={locale}
      />
      <Hero locale={locale} />
      <section className="shell section" id="projecten" aria-labelledby="work-heading">
        <div className="section-heading">
          <h2 id="work-heading">{nl ? "Geselecteerd werk" : "Selected work"}</h2>
          <p>{nl ? "Drie projecten, van logistieke workflows tot interactieve webapps." : "Three projects, from logistics workflows to interactive web apps."}</p>
        </div>
        <ProjectGrid locale={locale} heading="h3" />
      </section>
      <section className="shell section" aria-labelledby="experience-heading">
        <div className="section-heading">
          <h2 id="experience-heading">{nl ? "Ervaring" : "Experience"}</h2>
          <Link className="text-action" href="/experience">{nl ? "Bekijk mijn loopbaan" : "Explore my experience"} <Arrow /></Link>
        </div>
        <Timeline locale={locale} heading="h3" />
      </section>
      <section className="shell section" aria-labelledby="about-heading">
        <div className="section-heading"><h2 id="about-heading">{nl ? "Over mij" : "About me"}</h2></div>
        <AboutContent locale={locale} heading="h3" />
      </section>
      <TechStack locale={locale} />
      <div className="shell section"><ContactPanel locale={locale} /></div>
    </>
  );
}

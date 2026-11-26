import Seo from "../../components/Seo";
import { PageIntro, ProjectGrid } from "../../components/PortfolioSections";
import { useLocale } from "../../components/SiteLayout";

export default function Projects() {
  const locale = useLocale();
  const nl = locale === "nl";
  const title = nl ? "Projecten" : "Projects";
  const description = nl
    ? "Drie cases waarin ik laat zien wat ik heb gebouwd, hoe ik het aanpakte en welke bijdrage ik leverde."
    : "Three case studies covering what I built, how I approached the work and what I contributed.";

  return (
    <div className="shell page">
      <Seo title={title} description={description} locale={locale} path="/projects" />
      <PageIntro title={title}>{description}</PageIntro>
      <ProjectGrid locale={locale} eager />
    </div>
  );
}

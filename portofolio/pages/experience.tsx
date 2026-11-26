import Link from "next/link";
import Seo from "../components/Seo";
import { PageIntro, Timeline } from "../components/PortfolioSections";
import { Arrow, useLocale } from "../components/SiteLayout";
import { profile } from "../content/portfolio";

export default function Experience() {
  const locale = useLocale();
  const nl = locale === "nl";
  const title = nl ? "Ervaring" : "Experience";
  const description = nl
    ? "Mijn stage als full-stack developer bij Trans-IT, mijn werk als AI Trainer bij Outlier AI en mijn opleiding Programmeren."
    : "My full-stack development internship at Trans-IT, my work as an AI Trainer at Outlier AI, and my Programming degree.";

  return (
    <div className="shell page">
      <Seo title={title} description={description} locale={locale} path="/experience" />
      <PageIntro title={title}>{description}</PageIntro>
      <Timeline locale={locale} />
      <div className="actions section-actions">
        <Link className="button primary" href="/projects/trans-it">{nl ? "Bekijk de stagecase" : "See the internship case study"} <Arrow /></Link>
        <a className="button secondary" href={profile.cv}>{nl ? "Cv bekijken" : "View CV"} <Arrow diagonal /></a>
      </div>
    </div>
  );
}

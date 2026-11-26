import Seo from "../components/Seo";
import { AboutContent, PageIntro } from "../components/PortfolioSections";
import { useLocale } from "../components/SiteLayout";

export default function About() {
  const locale = useLocale();
  const nl = locale === "nl";
  const title = nl ? "Over mij" : "About me";
  const description = nl
    ? "Ik ben Rayan, full-stack developer uit Temse. In 2026 studeerde ik af in Programmeren aan AP Hogeschool Antwerpen."
    : "I’m Rayan, a full-stack developer from Temse, Belgium. I graduated in Programming at AP University College Antwerp in 2026.";

  return (
    <div className="shell page">
      <Seo title={title} description={description} locale={locale} path="/about" />
      <PageIntro title={title}>{description}</PageIntro>
      <AboutContent locale={locale} />
    </div>
  );
}

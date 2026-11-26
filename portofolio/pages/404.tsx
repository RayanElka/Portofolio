import Link from "next/link";
import Seo from "../components/Seo";
import { PageIntro } from "../components/PortfolioSections";
import { Arrow, useLocale } from "../components/SiteLayout";

export default function NotFound() {
  const locale = useLocale();
  const nl = locale === "nl";
  const title = nl ? "Pagina niet gevonden" : "Page not found";
  const description = nl ? "Het adres verwijst naar een pagina die niet bestaat." : "This address doesn’t point to an existing page.";

  return (
    <div className="shell page">
      <Seo title={title} description={description} locale={locale} path="/404" noIndex />
      <PageIntro title={title}>{description}</PageIntro>
      <Link className="button primary" href="/">{nl ? "Naar de startpagina" : "Go to the homepage"} <Arrow /></Link>
    </div>
  );
}

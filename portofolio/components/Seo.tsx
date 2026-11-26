import Head from "next/head";
import { profile, type Locale } from "../content/portfolio";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  noIndex?: boolean;
};

const openGraphLocales: Record<Locale, string> = {
  nl: "nl_BE",
  en: "en_GB",
};

function localizedUrl(path: string, locale: Locale) {
  const prefix = locale === "en" ? "/en" : "";
  return new URL(path === "/" && prefix ? prefix : prefix + path, profile.siteUrl).href;
}

export default function Seo({
  title,
  description,
  path,
  locale,
  noIndex = false,
}: SeoProps) {
  const pageTitle = title.includes(profile.name) ? title : `${title} | ${profile.name}`;
  const canonical = localizedUrl(path, locale);
  const image = new URL("/og-portfolio.jpg", profile.siteUrl).href;
  const imageAlt = `${profile.name}, Full-stack Developer`;
  const alternateLocale = locale === "nl" ? "en" : "nl";
  const personSchema = path === "/" && !noIndex ? JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": new URL("/#rayan-el-kaouid", profile.siteUrl).href,
    name: profile.name,
    url: localizedUrl("/", "nl"),
    jobTitle: "Full-stack Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "AP Hogeschool Antwerpen",
    },
    sameAs: [profile.github, profile.linkedin],
  }).replace(/</g, "\\u003c") : null;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} key="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" key="favicon" />
      {noIndex ? (
        <meta name="robots" content="noindex, follow" key="robots" />
      ) : (
        <>
          <link rel="canonical" href={canonical} key="canonical" />
          <link rel="alternate" hrefLang="nl" href={localizedUrl(path, "nl")} key="hreflang-nl" />
          <link rel="alternate" hrefLang="en" href={localizedUrl(path, "en")} key="hreflang-en" />
          <link rel="alternate" hrefLang="x-default" href={localizedUrl(path, "nl")} key="hreflang-default" />
        </>
      )}
      <meta property="og:type" content="website" key="og-type" />
      <meta property="og:title" content={pageTitle} key="og-title" />
      <meta property="og:description" content={description} key="og-description" />
      <meta property="og:site_name" content={profile.name} key="og-site-name" />
      <meta property="og:url" content={canonical} key="og-url" />
      <meta property="og:locale" content={openGraphLocales[locale]} key="og-locale" />
      <meta property="og:locale:alternate" content={openGraphLocales[alternateLocale]} key="og-locale-alt" />
      <meta property="og:image" content={image} key="og-image" />
      <meta property="og:image:width" content="1200" key="og-image-width" />
      <meta property="og:image:height" content="630" key="og-image-height" />
      <meta property="og:image:alt" content={imageAlt} key="og-image-alt" />
      <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
      <meta name="twitter:title" content={pageTitle} key="twitter-title" />
      <meta name="twitter:description" content={description} key="twitter-description" />
      <meta name="twitter:image" content={image} key="twitter-image" />
      <meta name="twitter:image:alt" content={imageAlt} key="twitter-image-alt" />
      {personSchema && (
        <script type="application/ld+json" key="person" dangerouslySetInnerHTML={{ __html: personSchema }} />
      )}
    </Head>
  );
}

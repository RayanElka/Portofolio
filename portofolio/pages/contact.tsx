import ContactForm from "../components/ContactForm";
import Seo from "../components/Seo";
import { PageIntro } from "../components/PortfolioSections";
import { Arrow, ProfileLinks, useLocale } from "../components/SiteLayout";
import { profile } from "../content/portfolio";

export default function Contact() {
  const locale = useLocale();
  const nl = locale === "nl";
  const description = nl
    ? "Ik zoek een functie in softwareontwikkeling. Heb je een vacature die bij mijn profiel past? Ik hoor graag van je."
    : "I’m looking for a role in software development. If you’re hiring for a role that fits my profile, I’d like to hear from you.";

  return (
    <div className="shell page">
      <Seo title="Contact" description={description} locale={locale} path="/contact" />
      <PageIntro title="Contact">{description}</PageIntro>
      <div className="contact-grid">
        <section className="panel contact-direct" aria-labelledby="direct-heading">
          <h2 id="direct-heading">{nl ? "Direct contact" : "Contact me directly"}</h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a>
          <a className="text-action" href={`tel:${profile.phone}`}>{profile.phoneLabel}</a>
          <ProfileLinks locale={locale} />
        </section>
        <ContactForm locale={locale} />
      </div>
    </div>
  );
}

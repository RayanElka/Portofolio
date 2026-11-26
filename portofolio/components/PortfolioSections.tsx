import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { experience, profile, projects, skills, type Locale, type Project } from "../content/portfolio";
import { Arrow, ProfileLinks } from "./SiteLayout";

export function PageIntro({ title, children }: { title: string; children: ReactNode }) {
  return (
    <header className="page-intro">
      <h1>{title}</h1>
      <p className="lede">{children}</p>
    </header>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const nl = locale === "nl";

  return (
    <section className="hero shell" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow availability"><span aria-hidden="true" />{nl ? "Open voor een developerrol" : "Open to developer roles"}</p>
        <h1 id="hero-heading">Rayan<br /> el Kaouid<span className="accent">.</span></h1>
        <p className="hero-role">{nl ? "Full-stack developer met focus op frontend" : "Full-stack developer focused on frontend"}</p>
        <p className="hero-description">{nl
          ? "Ik bouw webapplicaties van interface tot API. Afgestudeerd in Programmeren aan AP Hogeschool Antwerpen, met stage-ervaring in logistieke software bij Trans-IT."
          : "I build web applications from interface to API. I graduated in Programming at AP University College Antwerp and interned on logistics software at Trans-IT."}</p>
        <div className="actions">
          <Link className="button primary" href="#projecten">{nl ? "Bekijk mijn werk" : "Explore my work"} <Arrow /></Link>
          <a className="button secondary" href={profile.cv}>{nl ? "Cv bekijken" : "View CV"} <Arrow diagonal /></a>
          <Link prefetch={false} className="text-action" href="/contact">Contact <Arrow /></Link>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-grid" />
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-middle" />
        <div className="orbit orbit-inner" />
        <div className="orbit-axis" />
        <div className="orbit-core"><span>RE<span>.</span></span></div>
        <i className="orbit-node node-interface" />
        <i className="orbit-node node-api" />
        <i className="orbit-node node-data" />
        <span className="orbit-label label-interface">Interface</span>
        <span className="orbit-label label-api">API</span>
        <span className="orbit-label label-data">Data</span>
      </div>
    </section>
  );
}

export function ProjectImage({
  project, locale, detail = false, eager = detail,
}: { project: Project; locale: Locale; detail?: boolean; eager?: boolean }) {
  return (
    <div className={`project-image project-image--${project.slug}`}>
      <Image
        src={project.image.src}
        alt={project.image.alt[locale]}
        width={project.image.width}
        height={project.image.height}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        sizes={detail ? "(max-width: 1100px) 92vw, 1050px" : "(max-width: 680px) 92vw, (max-width: 1100px) 45vw, 550px"}
      />
    </div>
  );
}

export function ProjectGrid({
  locale, heading: Heading = "h2", eager = false,
}: { locale: Locale; heading?: "h2" | "h3"; eager?: boolean }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <article key={project.slug} className={`project-card${index === 0 ? " featured" : ""}`}>
          <ProjectImage project={project} locale={locale} eager={eager && index === 0} />
          <div className="project-copy">
            <p className="eyebrow">{project.kind[locale]}</p>
            <Heading>{project.title}</Heading>
            <p>{project.summary[locale]}</p>
            <Stack items={project.stack} locale={locale} />
            <Link prefetch={false} className="project-link" href={`/projects/${project.slug}`} aria-label={`Case study — ${project.title}`}>
              Case study <Arrow />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Stack({ items, locale }: { items: readonly string[]; locale: Locale }) {
  return (
    <ul className="stack" aria-label={locale === "nl" ? "Technologieën" : "Technologies"}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export function Timeline({ locale, heading: Heading = "h2" }: { locale: Locale; heading?: "h2" | "h3" }) {
  return (
    <ol className="timeline">
      {experience.map((item) => (
        <li key={item.company}>
          <p className="eyebrow period">{item.period[locale]}</p>
          <Heading>{item.company}</Heading>
          <p className="timeline-role">{item.role[locale]}</p>
          <p>{item.summary[locale]}</p>
        </li>
      ))}
    </ol>
  );
}

export function AboutContent({ locale, heading: Heading = "h2" }: { locale: Locale; heading?: "h2" | "h3" }) {
  const Subheading = Heading === "h2" ? "h3" : "h4";
  const nl = locale === "nl";

  return (
    <div className="about-grid">
      <section className="panel about-panel" aria-labelledby="approach">
        <Heading id="approach">{nl ? "Van scherm tot gegevens" : "From screen to data"}</Heading>
        <p>{nl
          ? "Ik werk het liefst aan de frontend, waar je meteen ziet of een workflow duidelijk is. Dankzij mijn opleiding en stage kan ik ook volgen hoe een scherm zijn data krijgt en wat er nodig is om een wijziging door de hele applicatie te voeren."
          : "I enjoy frontend work because it shows immediately whether a workflow makes sense. My education and internship also taught me how a screen gets its data and what it takes to carry a change through the application."}</p>
        <Subheading className="about-subheading">{nl ? "Waar ik nieuwsgierig naar ben" : "What I’m curious about"}</Subheading>
        <p>{nl
          ? "Ik volg de ontwikkelingen rond AI-agents, lokaal draaiende taalmodellen en automatisering. Mijn ervaring als AI Trainer maakt me nieuwsgierig naar hoe je de kwaliteit van zulke systemen beoordeelt en waar menselijke controle nodig is."
          : "I follow developments in AI agents, locally run language models and automation. My time as an AI Trainer made me curious about how to assess these systems and where human review matters."}</p>
      </section>
      <section className="panel skills-panel" aria-labelledby="skills">
        <Heading id="skills">{nl ? "Technische vaardigheden" : "Technical skills"}</Heading>
        <dl>
          {skills.map((group) => (
            <div key={group.title.en}>
              <dt>{group.title[locale]}</dt>
              <dd><Stack items={group.items} locale={locale} /></dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

export function ContactPanel({ locale }: { locale: Locale }) {
  const nl = locale === "nl";

  return (
    <section className="contact-panel" aria-labelledby="contact-heading">
      <div>
        <h2 id="contact-heading">{nl ? "Een passende developerrol?" : "Hiring a developer?"}</h2>
        <p>{nl ? "Ik maak graag kennis en vertel meer over mijn werk." : "I’d be glad to meet and talk through my work."}</p>
      </div>
      <div>
        <a className="button primary" href={`mailto:${profile.email}`}>{nl ? "Stuur me een e-mail" : "Send me an email"} <Arrow diagonal /></a>
        <ProfileLinks locale={locale} />
      </div>
    </section>
  );
}

import type { IconType } from "react-icons";
import {
  SiCss, SiDocker, SiEjs, SiExpress, SiGit, SiGithubactions, SiHtml5,
  SiJavascript, SiLinux, SiMongodb, SiNextdotjs, SiNodedotjs,
  SiPostgresql, SiReact, SiTypescript, SiVite,
} from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import type { Locale, Localized } from "../content/portfolio";
import styles from "./TechStack.module.css";

type Technology = { name: string; icon: IconType };
type Group = {
  title: Localized;
  description: Localized;
  technologies: readonly Technology[];
};

const groups: readonly Group[] = [
  {
    title: { nl: "Frontend & mobiel", en: "Frontend & mobile" },
    description: { nl: "Webinterfaces en mobiele apps", en: "Web interfaces and mobile apps" },
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "React Native", icon: SiReact },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: { nl: "Backend", en: "Backend" },
    description: { nl: "Serverlogica, API’s en templates", en: "Server logic, APIs and templates" },
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "C#", icon: TbBrandCSharp },
      { name: "EJS", icon: SiEjs },
    ],
  },
  {
    title: { nl: "Databases", en: "Databases" },
    description: { nl: "Gegevens opslaan en opvragen", en: "Storing and querying data" },
    technologies: [
      { name: "SQL", icon: TbSql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: { nl: "Cloud & ontwikkeltools", en: "Cloud & development tools" },
    description: { nl: "Versiebeheer, containers en automatisering", en: "Version control, containers and automation" },
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Azure", icon: VscAzure },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

export default function TechStack({ locale }: { locale: Locale }) {
  return (
    <section className="shell section" id="tech-stack" aria-labelledby="tech-stack-heading">
      <div className="section-heading">
        <h2 id="tech-stack-heading">Tech Stack &amp; Skills</h2>
        <p>{locale === "nl"
          ? "Technologieën uit mijn projecten, opleiding en eigen werk."
          : "Technologies from my projects, studies and independent work."}</p>
      </div>
      <div className={styles.grid}>
        {groups.map(({ title, description, technologies }) => (
          <div className={`panel ${styles.group}`} key={title.en}>
            <h3>{title[locale]}</h3>
            <p>{description[locale]}</p>
            <ul className={styles.technologies}>
              {technologies.map(({ name, icon: Icon }) => (
                <li key={name}>
                  <Icon aria-hidden="true" focusable="false" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

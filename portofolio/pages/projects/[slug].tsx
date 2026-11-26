import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Seo from "../../components/Seo";
import { PageIntro, ProjectImage, Stack } from "../../components/PortfolioSections";
import { Arrow, useLocale } from "../../components/SiteLayout";
import { projects, type Project } from "../../content/portfolio";

export const getStaticPaths: GetStaticPaths = ({ locales = ["nl"] }) => ({
  paths: projects.flatMap(({ slug }) => locales.map((locale) => ({ params: { slug }, locale }))),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ project: Project }> = ({ params }) => {
  const project = projects.find(({ slug }) => slug === params?.slug);
  return project ? { props: { project } } : { notFound: true };
};

export default function CaseStudy({ project }: { project: Project }) {
  const locale = useLocale();
  const nl = locale === "nl";

  return (
    <article className="shell page case-study">
      <Seo title={project.title} description={project.summary[locale]} path={`/projects/${project.slug}`} locale={locale} />
      <Link className="text-action back-link" href="/projects"><span aria-hidden="true">←</span> {nl ? "Alle projecten" : "All projects"}</Link>
      <p className="eyebrow case-kind">{project.kind[locale]}</p>
      <PageIntro title={project.title}>{project.summary[locale]}</PageIntro>
      <Stack items={project.stack} locale={locale} />
      <figure className="case-figure">
        <ProjectImage project={project} locale={locale} detail />
        <figcaption>{project.image.alt[locale]}</figcaption>
      </figure>
      <div className="case-sections">
        {project.sections.map((section) => (
          <section key={section.title.en}>
            <h2>{section.title[locale]}</h2>
            <p>{section.text[locale]}</p>
          </section>
        ))}
      </div>
      <div className="actions section-actions">
        <a className="button primary" href={project.source.href}>{project.source.label[locale]} <Arrow diagonal /></a>
        {project.demo && <a className="button secondary" href={project.demo.href}>{project.demo.label[locale]} <Arrow diagonal /></a>}
      </div>
    </article>
  );
}

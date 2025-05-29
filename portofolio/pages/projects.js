import Head from "next/head";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <div className="page-container">
      <Head>
        <title>Projecten | Rayan el Kaouid</title>
        <meta name="description" content="Bekijk mijn projecten" />
      </Head>
      <Projects />
    </div>
  );
}

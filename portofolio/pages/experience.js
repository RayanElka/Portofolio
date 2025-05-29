import Head from "next/head";
import Experience from "../components/Experience";

export default function ExperiencePage() {
  return (
    <div className="page-container">
      <Head>
        <title>Ervaring | Rayan el Kaouid</title>
        <meta name="description" content="Mijn werkervaring en projecten" />
      </Head>
      <Experience />
    </div>
  );
}

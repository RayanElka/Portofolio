import Head from "next/head";
import About from "../components/About";

export default function AboutPage() {
  return (
    <div className="page-container">
      <Head>
        <title>Over Mij | Rayan el Kaouid</title>
        <meta name="description" content="Leer meer over Rayan el Kaouid" />
      </Head>
      <About />
    </div>
  );
}

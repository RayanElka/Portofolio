import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rayan el Kaouid | Junior Software Developer</title>
        <meta
          name="description"
          content="Portfolio van Rayan el Kaouid - Junior Software Developer met stage-ervaring als full-stack developer en focus op JavaScript, TypeScript, Node.js, C#, SQL en Linux."
        />
        <meta property="og:title" content="Rayan el Kaouid | Portfolio" />
        <meta
          property="og:description"
          content="Junior Software Developer met een passie voor full-stack ontwikkeling"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}

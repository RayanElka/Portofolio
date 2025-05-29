import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rayan el Kaouid | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio van Rayan el Kaouid - Full Stack Developer met expertise in React, .NET en meer."
        />
        <meta property="og:title" content="Rayan el Kaouid | Portfolio" />
        <meta
          property="og:description"
          content="Full Stack Developer met passie voor innovatieve oplossingen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}

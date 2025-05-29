import Head from "next/head";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Rayan el Kaouid</title>
        <meta
          name="description"
          content="Neem contact op met Rayan el Kaouid"
        />
      </Head>
      <div className="page-container">
        <Contact />
      </div>
    </>
  );
}

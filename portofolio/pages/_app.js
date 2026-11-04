import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import { LanguageProvider } from "../context/LanguageContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;

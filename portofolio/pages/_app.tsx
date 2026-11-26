import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import SiteLayout from "../components/SiteLayout";
import "../styles/globals.css";

const manrope = localFont({
  src: "../styles/fonts/manrope.woff2",
  variable: "--font-body",
  weight: "200 800",
  display: "swap",
});

const space = localFont({
  src: "../styles/fonts/space-grotesk.woff2",
  variable: "--font-heading",
  weight: "300 700",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <div className={`${manrope.variable} ${space.variable} application`}>
        <SiteLayout><Component {...pageProps} /></SiteLayout>
      </div>
    </ThemeProvider>
  );
}

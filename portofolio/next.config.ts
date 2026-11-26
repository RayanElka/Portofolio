import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  agentRules: false,
  i18n: {
    locales: ["nl", "en"],
    defaultLocale: "nl",
    localeDetection: false,
  },
};

export default nextConfig;

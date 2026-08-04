// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import { loadEnvFile } from "process";

loadEnvFile();

// https://astro.build/config
export default defineConfig({
  // output: "server",
  redirects: {
    "/admin": "http://localhost:1337/admin",
  },

  site:
    process.env.NODE_ENV === "production"
      ? "https://firenzo.github.io"
      : undefined,
  base:
    process.env.NODE_ENV === "production" ? process.env.BASE_PATH : undefined,

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [900],
    },
    {
      provider: fontProviders.adobe({ id: "xnt8pgt" }),
      name: "Proxima Nova",
      cssVariable: "--font-proxima-nova",
      weights: [300, 400, 700],
    },
  ],

  integrations: [react()],
});

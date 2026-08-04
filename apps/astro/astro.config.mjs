// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import { loadEnvFile } from "process";

// Wrap in try catch block, because in CI env vars are set in the script
// loadEnvFile will throw an error if it cant find a .env file
// Therefore wrap loadEnvFile in a try catch block so it doesn't throw an error in CI
try {
  loadEnvFile();
} catch {
  console.warn("no env file found");
}

// https://astro.build/config
export default defineConfig({
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

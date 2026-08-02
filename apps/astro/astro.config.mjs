// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  redirects: {
    "/admin": "http://localhost:1337/admin",
  },

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

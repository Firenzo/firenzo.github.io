// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/admin": "http://localhost:1337/admin",
  },

  integrations: [react()],
});

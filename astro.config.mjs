import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://togethernotes.com",
  output: "static",
  build: { format: "directory" },
  integrations: [react(), sitemap()],
});

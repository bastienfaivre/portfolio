import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://bastienfaivre.com/",
  integrations: [
    sitemap(),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  output: "static",
  redirects: {
    "/guide": "/guides",
    "/guides/[slug]": "/guide/[slug]",
  },
});

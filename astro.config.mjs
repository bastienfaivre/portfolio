import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://bastienfaivre.com/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://bastienfaivre.com/sitemap-index.xml",
        "https://bastienfaivre.com/sitemap-0.xml",
      ],
    }),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  output: "static",
});

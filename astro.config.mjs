import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity()],
  output: "server",
  adapter: vercel()
});
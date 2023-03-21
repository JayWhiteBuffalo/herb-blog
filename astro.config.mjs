import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'e0uwxbx9',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-02-08',
})],
  output: 'server',
  adapter: vercel()
});
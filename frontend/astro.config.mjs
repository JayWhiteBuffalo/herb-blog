import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'e0uwxbx9',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: false
  }), tailwind(), react()]
});
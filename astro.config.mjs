// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Dominio público: SITE_URL si lo defines, si no el dominio de producción que Vercel expone al compilar
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

export default defineConfig({
  site,
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});

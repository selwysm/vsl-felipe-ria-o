import type { Product } from './types';

/**
 * PRODUCTO: Fundamentos
 * Cada video de la lista es una página: tudominio.com/fundamentos, tudominio.com/fundamentos-15m
 * El botón aparece solo en los últimos segundos del video (ver ctaSecondsBeforeEnd en src/config.ts).
 * Para fijar un segundo exacto en un video, agrega por ejemplo:  ctaAtSecond: 300,
 */
export const product: Product = {
  id: 'fundamentos',
  name: 'Fundamentos',

  // ---- Botón (el mismo para todos los videos de este producto) ----
  ctaUrl: 'https://wa.link/l32uw3',
  ctaLabel: 'QUIERO MI CUPO',

  // ---- Videos: el primero es la versión principal (la que ve Google) ----
  videos: [
    {
      slug: 'fundamentos',
      label: 'VSL largo',
      vturb: { verticalId: '6b01f319e98413e66d658ef1', horizontalId: '' },
    },
    {
      slug: 'fundamentos-15m',
      label: 'VSL 15M',
      vturb: { verticalId: '6b01f286f3f97f756ae30c47', horizontalId: '' },
    },
  ],

  seo: {
    title: 'Fundamentos | Felipe Riaño',
    description: 'Mira el video completo antes de que salga del aire.',
    ogImage: '/img/fundamentos/og.jpg',
  },
};

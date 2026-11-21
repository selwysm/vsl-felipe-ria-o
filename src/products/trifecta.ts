import type { Product } from './types';

/**
 * PRODUCTO: Trifecta
 * Cada video de la lista es una página: tudominio.com/trifecta-6m, tudominio.com/trifecta-15m
 * El botón aparece solo en los últimos segundos del video (ver ctaSecondsBeforeEnd en src/config.ts).
 * Para fijar un segundo exacto en un video, agrega por ejemplo:  ctaAtSecond: 300,
 */
export const product: Product = {
  id: 'trifecta',
  name: 'Trifecta',

  // ---- Botón (el mismo para todos los videos de este producto) ----
  ctaUrl: 'https://wa.link/l32uw3',
  ctaLabel: 'QUIERO MI CUPO',

  // ---- Videos: el primero es la versión principal (la que ve Google) ----
  videos: [
    {
      slug: 'trifecta-6m',
      label: 'VSL 6M',
      vturb: { verticalId: '6b01f41b0558bd738efbdc9a', horizontalId: '' },
    },
    {
      slug: 'trifecta-15m',
      label: 'VSL 15M',
      vturb: { verticalId: '6b01f3d8660472484622275a', horizontalId: '' },
    },
  ],

  seo: {
    title: 'Trifecta',
    description: '[Descripción corta para cuando compartan el link]',
    ogImage: '/img/trifecta/og.jpg',
  },
};

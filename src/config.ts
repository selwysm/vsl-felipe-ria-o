/** Configuración COMPARTIDA por todos los productos. Los datos de cada producto están en src/products/. */
const env = import.meta.env;

export const config = {
  /** Un solo Meta Pixel para todos los productos */
  metaPixelId: env.PUBLIC_META_PIXEL_ID || '',
  /** Cuenta de Vturb (la misma para todos los players) */
  vturbAccountId: env.PUBLIC_VTURB_ACCOUNT_ID || '',
  /** Ancho (px) a partir del cual se usa el video horizontal */
  desktopBreakpoint: 1024,
  /** El botón aparece cuando le quedan estos segundos al video */
  ctaSecondsBeforeEnd: 40,
};

export const site = {
  brand: 'Felipe Riaño',
  /** Título y descripción de la página raíz (tudominio.com/) */
  title: 'Felipe Riaño',
  description: '[Descripción de tu marca]',
};

export const footer = {
  copyright: `©${new Date().getFullYear()} ${site.brand} | Todos los derechos reservados`,
};

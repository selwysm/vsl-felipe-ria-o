import type { Product, Video } from './types';
import { product as trifecta } from './trifecta';
import { product as fundamentos } from './fundamentos';

/** Para agregar un producto: copia uno de los archivos, cambia id/slugs y agrégalo aquí. */
export const products: Product[] = [trifecta, fundamentos];

/** Una página por cada video de cada producto */
export const pages: { product: Product; video: Video }[] = products.flatMap((product) =>
  product.videos.map((video) => ({ product, video })),
);

const slugs = pages.map((p) => p.video.slug);
const dup = slugs.find((s, i) => slugs.indexOf(s) !== i);
if (dup) throw new Error(`[products] El slug "${dup}" está repetido. Cada video necesita una URL distinta.`);

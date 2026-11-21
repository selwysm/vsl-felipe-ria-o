# Páginas VSL – Vturb + botón a WhatsApp (Astro + Vercel)

Cada página es sencilla: **solo el video** y, **en los últimos 40 segundos**, el botón a WhatsApp.

| URL | Producto (archivo) | Video |
|---|---|---|
| `tudominio.com/trifecta-6m` | `src/products/trifecta.ts` | VSL 6M (principal) |
| `tudominio.com/trifecta-15m` | `src/products/trifecta.ts` | VSL 15M |
| `tudominio.com/fundamentos` | `src/products/fundamentos.ts` | VSL largo (principal) |
| `tudominio.com/fundamentos-15m` | `src/products/fundamentos.ts` | VSL 15M |
| `tudominio.com/` | — | Lista de productos (no se indexa en Google) |

La versión "principal" (la primera de `videos`) es la que Google indexa; las demás apuntan a ella con `canonical`.

## Desarrollo local
```bash
npm install
cp .env.example .env   # y completa los valores
npm run dev            # http://localhost:4321/trifecta-6m
```
Agrega `?show=1` a la URL para ver el botón sin esperar al final del video, y `?reset=1` para olvidar que ya lo viste (vuelve a ocultarse hasta los últimos 40 s).

## Qué se configura en cada lugar
**Variables de entorno (Vercel):**
- `PUBLIC_META_PIXEL_ID`: el pixel (uno para todo).
- `PUBLIC_VTURB_ACCOUNT_ID`: tu cuenta de Vturb.
- `SITE_URL` (opcional): `https://tudominio.com`. Si no está, se usa el dominio de producción de Vercel.

**En cada producto (`src/products/<producto>.ts`):**
- `ctaUrl` y `ctaLabel`: link y texto del botón (hoy `https://wa.link/l32uw3`, "QUIERO MI CUPO").
- `videos`: una entrada por versión del VSL, con su `slug` (URL) y su ID de Vturb.
- `ctaAtSecond` (opcional, por video): fija un segundo exacto para el botón en vez de "40 s antes del final".

**Compartido (`src/config.ts`):**
- `ctaSecondsBeforeEnd: 40`: cuántos segundos antes del final aparece el botón.
- `site.brand`: el nombre del footer.

Colores y fuentes: `src/styles/global.css` (bloque `@theme`).

## Cómo funciona el botón
- Al cargar el video, la página lee su duración desde Vturb y muestra el botón en `duración − 40 s`. Si cambias un video por otro de distinta duración, no hay que tocar nada.
- Quien ya vio el botón, lo ve directo la próxima vez que entre (se guarda por video).
- El espacio del botón está reservado, así que el video no salta cuando aparece.

## Vturb
- Móvil (< 1024px) carga el player vertical; desktop carga el horizontal si existe (`horizontalId`), si no el vertical centrado.
- El aviso de "toca para escuchar", la barra de progreso, sus colores e idioma se configuran **en el panel de Vturb**.

## Tracking (Meta Pixel)
- `PageView` y `VSLView` (producto + video) al entrar.
- `CTAShown` cuando aparece el botón.
- **`Contact` al hacer clic en el botón de WhatsApp** (la conversión), con el producto y el video.

## Agregar videos o productos
- Otra versión de un producto: agrega una entrada a su lista `videos`.
- Otro producto: copia `src/products/trifecta.ts`, cambia `id`, `name` y los `slug`, y agrégalo en `src/products/index.ts`.
- Si dos slugs se repiten, la compilación falla con un aviso.

## Despliegue en Vercel
1. Sube el repositorio a GitHub e impórtalo en Vercel (detecta Astro solo).
2. En **Settings → Environment Variables** crea `PUBLIC_META_PIXEL_ID` y `PUBLIC_VTURB_ACCOUNT_ID`.
3. Conecta tu dominio en **Settings → Domains**.
4. Los cambios se publican con cada push. Si cambias una variable de entorno: **Deployments → Redeploy**.

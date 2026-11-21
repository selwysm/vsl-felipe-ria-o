/** Una versión del VSL. Cada video genera su propia página: tudominio.com/<slug> */
export interface Video {
  slug: string;
  /** Nombre interno (se envía al pixel para comparar versiones) */
  label: string;
  vturb: {
    /** ID del player vertical 9:16 (móvil) */
    verticalId: string;
    /** ID del player horizontal 16:9 (desktop). Vacío = desktop usa el vertical centrado */
    horizontalId: string;
  };
  /**
   * Opcional. Segundo exacto en que aparece el botón (12:30 → 750).
   * Si no lo pones, aparece automáticamente en los últimos `ctaSecondsBeforeEnd` segundos del video (src/config.ts).
   */
  ctaAtSecond?: number;
}

export interface Product {
  /** Identificador interno del producto (se envía al pixel) */
  id: string;
  /** Nombre visible (se usa en la página raíz) */
  name: string;
  /** A dónde lleva el botón: WhatsApp (wa.link / wa.me) o un checkout */
  ctaUrl: string;
  /** Texto del botón */
  ctaLabel: string;
  /** Versiones del VSL. La primera es la principal (canonical para Google) */
  videos: Video[];
  seo: { title: string; description: string; ogImage: string };
}

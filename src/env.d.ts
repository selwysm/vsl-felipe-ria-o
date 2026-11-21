interface ImportMetaEnv {
  readonly PUBLIC_HOTMART_CHECKOUT_URL?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PUBLIC_VTURB_ACCOUNT_ID?: string;
  readonly PUBLIC_VTURB_PLAYER_VERTICAL?: string;
  readonly PUBLIC_VTURB_PLAYER_HORIZONTAL?: string;
  readonly PUBLIC_PITCH_SECONDS?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface Window {
  fbq?: (...args: unknown[]) => void;
  smartplayer?: { instances?: Array<{ on?: (ev: string, cb: () => void) => void; video?: HTMLVideoElement }> };
}

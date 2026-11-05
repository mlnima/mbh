/**
 * Deploy base derived from Vite's BASE_URL at build time.
 * GitHub Pages project site is built with GITHUB_PAGES=true (base "/mbh/");
 * custom-domain builds set VITE_BASE or keep the default "/".
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-absolute path ("/images/x.jpg") with the deploy base. */
export function withBase(path: string): string {
  if (!BASE || !path.startsWith('/')) return path;
  return BASE + path;
}

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin, PreviewServer, ViteDevServer } from 'vite';

/**
 * Serve /index.html for the original PHP route names (*.php) so the
 * rebuilt site answers the same URLs as the original website,
 * in both dev and preview.
 */
function phpRoutes(): Plugin {
  const rewrite = (req: { url?: string }) => {
    const url = req.url ?? '';
    // Match *.php at the route root, with or without the deploy base
    // prefix ("/mbh/partnership.php"), and ignore query strings.
    if (/^(\/[^?#]*)?\/[^/?#]*\.php(\?|$)/.test(url)) req.url = '/index.html';
  };
  return {
    name: 'php-routes',
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req as { url?: string });
        next();
      });
    },
    configurePreviewServer(server: PreviewServer) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req as { url?: string });
        next();
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Where the site is served from (see .github/workflows/deploy.yml):
  //   GITHUB_PAGES=true          -> /mbh/   (repository project site)
  //   VITE_BASE=<name>           -> /name/  (project site under a path)
  //   VITE_BASE=. or unset       -> /       (local dev/preview, custom domain root)
  const proc = (globalThis as {
    process?: { env?: Record<string, string | undefined>; cwd?: () => string };
  }).process;
  const env = { ...proc?.env, ...loadEnv(mode, proc?.cwd?.() ?? '.', '') };
  const raw = env.VITE_BASE || (env.GITHUB_PAGES ? 'mbh' : '/');
  // VITE_BASE="." (or "/") means the site is served from the domain root,
  // e.g. a custom domain on GitHub Pages.
  const base = raw === '.' || raw === '/' ? '/' : `/${raw.replace(/^\/+|\/+$/g, '')}/`;

  return {
    base,
    plugins: [react(), phpRoutes()],
    server: {
      // Windows: the native fs watcher intermittently crashes with
      // EBUSY on the editor's atomic-save temp files; use polling instead.
      watch: { usePolling: true, interval: 300 },
    },
  };
});

import { defineConfig } from 'vite';
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
    if (/^\/[^?#]*\.php(\?|$)/.test(url)) req.url = '/index.html';
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

export default defineConfig({
  plugins: [react(), phpRoutes()],
  server: {
    // Windows: the native fs watcher intermittently crashes with
    // EBUSY on the editor's atomic-save temp files; use polling instead.
    watch: { usePolling: true, interval: 300 },
  },
});

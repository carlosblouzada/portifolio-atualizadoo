import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portifolio-carlos-louzada.netlify.app',
  compressHTML: true,
  build: {
    format: 'file',
  },
  vite: {
    plugins: [
      {
        name: 'legacy-html-redirects',
        configureServer(server) {
          const legacyRoutes = {
            '/index.html': '/',
            '/stack.html': '/experience',
            '/stack': '/experience',
            '/projects.html': '/projects',
            '/about.html': '/about',
            '/contact.html': '/about',
            '/contact': '/about',
            '/experience.html': '/experience',
            '/education.html': '/education',
            '/certificates.html': '/certificates',
          };

          server.middlewares.use((req, res, next) => {
            const target = legacyRoutes[req.url ?? ''];
            if (target) {
              res.writeHead(302, { Location: target });
              res.end();
              return;
            }
            next();
          });
        },
      },
    ],
  },
});

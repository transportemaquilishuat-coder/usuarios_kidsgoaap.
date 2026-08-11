const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const normalizeBackendUrl = (value) => {
    if (!value) {
        return 'http://127.0.0.1:8080';
    }

    try {
        const parsed = new URL(value);
        if (parsed.hostname === 'localhost') {
            parsed.hostname = '127.0.0.1';
        }
        return parsed.toString().replace(/\/$/, '');
    } catch (error) {
        return value;
    }
};
const backendUrl = normalizeBackendUrl(process.env.BACKEND_URL || process.env.API_BASE_URL || 'http://127.0.0.1:8080');
const authEndpointPath = process.env.AUTH_ENDPOINT_PATH || process.env.BACKEND_AUTH_PATH || '/api/auth/login';
const publicDir = path.join(__dirname, 'public');

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.webmanifest': 'application/manifest+json'
};

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = url.pathname;

    if (pathname === '/api/health') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ ok: true, service: 'transporte-escolar-web', backendUrl }));
        return;
    }

    if (pathname === '/api-config.js') {
        const configContent = `window.transporteEscolarConfig = { apiBaseUrl: '', authEndpoint: '${authEndpointPath}' };`;
        res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
        res.end(configContent);
        return;
    }

    if (pathname === '/manifest.json') {
        const manifest = {
            name: 'KidsGo App',
            short_name: 'KidsGo',
            description: 'Aplicación web progresiva para transporte escolar',
            start_url: '/',
            display: 'standalone',
            background_color: '#f4f7fb',
            theme_color: '#2563eb',
            icons: [
                { src: '/img/icon-192.png', sizes: '192x192', type: 'image/png' },
                { src: '/img/icon-512.png', sizes: '512x512', type: 'image/png' }
            ]
        };
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(manifest));
        return;
    }

    if (pathname === '/sw.js') {
        const swContent = `const CACHE_NAME = 'kidsgo-cache-v1';
const ASSETS = ['/', '/index.html', '/login.html', '/admin.html', '/superadmin.html', '/parent.html', '/driver.html', '/css/styles.css', '/js/app.js', '/api-config.js'];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request).then((cached) => cached || caches.match('/'))));
});`;
        res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
        res.end(swContent);
        return;
    }

    if (pathname.startsWith('/api/')) {
        const targetPath = pathname === '/api/auth/login' && authEndpointPath && authEndpointPath !== '/api/auth/login'
            ? authEndpointPath
            : pathname;
        const targetUrl = new URL(`${targetPath}${url.search}`, backendUrl);
        const transport = targetUrl.protocol === 'https:' ? https : http;
        const proxyBody = [];

        req.on('data', (chunk) => proxyBody.push(chunk));
        req.on('end', () => {
            const bodyBuffer = Buffer.concat(proxyBody);
            const proxyReq = transport.request({
                protocol: targetUrl.protocol,
                hostname: targetUrl.hostname,
                port: targetUrl.port || (targetUrl.protocol === 'https:' ? 443 : 80),
                path: `${targetUrl.pathname}${targetUrl.search}`,
                method: req.method,
                headers: {
                    ...req.headers,
                    host: targetUrl.host,
                    ...(bodyBuffer.length ? { 'content-length': Buffer.byteLength(bodyBuffer) } : {})
                }
            }, (proxyRes) => {
                res.writeHead(proxyRes.statusCode || 502, proxyRes.headers);
                proxyRes.pipe(res);
            });

            proxyReq.on('error', () => {
                res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: 'No se pudo conectar con el backend.' }));
            });

            if (bodyBuffer.length) {
                proxyReq.write(bodyBuffer);
            }
            proxyReq.end();
        });
        return;
    }

    let filePath = path.join(publicDir, pathname === '/' ? 'index.html' : pathname);

    if (!filePath.startsWith(publicDir)) {
        res.writeHead(403);
        res.end('Acceso denegado');
        return;
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'text/plain; charset=utf-8';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Página no encontrada');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Error del servidor');
            }
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    });
});

server.listen(port, () => {
    console.log(`Servidor de la web listo en http://localhost:${port}`);
});

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const ROOT = __dirname;
const PORT = process.env.PORT || 8000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.wasm': 'application/wasm',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json'
};

function resolvePath(reqPath) {
  let decodedPath = decodeURIComponent(reqPath.split('?')[0]);
  let safePath = path.normalize(decodedPath).replace(/^(\.\.[\/\\])+/, '');
  let fullPath = path.join(ROOT, safePath);

  // If path is a directory, look for index.html
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
    let indexHtml = path.join(fullPath, 'index.html');
    if (fs.existsSync(indexHtml)) {
      return indexHtml;
    }
  }

  // If exact file exists
  if (fs.existsSync(fullPath) && !fs.statSync(fullPath).isDirectory()) {
    return fullPath;
  }

  // Fallbacks for Configurator assets requested from root:
  // e.g. /draco/draco_decoder.wasm -> portal/configurator/draco/draco_decoder.wasm
  if (safePath.startsWith('draco' + path.sep) || safePath.startsWith('/draco/') || safePath === 'draco') {
    let cfgDraco = path.join(ROOT, 'portal', 'configurator', safePath);
    if (fs.existsSync(cfgDraco) && !fs.statSync(cfgDraco).isDirectory()) {
      return cfgDraco;
    }
  }

  // e.g. /assets/draco_* -> portal/configurator/assets/draco_*
  if (safePath.startsWith('assets' + path.sep) && safePath.includes('draco')) {
    let baseFileName = path.basename(safePath);
    let cfgAsset = path.join(ROOT, 'portal', 'configurator', 'assets', baseFileName);
    if (fs.existsSync(cfgAsset)) {
      return cfgAsset;
    }
  }

  // e.g. /assets/models/... -> portal/configurator/assets/models/...
  if (safePath.includes('models' + path.sep)) {
    let modelName = path.basename(safePath);
    let cfgModel = path.join(ROOT, 'portal', 'configurator', 'assets', 'models', modelName);
    if (fs.existsSync(cfgModel)) {
      return cfgModel;
    }
  }

  // If clean url (e.g. /jobs -> /jobs.html)
  let htmlPath = fullPath + '.html';
  if (fs.existsSync(htmlPath)) {
    return htmlPath;
  }

  // If clean directory url (e.g. /news/ -> news.html)
  let trimmedHtml = fullPath.replace(/[/\\]+$/, '') + '.html';
  if (fs.existsSync(trimmedHtml)) {
    return trimmedHtml;
  }

  return null;
}

const server = http.createServer((req, res) => {
  const reqUrl = req.url.split('?')[0];

  // Directory trailing slash redirect
  let decodedPath = decodeURIComponent(reqUrl);
  let safePath = path.normalize(decodedPath).replace(/^(\.\.[\/\\])+/, '');
  let fullPath = path.join(ROOT, safePath);
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory() && !reqUrl.endsWith('/')) {
    res.writeHead(301, { 'Location': reqUrl + '/' });
    res.end();
    return;
  }

  let target = resolvePath(req.url);

  if (!target) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(target).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const stat = fs.statSync(target);

  // Range requests support for video streaming (.mp4)
  const range = req.headers.range;
  if (range && ext === '.mp4') {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(target, { start, end });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${stat.size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    file.pipe(res);
    return;
  }

  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Access-Control-Allow-Origin': '*'
  });

  const stream = fs.createReadStream(target);
  stream.on('error', (err) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
  stream.pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`TRIKNO server running at http://localhost:${PORT}/`);
});

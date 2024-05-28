const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const hostname = 'localhost';
const port = 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      switch (pathname) {
        case '/':
          await app.render(req, res, '/', query);
          break;
        case '/about':
          await app.render(req, res, '/about', query);
          break;
        case '/contact':
          await app.render(req, res, '/contact', query);
          break;
        default:
          await handle(req, res, parsedUrl);
          break;
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, hostname, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});

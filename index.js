const protect = require('static-auth');
const safeCompare = require('safe-compare');

/*
 *
 */

const serveHandler = protect(
  '/admin',
  (username, password) => safeCompare(username, 'admin') && safeCompare(password, 'admin'),
  {
    directory: __dirname + '/_static',
    realm: 'vercel-basic-auth.node-static-auth',
    onAuthFailed: res => {
      res.end('Restricted area, please login (admin:admin).');
    }
  }
);

// start the server
const http = require('http');
const app = http.createServer(serveHandler);
app.listen(4444, () => console.log('Listening on port 4444...'));

module.exports = app;



const protect = require('static-auth');
const safeCompare = require('safe-compare');

/*
 *
 */
const app = protect(
  '/citoyens',
  (username, password) => safeCompare(username, 'citoyens') && safeCompare(password, 'bourg'),
  {
    directory: __dirname + '/_static',
    realm: 'vercel-basic-auth.node-static-auth',
    onAuthFailed: res => {
      res.end('Restricted area');
    }
  }
);

module.exports = app;



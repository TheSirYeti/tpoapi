const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/ar',
    proxy({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
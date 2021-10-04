const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './dist'
});
const PORT = process.env.PORT || 5000;
server.use(middlewares);

server.use('/api',router);
server.get('*', (req, res) => {
  res.redirect('/');
});

server.listen(PORT, () => {
  console.log('Server is running');
});
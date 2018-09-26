
var books = require('./store')
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');

  var urlParse = url.parse(req.url, true);

  if(urlParse.pathname === '/') {
    res.setHeader('Content-Type', 'application/json');
    res.end('No data found');
  }
  else if(urlParse.pathname === '/api/favoritebook') {
    res.setHeader('Content-Type', 'application/json');
    res.end(books.favoriteBook());
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
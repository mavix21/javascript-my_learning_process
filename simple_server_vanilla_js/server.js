const http = require('http');
const { getProducts } = require('./controllers/productController.js');

const server = http.createServer((request, response) => {
  if (request.url === '/api/products' && request.method === 'GET') {
    getProducts(request, response);
  } else if (request.url.match(/\/api\/products\/([0-9]+)/) &&
             request.method === 'GET') {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'Route Not Found' }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

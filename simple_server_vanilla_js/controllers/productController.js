const Product = require('../models/productModel');

async function getProducts (request, response) {
  try {
    const products = await Product.findAll();

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(products));
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getProducts
};

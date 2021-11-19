const express = require('express');
const { products } = require('./data'); // don't put .js even tho file name is data.js

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href = "/api/products">Products</a>');
});
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  console.log(req.params);
  // even tho value is an int/number, req.params.values are strings
  // const n = parseInt(req.params.productID, 10);
  const { productID } = req.params;
  // parseInt converts '2.......' to 2 but Number doesn't
  const productNumber = Number(productID);
  if (Number.isNaN(productNumber)) {
    return res.status(404).send('Not a Number');
  }
  const singleProduct = products.find((product) => (product.id === productNumber));
  // if it doesn't find anything, singleProduct === undefined bc array.prototype.find() returns that
  if (singleProduct === undefined) {
    return res.status(404).send('Product Does Not Exist');
  }
  return res.json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
  console.log(req.query); // if key is present > 1. value is an array instead of string
  const { search, limit } = req.query;

  let sortedProducts = [...products];
  if (search !== undefined) {
    // if (search){ // if not found === undefined
    sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search));
  }
  if (limit !== undefined) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  } // if limit isNaN, returns nothing
  if (sortedProducts.length < 1) {
    // res.status(200).send('No Products Matched Your Search');
    return res.status(200).json({ success: true, data: [] });
    // need to return here to not try to send two responses for one request
  }
  return res.status(200).json(sortedProducts);
  // res.send('Hello World');
});

// app.get('/api/products/:productID/reviews/:reviewID', (req, res) => { console.log(req.params);});

/* app.get('/api/products/1', (req, res) => {
  const singleProduct = products.find((product) => (product.id === 1));
  res.json(singleProduct);
}); */

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});

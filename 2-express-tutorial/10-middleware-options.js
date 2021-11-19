const express = require('express');

const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');

// $ npm i morgan

// request => middleware => res

// 1. use vs route
// 2. options - our own / express / 3rd party
// app.use([logger, authorize]); // executed from left to right

// app.use(express.static('./public')); // static is middleware

app.use(morgan('tiny'));
// GET /api/items?user=john 304 - - 3.258 ms

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', /* [logger, authorize], */(req, res) => {
  res.send('Items');
  console.log(req.user);
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});

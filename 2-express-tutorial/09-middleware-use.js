const express = require('express');

const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

// request => middleware => res

// app.use(logger); // invoked for any route after this
// app.use('/api', logger); // invoked for any /api route after this.
// also logs / for /api and /products for /api/products
app.use([logger, authorize]); // executed from left to right

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  res.send('Items');
  console.log(req.user);
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});

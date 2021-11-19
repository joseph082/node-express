/**
 * API vs SSR
 * API Application Programming Interface
 * For Express, it'd be an HTTP Interface to interact with data
 * data is sent with json
 * res.json()
 *
 * SSR Server Side Rendering
 * use templates and send back entire html, css, js
 * res.render()
 */

const express = require('express');
const { products } = require('./data'); // don't put .js even tho file name is data.js

const app = express();

app.get('/', (req, res) => {
  // res.status(200).json([{ name: 'john' }, { name: 'Susan' }]); // uses JSON.stringify()
  res.status(200).json(products);
});
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});

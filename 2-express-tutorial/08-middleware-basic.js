/**
 * Middleware in ExpressJS
 * are functions that execute during the request to server.
 * They have access to request/response objects.
 * Functionality = Sky's the Limit
 * Docu: "Middleware functions are functions that have access to the request object (req),
 * the response object (res),
 * and the next middleware function in the application’s request-response cycle.
 * The next middleware function is commonly denoted by a variable named next.
 * Middleware functions can perform the following tasks:
 * Execute any code.
 * Make changes to the request and the response objects.
 * End the request-response cycle.
 * Call the next middleware function in the stack.
 */

const express = require('express');

const app = express();

// request => middleware => res

const logger = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // response is 'Home'
  // res.send('Testing');
};

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', logger, (req, res) => {
  res.send('About');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});

/**
 * Express = framework for Node.js designed to make Webapps easier
 * $ npm install express --save
 * $ npm install express@4.17.1 --save to install version
 */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('User hit the resource');
  res.status(200).send('Home Page');
});
app.get('/about', (req, res) => {
  console.log('User hit the resource');
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  console.log('User hit unknown');
  res.status(404).send('<h1>Resource Not Found</h1>');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
}); // port

// app.get()
// app.post()
// app.put()
// app.delete()
// app.all() // works for all methods
// app.use() // for middleware
// app.listen()

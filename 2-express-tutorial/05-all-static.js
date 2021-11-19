const express = require('express');
// const path = require('path');

const app = express();

// set up static and middleware
// static asset = file that server doesn't have to change
// eg image file, style file, js file
app.use(express.static('./public'));

// index.html is a static asset but for sendFile using index.html, u should use something else

/* app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
}); */

app.all('*', (req, res) => {
  res.status(404).send('Resource not found.');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});

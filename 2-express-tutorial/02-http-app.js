const { readFileSync } = require('fs');
const http = require('http'); // this is built in Node

const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

// callback is invoked every time user makes req
const server = http.createServer((req, res) => {
  // console.log(req.method); // eg GET
  // console.log(req.url);
  console.log('User hit the server');
  const { url } = req;
  console.log(url);
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }); // text/plain are MIME types
    // browser shows status text corresponding to status code
    res.write(homePage);
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' }); // text/plain are MIME types
    res.write(homeStyles);
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' }); // text/plain are MIME types
    res.write(homeImage);
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' }); // text/plain are MIME types
    res.write(homeLogic);
  } else {
    res.writeHead(404, { 'content-type': 'text/html' }); // text/plain are MIME types
    res.write('<h1>Page Not Found</h1>');
  }

  res.end();
});

server.listen(5000); // port is a communication endpoint
// port 443 for SSL/TLS

// HTTP module
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url ==='/'){
    //res.write('Welcome to our home page.');
    //res.end();
    res.end('Welcome to our home page.');
  } else if (req.url === '/about'){
    res.end('Here is our short history.')
  } else {
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href = "/">Home</a>`);
  }
  
});

server.listen(5000); // port 5000 // localhost:5000 localhost:5000/foobar

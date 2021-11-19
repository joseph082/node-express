const http = require('http');

const server = http.createServer((req, res) => {
  /*console.log('request event');
  res.end('Hello World');
  */
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    // blocking code!!! that blocks other users too
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('About Page');
  } else {
    res.end(`Error Page`);
  }
});

server.listen(5000, () => {
  console.log('Server listening on port : 5000 . . .');
});

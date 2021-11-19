const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
// because http.Server extends net.Server which extends EventEmitter
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(5000);
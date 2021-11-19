const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // res.end(text);
  // content length is size of entire file

  const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
  fileStream.on('open', () => { 
    fileStream.pipe(res); // takes data from readable stream and connects it to writeable stream
    // response header transfer-encoding says it's chunked
  });
  fileStream.on('error', (err) => {
    res.end(err);
  });
}).listen(5000);

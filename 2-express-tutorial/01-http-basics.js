/**
 * Exchanging Data on Web
 * Users make request to server that sends back a response
 * HTTP Messages
 * Users send HTTP Request Msgs and servers send HTTP response Msgs
 * HTTP Message Structure
 * Request Message
 * start-line METHOD URL PROTOCOL     // methods:  GET, POST, PUT DELETE
 * eg GET /contact HTTP/1.1
 * Headers = metainfo (essentially Optional)'
 * key value pairs
 * eg. Pragma: no-cache
 * Body (Optional)
 * attached is data or Request payload
 *
 * GET = default, URL = address
 *
 * Response Message
 * start-line PROTOCOL STATUS_CODE STATUS_TEXT
 * eg HTTP/1.1 200 OK
 * Headers = metainfo (Optional)
 * eg content-type: text/html; charset=UTF-8
 * Body (Optional)
 * eg <!DOCTYPE html><html>...</html>
 */

const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const { url } = req;
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>home page</h1>');
  } else if (url === '/about') { // about page
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page</h1>');
  } else { // 404
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>page not found</h1>');
  }
  res.end();
});

server.listen(5000);

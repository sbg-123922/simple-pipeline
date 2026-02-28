const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Pipeline test works");
}).listen(3000);
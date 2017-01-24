var http = require('http');
var handleRequest = function (req, res) {
  res.writeHead(200);
  res.end('Hello Kubernetes Matthew test!');
  console.log("request handler called");
};
console.log("working");
var www = http.createServer(handleRequest);
www.listen(process.env.PORT || 8080);

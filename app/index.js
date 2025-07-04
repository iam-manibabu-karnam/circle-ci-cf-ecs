const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello World from ECS!');
}).listen(port);

console.log(`App is running at http://localhost:${port}`);


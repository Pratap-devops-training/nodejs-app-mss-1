const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Welcome to nodejs Web page</h1>');
});

server.listen(9981, () => {
  console.log('Server running on port 9981');
});

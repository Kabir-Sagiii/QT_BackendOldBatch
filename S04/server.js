const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  res.end("Request Received, it is under Processing");
});
//http://localhost:5000

server.listen(port, () => {
  console.log("Server Started");
});

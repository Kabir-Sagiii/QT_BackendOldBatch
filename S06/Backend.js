const http = require("http");
const { createUser } = require("./controller/createUser");
const { getUsers } = require("./controller/getUsers");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    getUsers(res);
  } else if (req.method === "POST") {
    createUser(req, res);
  } else if (req.method === "PUT") {
    res.end("It is Put Request");
  } else if (req.method === "DELETE") {
    res.end("It is Delete Request");
  }
});

server.listen(5000, () => {
  console.log("Server started");
});

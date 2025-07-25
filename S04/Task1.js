const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("Login.html", "utf-8", (error, data) => {
    if (error) {
      res.end("Failed to get Login Page");
    } else {
      res.end(data);
    }
  });
});

//http://localhost:5000/signin

//http://localhost:5000/signup

server.listen(5000, () => {
  console.log("Server Started");
});

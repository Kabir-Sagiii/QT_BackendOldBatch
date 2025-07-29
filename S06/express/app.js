const express = require("express");
const app = express();

app.get("/get-user", (req, res) => {
  res.send("Get Request");
}); //end point or rest api
//http://localhost:6000/get-user

app.post("/new-user", (req, res) => {
  res.send("Post Request");
});
//http://localhost:6000/new-user

app.delete("/remove-user", (req, res) => {
  res.send("Delete Request");
});
//localhost:6000/remove-user

http: app.put("/update-user", (req, res) => {
  res.send("Put Request");
});
//localhost:6000/update-user

http: app.listen(6000, () => {
  console.log("Server Started");
});

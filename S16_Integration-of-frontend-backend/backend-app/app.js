var express = require("express");
var cors = require("cors");
var createConnection = require("./config/connect");
var UserRoute = require("./routes/usersRoute");

var app = express();
app.use(cors());
app.use(express.json());
app.use("/users", UserRoute);

app.listen(5000, () => {
  console.log("Server is Started on 5000");
  createConnection();
});

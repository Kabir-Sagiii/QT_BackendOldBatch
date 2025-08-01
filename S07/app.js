const express = require("express");
const { userValidate } = require("./middlewares/userMiddleware");
const app = express();

app.use(
  (req, res, next) => {
    console.log("helloo i am use()");
    next();
  },
  (req, res, next) => {
    console.log("How r u");
    next();
  }
);

app.get("/users", userValidate, function (req, res) {
  console.log("route handler");
  res.send("Users Route is working");
}); //http://localhost:5000/users

app.get(
  "/get-user",
  function (req, res, next) {
    console.log("middleware-1");

    next();
  },
  function (req, res, next) {
    console.log("middlware-2");
    next();
  },
  function (req, res) {
    console.log("route handler");
    res.send("working fine now");
  }
); //http://localhost:5000/get-user

app.get("/html", (req, res) => {
  res.send(`<h2> I am html </h2>
    <p>I am html paragraph</p>`);
}); //http://localhost:5000/html

app.get("/object", (req, res) => {
  res.send({ ok: true, result: [{ name: "S1" }, { name: "S2" }] });
}); //http://localhost:5000/object

app.listen(5000, () => {
  console.log("Server Started");
});

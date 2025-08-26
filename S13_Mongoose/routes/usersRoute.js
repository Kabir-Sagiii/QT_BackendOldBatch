const express = require("express");
const User = require("../model/userModel");
const route = express.Router();

route.get("/get-users", (req, res) => {
  User.find()
    .then((data) => {
      res.send({
        status: true,
        results: data,
      });
    })
    .catch(() => {
      res.send({
        status: false,
        error: "Failed to Access User Data",
      });
    });
});
//http://localhost:5000/users/get-users

route.post("/create-user", (req, res) => {
  const new_user = req.body;
  const userObject = new User(new_user);

  userObject
    .save()
    .then(() => {
      res.send({
        status: true,
        result: "User Created Successfully",
      });
    })
    .catch(() => {
      res.send({ status: false, error: "Failed to create Your" });
    });
});
//http://localhost:5000/users/create-user

module.exports = route;

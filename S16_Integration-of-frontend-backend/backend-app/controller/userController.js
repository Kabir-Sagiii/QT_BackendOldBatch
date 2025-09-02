const User = require("../model/userModel");

function getUsers(req, res) {
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
}

function createUser(req, res) {
  const new_user = req.body;
  const userObject = new User(new_user);

  userObject
    .save()
    .then(() => {
      res.send({
        status: true,
        results: "User Created Successfully",
      });
    })
    .catch(() => {
      res.send({ status: false, error: "Failed to create Your" });
    });
}

function updateUser(req, res) {
  ///update the Users
}

function removeUser(req, res) {
  //delete user
}

module.exports = { getUsers, createUser };

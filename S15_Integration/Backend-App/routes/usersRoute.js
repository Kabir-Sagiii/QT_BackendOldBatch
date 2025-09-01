const express = require("express");
const { getUsers, createUser } = require("../controller/userController");
const route = express.Router();

route.get("/get-users", getUsers);
//http://localhost:5000/users/get-users

route.post("/create-user", createUser);
//http://localhost:5000/users/create-user

module.exports = route;

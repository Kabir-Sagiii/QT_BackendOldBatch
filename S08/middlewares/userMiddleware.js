function userValidate(req, res, next) {
  console.log("user data is validated");
  next();
}

module.exports = { userValidate };

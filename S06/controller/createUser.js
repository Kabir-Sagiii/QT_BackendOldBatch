const fs = require("fs");
function createUser(req, res) {
  //logic
  req.on("data", (requestData) => {
    const mydata = JSON.parse(requestData);
    fs.readFile("./db.json", "utf-8", (error, data) => {
      if (error) {
        console.log(error);
        res.end("Failed to read content from file");
      } else {
        var data = JSON.parse(data);
        data.users.push(mydata);
        fs.writeFile("./db.json", JSON.stringify(data), (error) => {
          if (error) {
            res.end("Error while updating data in the file");
          } else {
            res.end("User Registered");
          }
        });
      }
    });
  });
}

module.exports = { createUser };

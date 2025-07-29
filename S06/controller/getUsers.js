const fs = require("fs");
function getUsers(res) {
  fs.readFile("./db.json", "utf-8", (error, data) => {
    if (error) {
      res.end("Failed to fetch user Data");
    } else {
      res.end(data);
    }
  });
}

module.exports = { getUsers };

const mongoose = require("mongoose");
const database_url = "mongodb://localhost:27017/qtnodeoldBatch";

function createConnection() {
  mongoose
    .connect(database_url)
    .then(() => {
      console.log("Successfully Connected With Database");
    })
    .catch((error) => {
      console.log("Failed to connect with Database", error.message);
    });
}

module.exports = createConnection;

const fs = require("fs");

fs.unlink("home.css", (error) => {
  if (error) {
    console.log("Error while removeing the file");
  } else {
    console.log("File removed");
  }
});

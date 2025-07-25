const fs = require("fs");

fs.readFile("home.html", "utf-8", (error, data) => {
  if (error) {
    console.log("error while accessing file content");
  } else {
    console.log(data);
  }
});

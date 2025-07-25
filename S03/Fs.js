const fs = require("fs");

fs.writeFile("home.js", "I am textfile", (error) => {
  if (error) {
    console.log("Error while creating File");
  } else {
    console.log("File is created");
  }
});

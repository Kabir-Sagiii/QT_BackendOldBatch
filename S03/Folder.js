const fs = require("fs");

fs.mkdir("CSS", (error) => {
  if (error) {
    console.log("Failed to create Folder");
  } else {
    console.log("Folder is created");
  }
});

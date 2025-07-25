const fs = require("fs");

fs.rmdir("CSS", (error) => {
  if (error) {
    console.log("Failed to remove folder");
  } else {
    console.log("Folder Removed");
  }
});

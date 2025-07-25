const fs = require("fs");

fs.rename("html-files", "htmlfolders", (error) => {
  if (error) {
    console.log("Failed to rename the file");
  } else {
    console.log("Successfully renamed");
  }
});

const fs = require("fs");
const processFile = require("./processFile");
const printContent = require("./printContent");

const scanSourceDir = (
  sourceDir = "src/resources/raw",
  generatedPath = "src/resources/generated"
) => {
  fs.readdir(sourceDir, (err, filenames) => {
    if (err) return console.log(err);
    if (filenames.length === 0) return console.log("No files to convert.\n");

    let createdFilesCounter = 0;
    filenames.forEach((filename) => {
      processFile(
        sourceDir,
        filename,
        printContent(generatedPath, (isSuccess) => {
          if (isSuccess) createdFilesCounter = createdFilesCounter + 1;
          if (createdFilesCounter === filenames.length)
            console.log("\nDone!\n");
        })
      );
    });
  });
};

module.exports = scanSourceDir;

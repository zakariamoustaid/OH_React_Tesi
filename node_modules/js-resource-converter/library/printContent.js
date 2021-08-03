const fs = require("fs");
const path = require("path");
const getLanguageTag = require("./getLanguageTag");

const printContent = (generatedPath, callback) => (content, filename) => {
  const languageTag = getLanguageTag(filename);
  const filePath = path.join(generatedPath, `${languageTag}.json`);
  fs.writeFile(filePath, JSON.stringify(content, null, 2), (err) => {
    if (err) {
      callback(false);
      return console.log(err);
    }

    console.log("File created at: ", filePath);
    callback(true);
  });
};

module.exports = printContent;

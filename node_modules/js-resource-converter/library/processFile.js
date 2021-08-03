const fs = require("fs");
const readline = require("readline");
const path = require("path");
const set = require("lodash.set");
const isLineValid = require("./isLineValid");

const processFile = async (sourceDir, filename, printContent) => {
  const sourcePath = path.join(sourceDir, filename);
  const fileStream = fs.createReadStream(sourcePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const content = {};

  for await (const line of rl) {
    if (isLineValid(line)) {
      const input = line.split("=");
      const path = input[0].trim().replace("angal.", "");
      const value = input[1].trim();
      set(content, path, value);
    }
  }

  printContent(content, filename);
};

module.exports = processFile;

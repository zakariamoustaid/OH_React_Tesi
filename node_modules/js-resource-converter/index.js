#!/usr/bin/env node

const scanSourceDir = require("./library/scanSourceDir");

const argKeys = ["--path-raw", "--path-generated"];

const main = () => {
  const [, , ...inputArray] = process.argv;

  const args = inputArray.reduce((acc, input, index) => {
    if (index % 2 === 0) {
      acc[input] = "";
    } else {
      acc[inputArray[index - 1]] = input;
    }
    return acc;
  }, {});

  let areArgsValid = true;
  if (args) {
    areArgsValid = Object.keys(args).every((incomingKey) =>
      argKeys.some((preDefinedKey) => incomingKey === preDefinedKey)
    );
  }

  if (areArgsValid) {
    console.log("\nScanning source directory...\n");
    scanSourceDir(args["--path-raw"], args["--path-generated"]);
  } else {
    console.error("\nInvalid argument");
    console.log(
      "\nAt least one of the arguments entered is not valid. Try something like this:",
      "\n\n\t convert-resources --path-raw {{path}} --path-generated {{path}}",
      "\n\nThe default values for those arguments are respectivelly the following:",
      "\n\n\t../../src/resources/raw\n\t../../src/resources/generated\n"
    );
  }
};

main();

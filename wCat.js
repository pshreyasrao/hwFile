//Importing libraries from commands folder with dependency scripts
let bigLineBreaks = require("./commands/bigLineBreaks");
let defaultShowData = require("./commands/defaultShowData");
let giveNumbers = require("./commands/giveNumbers");
let nonEmptyNumber = require("./commands/nonEmptyNumber");

//Taking user input
let input = process.argv.slice(2);

let cmdArgument = input[0];

//Checking user's input / arugment while running the script
if (cmdArgument == "-s" || cmdArgument == "-n" || cmdArgument == "-b") {
  let dirPath = input[1];

  //Handling single arguments with Switch Case statements
  if (input.length <= 2) {
    switch (cmdArgument) {
      case "-s":
        bigLineBreaks(dirPath);
        break;

      case "-n":
        giveNumbers(dirPath);
        break;

      case "-b":
        nonEmptyNumber(dirPath);
        break;

      default:
        console.log('Unrecognised argument provided: use "-s", "-n" or "-b" ');
        break;
    }
  } else {
    // Handling chained arguments and edge cases
    if (input.length == 3 && input[0] == "-n" && input[1] == "-s") {
      let path = input[2];
      bigLineBreaks(path);
      giveNumbers(path);
    } else if (input.length == 3 && input[0] == "-n" && input[1] == "-b") {
      let path = input[2];
      giveNumbers(path);
    } else if (input.length == 3 && input[0] == "-b" && input[1] == "-n") {
      let path = input[2];
      nonEmptyNumber(path);
    } else {
      console.log(
        'Unrecognised argument(s) provided: use the following "-s", "-n" or "-b" '
      );
    }
  }
} else {
  // In case of no argument and ONLY path the script shows all content of the files.
  defaultShowData(input);
}

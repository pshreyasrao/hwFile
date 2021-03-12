let bigLineBreaks = require("./commands/bigLineBreaks");
let defaultShowData = require("./commands/defaultShowData");
let giveNumbers = require("./commands/giveNumbers");
let nonEmptyNumber = require("./commands/nonEmptyNumber");
let input = process.argv.slice(2);

let cmdArgument = input[0];

if (cmdArgument == "-s" || cmdArgument == "-n" || cmdArgument == "-b") {
  let dirPath = input[1];
  
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
  defaultShowData(input);
}

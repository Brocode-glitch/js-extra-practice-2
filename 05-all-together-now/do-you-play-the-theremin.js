// Do You Play the Theremin
// Define a function doYouPlayTheTheremin that accepts a string as an argument.
// doYouPlayTheTheremin should return true if the inputted string starts with the letters s or S.
// Otherwise, doYouPlayTheTheremin should return false.

// Example:
//console.log(doYouPlayTheTheremin("Griffin"));
// => false
//console.log(doYouPlayTheTheremin("Scott"));
// => true

// YOUR CODE BELOW
function doYouPlayTheTheremin(str) {
  return str.charAt(0).toLowerCase() === "s";
}

// Do not change the code below
module.exports = { doYouPlayTheTheremin };

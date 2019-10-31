const readlineSync = require("readline-sync");

console.log("\nEnter three numbers.");
let number1 = Number(readlineSync.question("\n"));
let number2 = Number(readlineSync.question());
let number3 = Number(readlineSync.question());

if (number1<number2 && number2<number3) {
    console.log("\nStrictly increasing.")
} else if (number1 > number2 && number2 > number3) {
    console.log("\nStrictly decreasing.")
} else if (number1 == number2 && number2 == number3) {
      console.log("\nEqual.")
} else if (number1 >= number2 && number2 >= number3) {
    console.log("\nDecreasing.")
} else if (number1 <= number2 && number2 <= number3) {
    console.log("\nIncreasing.")
} else if (number1 == number2 && number2 == number3) {
    console.log("\nEqual.")
} else if (Number.isNaN(number1) || Number.isNaN(number2) || Number.isNaN(number3)) {
    console.log("\nInvalid.")
} else {
    console.log("\nUnordered.")
}

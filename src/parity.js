const readlineSync = require("readline-sync");

let number = Number(readlineSync.question("\nEnter an integer: "));

let check = Math.round(number/2)
if (Math.round(number)!=number) {
    console.log("\nInvalid.");
} else if (Number.isNaN(number) || number >  Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else if (check!=number/2) {
    console.log("\nOdd.");
} else {
    console.log("\nEven.")
}

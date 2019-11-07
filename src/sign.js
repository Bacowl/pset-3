const readlineSync = require("readline-sync");

let number = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(number)|| number > Number.MAX_SAFE_INTEGER||number<Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.");
  } else if (number>0) {
    console.log("\nPositive.");
}  else if (number<0) {
    console.log("\nNegative.");
}  else if (number==0){
    console.log("\nZero.");
}

const readlineSync = require("readline-sync");

let year = Number(readlineSync.question("\nEnter a year: "));

if (Math.round(year/4) == year/4) {
    console.log("\n"+year+" is a leap year.")
} else if (Number.isNaN(year) || year <0 || Math.round(year)!=year) {
    console.log("\nInvalid");
} else {
    console.log("\n"+year+" is not a leap year.")
}

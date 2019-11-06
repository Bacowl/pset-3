const readlineSync = require("readline-sync");

let year = Number(readlineSync.question("\nEnter a year: "));

if (Math.round(year/4) == year/4) {
  if (Math.round(year/100)==year/100) {
    if (Math.round(year/400)==year/400) {
      console.log("\n"+year+" is a leap year.")
    } else {
      console.log("\n"+year+" is not a leap year.")
    }
  } else {
    console.log("\n"+year+" is a leap year.")
  }
} else if (Number.isNaN(year) || year <0 || Math.round(year)!=year|| year >  Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid");
} else {
    console.log("\n"+year+" is not a leap year.")
}

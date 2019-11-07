const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const QUARTER = 0.25;
const DIME = 0.1;
const NICKEL = 0.05;

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid");
} else {
    let numberQuarters= (amount-(amount%QUARTER))/QUARTER
    let numberDimes= (amount%QUARTER-(amount%QUARTER)%DIME)/DIME
    let numberNickels = ((amount%QUARTER)%DIME-((amount%QUARTER)%DIME)%NICKEL)/NICKEL
    let numberPennies = Math.round((amount-numberQuarters*QUARTER-numberDimes*DIME-numberNickels*NICKEL)*100)
if (numberQuarters==1) {
  var Q=" quarter, "
} else {
  var Q=" quarters, "
}
if (numberDimes==1) {
  var D=" dime, "
} else {
    var D=" dimes, "
}
if (numberNickels==1) {
  var N=" nickel, "
} else {
  var N=" nickels, "
}
if (numberPennies==1) {
  var P=" penny."
} else {
  var P= " pennies."
}

    console.log("\n"+numberQuarters+ Q +numberDimes+ D+numberNickels+ N +"and " +numberPennies+ P)}

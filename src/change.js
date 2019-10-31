const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const QUARTER = 0.25;
const DIME = 0.1;
const NICKEL = 0.05;

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount) {
    console.log("\nInvalid");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid");
} else {
    let numberQuarters= (amount-(amount%QUARTER))/QUARTER
    let numberDimes= (amount%QUARTER-(amount%QUARTER)%DIME)/DIME
    let numberNickels = ((amount%QUARTER)%DIME-((amount%QUARTER)%DIME)%NICKEL)/NICKEL
    let numberPennies = Math.round((amount-numberQuarters*QUARTER-numberDimes*DIME-numberNickels*NICKEL)*100)
    console.log("\n"+numberQuarters+" quarters, "+numberDimes+" dimes, "+numberNickels+" nickels, "+numberPennies+ " pennies, ")}

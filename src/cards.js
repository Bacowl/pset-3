const readlineSync = require("readline-sync");

let card = readlineSync.question("\nEnter a playing card: ");

let suitShort = card.charAt(1);
let number = card.charAt(0)

if (suitShort=="C") {
  let suit = "Clubs"
} else if (suitShort=="D") {
  let suit = "Diamonds"
} else if (suitShort=="H") {
  let suit = "Hearts"
} else if (suitShort=="S") {
  let suit = "Spades"
}
if (Number.isNaN(number)||number == 10) {

} else
let cardnumber = Number(number)
}
console.log("\n"+cardnumber="of"+suit)

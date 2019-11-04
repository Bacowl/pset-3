const readlineSync = require("readline-sync");

let card = readlineSync.question("\nEnter a playing card: ");

let suitShort = card.charAt(1);

if (suitShort=="C") {
  let suit = "Clubs"
} else if (suitShort=="D") {
  let suit = "Diamonds"
} else if (suitShort=="H") {
  let suit = "Hearts"
} else if (suitShort=="S") {
  let suit = "Spades"
}

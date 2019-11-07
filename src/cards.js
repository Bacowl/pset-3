const readlineSync = require("readline-sync");

let card = readlineSync.question("\nEnter a playing card: ");

let suitShort = card.charAt(1);
let number = card.charAt(0)
var invalid = null

if (suitShort=="C") {
  var suit = "Clubs"
} else if (suitShort=="D") {
  var suit = "Diamonds"
} else if (suitShort=="H") {
  var suit = "Hearts"
} else if (suitShort=="S") {
  var suit = "Spades"
} else {
    console.log("\nInvalid.");
    var invalid=1
}

if (number == "A") {
  var cardNumber="Ace"
} else if (number == 2) {
    var cardNumber="Two"
} else if (number == 3) {
    var cardNumber="Three"
} else if (number == 4) {
    var cardNumber="Four"
} else if (number == 5) {
    var cardNumber="Five"
} else if (number == 6) {
    var cardNumber="Six"
} else if (number == 7) {
    var cardNumber="Seven"
} else if (number == 8) {
    var cardNumber="Eight"
} else if (number == 9) {
    var cardNumber="Nine"
} else if (number == "T") {
    var cardNumber="Ten"
} else if (number == "J") {
    var cardNumber="Jack"
} else if (number == "Q") {
    var cardNumber="Queen"
} else if (number == "K") {
    var cardNumber="King"
} else if (invalid=1) {

} else {
    console.log("\nInvalid.");
    var invalid=1
}
if (invalid!=1) {
console.log("\n"+cardNumber+" of "+suit+".")
}

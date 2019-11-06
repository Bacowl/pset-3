const readlineSync = require("readline-sync");

let month = readlineSync.question("\nEnter a month: ");
let monthCap = month.toUpperCase()

if (monthCap.includes("JAN")||monthCap.includes("MAR")||monthCap.includes("MAY")||monthCap.includes("JUL")||monthCap.includes("AUG")||monthCap.includes("OCT")||monthCap.includes("DEC")) {
var days = "31 days."
} else if (monthCap.includes("JAN")||monthCap.includes("JAN")||monthCap.includes("JAN")||monthCap.includes("JAN")) {
var days = "30 days."
} else if (monthCap.includes("FEB")) {
var days = "28 or 29 days."
} else {
var days = "Invalid."
}
console.log("\n"+days)

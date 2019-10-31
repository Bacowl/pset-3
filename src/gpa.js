const readlineSync = require("readline-sync");

let grade = readlineSync.question("\nEnter a letter grade: ");

if (grade ==  "A") {
    console.log("noice")
} else if (grade == "B")
    console.log("less noice")

const readlineSync = require("readline-sync");

let grade = Number(readlineSync.question("\nEnter a grade: "));
let letter = 0
let grade2 = grade

while (grade >= 0) {
  grade-=10
  letter++
}

if (grade2==100) {
  letter--
} else if (grade2 >= 0 && grade2 < 60) {
  letter += (5-letter)
}

var letterGrade = String.fromCharCode(65 + (10-letter))

if (letter == 10 || letter == 5) {
console.log("\nYou recieved an "+letterGrade+".")
} else if (letter <=9 && letter >= 6){
  console.log("\nYou recieved a "+letterGrade+".")
}  else
  console.log("\nInvalid.");

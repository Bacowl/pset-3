const readlineSync = require("readline-sync");

let grade = readlineSync.question("\nEnter a letter grade: ");

if (grade ==  "A" || grade == "A+") {
    var gradeNumber = "4.00"
}  else if (grade == "B") {
    var gradeNumber = "3.00"
}  else if (grade == "C") {
    var gradeNumber = "2.00"
}  else if (grade == "D") {
    var gradeNumber = "1.00"
}  else if (grade == "F") {
    var gradeNumber = "0.00"
}  else if (grade == "A-") {
    var gradeNumber = "3.66"
}  else if (grade == "B+") {
    var gradeNumber = "3.33"
}  else if (grade == "B-") {
    var gradeNumber = "2.66"
}  else if (grade == "C+") {
    var gradeNumber = "2.33"
}  else if (grade == "C-") {
    var gradeNumber = "1.66"
}  else if (grade == "D+") {
    var gradeNumber = "1.33"
}  else if (grade == "D-") {
    var gradeNumber = "0.66"
}  else {
  console.log("\nInvalid")
}
if (gradeNumber != 3.14) {
console.log("Your GPA is "+gradeNumber+".")
}

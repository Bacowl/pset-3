const readlineSync = require("readline-sync");

let grade = readlineSync.question("\nEnter a letter grade: ");

let valid = 0

if (grade ==  "A" || grade == "A+") {
    var gradeNumber = "4.00"
    valid++
}  else if (grade == "B") {
    var gradeNumber = "3.00"
    valid++
}  else if (grade == "C") {
    var gradeNumber = "2.00"
    valid++
}  else if (grade == "D") {
    var gradeNumber = "1.00"
    valid++
}  else if (grade == "F") {
    var gradeNumber = "0.00"
    valid++
}  else if (grade == "A-") {
    var gradeNumber = "3.66"
    valid++
}  else if (grade == "B+") {
    var gradeNumber = "3.33"
    valid++
}  else if (grade == "B-") {
    var gradeNumber = "2.66"
    valid++
}  else if (grade == "C+") {
    var gradeNumber = "2.33"
    valid++
}  else if (grade == "C-") {
    var gradeNumber = "1.66"
    valid++
}  else if (grade == "D+") {
    var gradeNumber = "1.33"
    valid++
}  else if (grade == "D-") {
    var gradeNumber = "0.66"
    valid++
}  else {
  console.log("\nInvalid")
}
if (valid == 1) {
console.log("\nYour GPA is "+gradeNumber+".")
}

const readlineSync = require("readline-sync");

let temperature = readlineSync.question("\nEnter a temperature: ");
let scaleAny = readlineSync.question("Enter a scale: ");
var invalid = null;
let scale= scaleAny.toUpperCase();

if (temperature>Number.MAX_SAFE_INTEGER||temperature<Number.MIN_SAFE_INTEGER) {
  console.log("\nInvalid.")
  var invalid = 1
}

if (scale=="K"){
  if (temperature >= 373.2 ) {
      var state = "Gas."
  } else if (temperature <= 273.15) {
  var state = "Solid."
} else if (temperature < 373.2 && temperature >273.15) {
      var state = "Liquid."
  } else if (invalid!=1){
    console.log("\nInvalid.")
    var invalid = 1
  }
} else if (scale=="C") {
  if (temperature >= 100 ) {
      var state = "Gas."
  } else if (temperature <= 0) {
  var state = "Solid."
} else if (temperature < 100 && temperature > 0) {
      var state = "Liquid."
  } else if (invalid!=1){
    console.log("\nInvalid.")
    var invalid = 1
  }
} else if (scale=="F") {
  if (temperature >= 212) {
      var state = "Gas."
  } else if (temperature <= 32) {
      var state = "Solid."
  } else if (temperature < 212 && temperature > 32) {
      var state = "Liquid."
  } else if (valid!=1){
    console.log("\nInvalid.")
    var invalid = 1
  }
} else if (invalid != 1) {
  console.log("\nInvalid.")
  var invalid = 1
}
if (invalid!=1) {
  console.log("\n"+state)
}

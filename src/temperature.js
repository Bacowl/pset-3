const readlineSync = require("readline-sync");

let temperature = readlineSync.question("\nEnter a temperature: ");
let scale = readlineSync.question("\nEnter a scale: ");
var invalid = null

if (scale=="K"){
  if (temperature > ) {

  } else if (temperature <) {

  } else if (temperature < && temperature >) {

  }
} else if (scale=="C") {
  if (temperature > ) {

  } else if (temperature <) {

  } else if (temperature < && temperature >) {

  }
} else if (scale=="F") {
  if (temperature >) {

  } else if (temperature <) {

  } else if (temperature < && temperature >) {

  }
} else {
  console.log("\nInvalid.")
  var invalid = 1
}
if (valid!=1) {
  console.log()
}

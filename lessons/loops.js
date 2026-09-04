// loops

// for loop
for (let i = 0; i < 4; i++) {
  console.log(i);
}
var car = ["toyota", "Volvo", "Saab", "Ford"];
for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
  if (car[i] === "Volvo") {
    break;
  }
}

// ES6 syntax for each loop
car.forEach (car => {
  console.log(car);
});
// logical operators
// logical "AND"
console.log(true && true); // true

// logical "OR"
console.log(false || false); // false

var ageismorethan18
var isUSCitizen
ageismorethan18 = false;
isUSCitizen = false;
var eiligiblefordriverlicense = ageismorethan18 && isUSCitizen;
var eiligibleforvoting = ageismorethan18 || isUSCitizen;
console.log(eiligiblefordriverlicense);
console.log(eiligibleforvoting);
console.log(ageismorethan18 && isUSCitizen);


// logical "NOT"
console.log(!false);
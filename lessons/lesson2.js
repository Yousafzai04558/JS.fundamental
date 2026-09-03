// concatination and interpolation

var price = 80;
var itemname = "table";
var messagetoprint = "the price for your "+ itemname +" is "+ price +" dollars"; // concatination
var messagetoprint2 = `the price for your ${itemname} is ${price} dollars`; // interpolation
console.log(messagetoprint);
console.log(messagetoprint2);
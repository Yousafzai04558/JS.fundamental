// declerative function
function helloOne() {
    console.log("hello one!");
}
helloOne();

// anonymous function
var helloTwo = function() {
    console.log("hello two!");
}   
helloTwo();

//ES6 anonymous function syntax or arrow function

var helloThree = () => {
    console.log("hello three!");
}
helloThree();

// function with arguments
function printname (name, lastname) {
    console.log("name+" + name + " " + lastname);
}

printname("Alice", "Johnson");

// function with return 
function addTwoNumbers (num1, num2) {
    return num1 + num2;
}
var result = addTwoNumbers(16, 20);
console.log(result);

// import function
import {printage} from "./helper/printhelper.js";   
printage(30);

// import everything
import * as helper from "./helper/printhelper.js";
helper.printage(40);


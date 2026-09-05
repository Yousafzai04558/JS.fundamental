// objects
var customer = {
    firstname: "John",
    lastname: "Doe",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12333"
    }
};

// dot notation

customer.firstname = "Jane";
customer.lastname = "Smith";
customer.age = 22;

// bracket notation

customer["address"]["street"] = "456 Elm St";
customer["address"]["city"] = "Othertown";

console.log(customer.firstname + " " + customer.lastname + " " + customer.age);
console.log(customer.address.street + " " + customer.address.city + " " + customer.address.state + " " + customer.address.zip);


// arrays
var fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange
console.log(fruits[3]); // grape

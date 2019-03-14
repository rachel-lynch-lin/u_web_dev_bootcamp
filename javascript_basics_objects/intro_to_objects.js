// Object - Another data structure in JavaScript
  // Store data in key-value pairs
  // Objects have no order

var dog = {
  name: "Lucy",
  age: "8",
  species: "Great Dane"
};

// Retrieving Data - bracket and dot notation
// Bracket notation, similar to arrays:
console.log(person["name"]);
// Dot notation:
console.log(person.name);

// There are a few differences between the 2 notations:
// Dot notation cannot be used it the property starts with a number
// someObject.1blah;    // Invalid
// someObject["1blah"];   // Valid

// Lookup can be done with a variable in bracket notation
var str = "name";
// someObject.str;    // Does not look for "name"
// someObject[str];   // Does evaluate str and looks for "name"

// Dot notation for property does not work if the name contains spaces
// someObject.fav color;    // Invalid
// someObject["fav color"];   // Valid


// Updating Data - just like an array; access a property and reassign it
// To update age 
dog["age"] += 1;
// To update species
dog.species = "Mutt";

// Creating Object 
// There are a few ways to initialize an object.
// Make an empty object and then add to it
var person = {};
person.name = "Sally";
person.age = 29;
person.city = "SF";

// All at once
var person = {
  name: "Sally",
  age: 29,
  city: "SF"
};

// Another way to initialize 
var person = new Object();
person.name = "Sally";
person.age = 29;
person.city = "SF";

// Objects can hold different types of data
// Arrays store an indexed list. 
// Objects store data in key and value pairs. It is unordered similar how one would find things in a dictionary. 

// Arrays - Example
var dogs = ["Lucy", "Russ", "Tico"];

dogs;
// => ["Lucy", "Russ", "Tico"]

// Objects - Example
var dog = {
  name: "Lucy",
  breed: "Great Dane"
};

dog;
// => Object {name: "Lucy", breed: "Great Dane"}

// To get the second item in the array
dogs[1];
// => "Russ"

// To get the value for name of dog
dog["name"];
// or
dog.name;

// Adding to Arrays
dogs.push("Toby");

// Adding to Objects
dog.age = 5;
dog;
// => Object {name: "Lucy", breed: "Great Dane", age: 5}
// Adding to objects is easier since you do not need to specify where it is added

// Updating in an array
dogs[2] = "Spot";

// Updating in an object
dog.breed = "Great Dane Mix";

// Nested Objects and Arrays
var posts = [
  {
    title: "Cats can be mean",
    author: "Rachel",
    comments: ["Yeah!", "No they are just cats"]
  },
  {
    title: "Cats are way better than dogs",
    author: "CatPerson",
    comments: ["Dogs are the best", "I agree"]
  }
]

// To get the first title in comments
posts[0].title;
//  => "Cats can be mean"

// Get the second comment in the second post
posts[1].comments[1];


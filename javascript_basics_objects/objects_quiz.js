// Objects Quiz

// Exercise 1

var someObject = {};

// Which of the following are valid?

someObject._name = "Hedwig";
someObject.age = 6;
var prop = "color";
someObject[prop] = "red";
// someObject.123 = true;

// The only one that does not work is someOject.123


// Exercise 2
var someObject2 = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe" },
    {name: "Goyle"}
  ],
  color: "light blue",
  isEvil: false
};

// Retrieve Malfoy from someObject, one layer at a time
someObject2.friends;
someObject2.friends[0];
someObject2.friends[0].name;
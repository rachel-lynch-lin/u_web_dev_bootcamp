// JS Methods
// Adding methods to an object, namespacing, and this keyword
// Methods are functions that are a property inside an object

var objEx = {
  multiply: function(x, y) {
    return x * y;
  }
};

// Using methods helps to keep code organized and grouped as needed

// This helps to prevent collisions with namespace

// Underscore.js is a JavaScript library that contains a lot of methods from the object _

// This keyword introduction
var movies = {};
movies.titles = ["Avengers", "Iron Man", "Thor"];
movies.print = function () {
  this.data.forEach(function(el) {
    console.log(el);
  });
};

// In this example, this, is referring to the object movies
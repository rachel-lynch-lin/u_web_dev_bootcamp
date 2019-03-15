// Movie Database Exercise
// Create an array of movie objects. Each object should have a title, rating, and hasWatched properties.
// Iterate through the array and print out something that look like:

var movieDB = [
  {
    title: "Captain Marvel",
    rating: 5,
    hasWatched: false
  },
  {
    title: "Avengers: Infinity War",
    rating: 4.5,
    hasWatched: true
  },
  {
    title: "Aquaman",
    rating: 5,
    hasWatched: false
  },
  {
    title: "How to Train Your Dragon 3",
    rating: 5,
    hasWatched: false
  },
  {
    title: "Antman and the Wasp",
    rating: 4,
    hasWatched: true
  },
  {
    title: "Ralph Breaks the Internet",
    rating: 3.5,
    hasWatched: true
  }
];

// For loop solution
for(i = 0; i < movieDB.length; i++) {
  var result = "You have ";
  if(movieDB[i].hasWatched === true) {
    result += "watched ";
  } else {
    result += "not watched "
  };
  result += '"' + movieDB[i].title + '" - ';
  result += movieDB[i].rating + " stars";
  console.log(result);
};

// Solution using forEach
movieDB.forEach(function(movie) {
  console.log(buildString(movie));
});

function buildString(movie) {
  var result = "You have ";
  if(movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars"
  return result
};
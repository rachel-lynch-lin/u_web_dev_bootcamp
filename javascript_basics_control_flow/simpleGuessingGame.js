// Create secretNumber

var secretNumber = 4;

// Ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check if guess is right
if(guess === secretNumber) {
  alert("You got the right number!!!");
}

// Otherwise, check if higher
else if(guess > secretNumber) {
  alert("Too high. Guess again!");
}

// Otherwise, check if guess is lower
else {
  alert("Too low. Guess again!");
}
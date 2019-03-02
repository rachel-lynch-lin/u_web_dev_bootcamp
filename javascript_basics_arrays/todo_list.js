var todos = ["THING 1", "THING 2"];

window.setTimeout(function() {
  
  var input = prompt("What would you like to do?");
  
  while(input !== "quit") {
    // handle input
    if (input == "list") {
      console.log(todos);
    } else if (input == "new") {
      // ask for nex todo
      var newTodo = prompt("Enter new todo");
      // add to todos array
      todos.push(newTodo);
    }
    // ask again for new input
    input = prompt("What would you like to do?");
  }
  console.log("Okay, you quit the app");
  
}, 500);

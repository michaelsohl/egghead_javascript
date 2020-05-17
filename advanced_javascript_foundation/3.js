/**
 * var does not respect the block scopes, only function blocks
 * {} are interpreted as an Object literal unless variable assignment takes place, then a
 * block scope is created
 * window.name == "Michael"
 */

// 1
var name = "Michael";
{
  var name = "Sofie"; // overwrites name
  console.log(name); // Sofie
}

console.log(name); // Sofie

// vars only follow the function execution scope

// 2

// name = undefined (technically at the top of this page)
var name = "Michael";
function func() {
  // name = undefined
  var name = "Sofie";
  console.log(name);
}

console.log(name); // Michael
func(); // Sofie

// behind the scenes the vars are hoisted to the top of their execution scope space

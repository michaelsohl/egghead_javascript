var name = "Michael";
{
  var name = "Sofie";
  console.log(name); // Sofie
}

console.log(name); // Sofie

/**
 * var does not respect the block, unless it's a function block
 * {} are interpreted as an Object literal unless variable assignment takes place
 * window.name == "Michael"
 */

var name = "Michael";
function func() {
  var name = "Sofie";
  console.log(name); // Sofie
}

console.log(name); // Sofie
func();

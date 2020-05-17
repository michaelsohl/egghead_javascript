/**
 * 'use strict' is a prevent sloppy mode
 * babel automatically adds this function
 *
 */

"use strict";

//x = 1; // it is not allowed to create global vars

var obj = {};
Object.defineProperty(obj, "test", { value: "Clark", writable: false });

// obj.test = "Kent"; // you will get away with this without strict mode

function func(name1, name) {
  // changed name to name1 to compile
  "use strict"; // can be scoped to function
  // duplicate paramter names are not allowed
  return;
}

/* the fault that use strict mostly catches is the made practice of assigning variables
 to the global scope (window/global/module.exports). In strict mode that cannot happen
 since this = undefined
 */
function func2() {
  console.log(this);
}
func2();

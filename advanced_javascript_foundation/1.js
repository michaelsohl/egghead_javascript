const a = {};
console.log(a.toString());
a.toString = function () {
  console.log("a function");
};
const b = Object.create(a);
b.toString = function () {
  console.log("apekatt");
};
console.log(b);
/**
 * In Javascript prototypes powers the inheritance in the language
 * Javascript does not have classes, only objects.
 *
 * The a object is an empty object but includes __proto__
 * This is the global dunder proto
 *
 * In object b a nesting of __proto__ are created. When trying to access
 * b's properties, like b.toString(), Javascript first checks the properties of b.
 *
 * This is also true for other types like sets, functions and arrays
 */

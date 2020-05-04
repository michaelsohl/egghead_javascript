function func() {}
func.prototype.test = "test";
console.log(func.prototype);

const a = new func();
console.log(a.test);

console.log(Array.prototype);

/**
 *  All functions are linked to a prototype object
 *  Array, Set, Map are all global functions in Javascript
 */

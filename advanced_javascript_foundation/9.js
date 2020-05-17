// javascript uses autoboxing when we treat primitve values as objects
// when we dot into a primitive it is wrapped with an object. This
// object is then linked to the corresponding globally scoped function's prototype object

const str = "Sofie";

console.log(str.length); // String.prototype.length
console.log((10).toString()); // Number.prototype.length
console.log(false.valueOf()); // Boolean.prototype.valueOf

"use strict";
function Person(firstname, lastname) {
  // Person function's prototype is linked to an empty object, {}
  console.log(this);
  this.firstname = firstname;
  console.log(this);
  this.lastname = lastname;
  console.log(this);
}

const person = new Person("Sofie", "Svennberg");
console.log(person.firstname + " " + person.lastname);

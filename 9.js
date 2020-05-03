"use strict";

/**
 * A function call without a return statement will return 'this'
 */
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  return this;
}

const person = new Person("Sofie", "Svennberg");
console.log(person.firstname + " " + person.lastname);

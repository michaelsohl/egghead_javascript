"use strict";

/**
 * If anything but an object is returned, 'this' is returned
 */
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  return null;
}

const person = new Person("Sofie", "Svennberg");
console.log(person);

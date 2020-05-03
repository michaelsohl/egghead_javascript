"use strict";

/**
 * A function can return a different object instead of this
 * This use case is not that common. Proxy(wrapper).
 */
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  return {
    firstname: "Sofie",
    middlename: "Elisabet Ingeborg",
    lastname: "Svennberg",
  };
}

const person = new Person("Sofie", "Svennberg");
console.log(person);

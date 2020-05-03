"use strict";
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

let person = new Person("Sofie", "Svennberg"); // Using 'new' creates a new object. Good practice!
console.log(person.firstname + " " + person.lastname);

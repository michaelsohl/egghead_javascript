// "use strict"; OBS! By adding this line, the assignment below is not allowed.

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

person = Person("Sofie", "Svennberg"); // assignment pollutes global object. Not good practice.
console.log(person);
console.log(global.firstname + " " + global.lastname);

/* 
 Strict mode is good to hinder bad practices, but if third party code breaks the requirements
 of strict mode, it cannot be used.
*/

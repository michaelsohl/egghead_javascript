// "use strict";

const person = {
  name: "Sofie Svennberg",
  who_am_i() {
    console.log(`My name is ${this.name}`);
  },
};

setTimeout(person.who_am_i, 1000);
setTimeout(person.who_am_i.bind(person), 1000); // hard binding

const greet = person.who_am_i.bind(person);
greet();
/**
 * After bind apply and call cannot change the functions
 */

const other_person = {
  name: "Eva",
};

greet.call(other_person); // Will not change person

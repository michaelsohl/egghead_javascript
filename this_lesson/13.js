// "use strict";

const person = {
  name: "Sofie Svennberg",
  who_am_i() {
    console.log(`My name is ${this.name}`);
  },
};

/**
 * When can a method lose its receiver?
 */

const name = person.who_am_i;
name(); // this is not allowed in strict mode

/**
 * This usually happens when passing a method as a callback to another functions
 */

setTimeout(function () {
  person.who_am_i();
}, 1000);

setTimeout(person.who_am_i.bind(person), 1000); // bind method!

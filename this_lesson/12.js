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

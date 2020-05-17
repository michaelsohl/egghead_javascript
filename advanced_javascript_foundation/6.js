const person = {
  firstName: "Michael",
  getName: function () {
    console.log(`${this.firstName} is my name`);
  },
};

setInterval(person.getName, 3000); // Undefined
// 1. No

/**
 *      three questions about what this is
 *      1. Is the function called?
 *      2. How was it invoked?
 *      3. What context was it invoked in?
 *
 *
 *      1. getName is executed in the context of setInterval
 *      2. The context of setInterval is this == window
 *      3. window.getName does not exist.
 */

const otherPerson = {
  firstName: "Sofie",
  getName() {
    console.log(`${this.firstName} is another person's name`);
  },
};

setInterval(otherPerson.getName, 3000); // Undefined
// 1. No

const otherPerson2 = {
  firstName: "Miko",
  getName: () => {
    console.log(`${this.firstName} is yet another person's name`);
  },
};

setInterval(otherPerson2.getName, 3000); // Undefined

const yetAnotherPerson = {
  firstName: "Olive",
  getName() {
    return () => {
      console.log(`${this.firstName} is yet another person's name`);
    };
  },
};

setInterval(yetAnotherPerson.getName(), 3000); // Olive
// 1. Yes, 2. By implicit bindings 3. yetAnotherPerson is the context of execution

const Golden = {
  benny: {
    raceName: "Golden Retriever",
    whatAmI: function () {
      console.log(`I'm a ${this.raceName}`);
    },
  },
};

Golden.benny.whatAmI(); // undefined if raceName is defined as a property of Golden :)

maxSpeedPorsche = 200;
function getMaxSpeed() {
  console.log(`The max speed of a Porsche is ${this.maxSpeedPorsche}`);
}
getMaxSpeed();
// 1. Yes 2. Implicitly binded 3. It was invoked in the scope of module.exports
console.log(this === module.exports);

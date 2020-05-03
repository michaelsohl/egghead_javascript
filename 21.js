class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  sayHi = () => {
    console.log(`Hello! My name is ${this.firstname}`);
  };
}

const person = new Person("Sofie", "Svennberg");
person.sayHi();

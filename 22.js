class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.sayHi = this.sayHi.bind(this);
  }

  sayHi() {
    console.log(`Hello! My name is ${this.firstname}`);
  }
}

const person = new Person("Sofie", "Svennberg");
person.sayHi();

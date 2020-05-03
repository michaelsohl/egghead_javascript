class Person1 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  sayHi() {
    console.log(`Hello! My name is ${this.firstname}`);
  }
}

const person = new Person1("Sofie", "Svennberg");
person.sayHi(); // person is the receiver of the method sayHi

//const greet = person.sayHi;
//greet();

// here, greet looses the receiver of the method. Classes are implicitly in strict mode

const greet = person.sayHi.bind(person); // use bind
greet();

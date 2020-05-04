function get_name() {
  console.log(this === person); // true
  console.log(`My name is ${this.name}`);
}

const person = {
  name: "Sofie Svennberg",
};

get_name.call(person); // get_name's prototype (this) is linked to the person object
get_name.apply(person);

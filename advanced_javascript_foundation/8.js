const obj = { a: 1 };

function func(obj) {
  obj.a = 2;
}

func(obj); // objects are passed by reference

console.log(obj.a);

const num = 1;

function add2(num) {
  num = num + 2;
  console.log(num);
}
add2(num); // values are passed by value
console.log(num);

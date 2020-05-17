/**
 * Closure is a function that has access to its lexical scopes
 * That includes its own scope, its parent's scope and the global scope.
 *
 * Closure is over variables, not value
 */

const name = "Sofie";

function func() {
  const myname = "Michael";
  return function func2() {
    const othername = "Martin";
    console.log(`Det finns 3 namn här: ${name}, ${myname} and ${othername}`);
  };
}

const f = func();
f();

[1].map((a) => a); // example of the use of closure

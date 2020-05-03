const outerThis = this;
const func = () => {
  console.log(outerThis === this);
};

func();
func.call(null);
func.call(undefined);
func.apply(null);
func.apply(undefined);

/**
 * however the arrow functions is called, 'this' is always equal to the sorrounding
 * 'this' that existed when the function was created
 * */

// const new_func = new func();

/**
 * This is why the arrow function does not work as a constructor.
 * A constructor often has properties and their would be no sense in
 * creating an object that assined properties to the surrounding 'this'
 */

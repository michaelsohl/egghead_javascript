/**
 * the static keyword can be used for class properties
 * they cannot be accessed through instantiated classes (new)
 */

class Rectangle {
  static callRectangle() {
    return "hello world";
  }
}

class Square extends Rectangle {
  static whoAmI() {
    return "Hello, all " + super.callRectangle();
  }
}

console.log(Square.whoAmI()); //Hello, all hello world

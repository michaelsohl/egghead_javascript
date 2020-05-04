const counter1 = {
  counter: 0,
  count() {
    setInterval(function () {
      console.log(++this.counter);
    }, 1000);
  },
};

counter1.count(); // Result: NaN

const counter2 = {
  counter: 0,
  count() {
    setInterval(
      function () {
        console.log(++this.counter);
      }.bind(this),
      1000
    );
  },
};

counter2.count(); // bind the function to 'this' inside counter2

const counter3 = {
  counter: 0,
  count() {
    setInterval(() => {
      console.log(++this.counter);
    }, 1000);
  },
};

counter3.count(); // the arrow function uses counter3's 'this' automatically

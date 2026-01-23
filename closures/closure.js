//function x(){
//  let a = 7;
//function y(){
//  console.log(a);
//}
// y()
//}
//x();
function x(y) {
  var a = 9;
  console.log(y);
  y();
}
x(function y() {
  console.log("hello world");
});


// closures can also be used for data privacy data hiding and encapsulation
// here count is private variable and can only be accessed by incrementCounter function and not from outside
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

// counter()();
const counter1 = counter();
counter1();
counter1();




//this below code will not work as expected because the inner function is immediately invoked and it does not return the inner function to be called later
//so the count variable will be reset to 8 every time the counter function is called
// function counter() {
//   var count = 8;
//   return (function() {
//     count++;
//     console.log(count);
//   })();
// }

// // const counter1 = counter();
// // counter1();
// // counter1();
// counter();
// counter();
// counter();



//we can also create objects with methods that can access private variables using closures
function NewCounter() {
  var count = 0;
    this.increment = function() {
    count++;
    console.log(count);
    }
    this.decrement = () => {
        count--;
        console.log(count);
    }
}

const myCounter = new NewCounter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();






class Counter {
  #count = 100; // private field

  increment() {
    this.#count++;
    console.log(this.#count);
  }

  decrement() {
    this.#count--;
    console.log(this.#count);
  }
}
const myCounterClass = new Counter();
myCounterClass.increment();
myCounterClass.increment();
myCounterClass.decrement();
myCounterClass.count; // Error: Private field '#count' must be declared in an enclosing class 
// trying to access private field from outside the class will throw error




//if variables arent used then they are garbage collected and memory is freed up
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction(); // Logs: I am from outer function

// After this point, if there are no references to myInnerFunction, both innerFunction and outerVariable can be garbage collected.


function a(){
    var x = 10,z=20;
    return function b(){
        console.log(x);
    }
}

var res = a();
res(); //and z is garbage collected as it is not used in inner function b()
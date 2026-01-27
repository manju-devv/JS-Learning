// function statement
// normal way of defining a function using the function keyword with a name
//it is also called as function declaration
function a() {
  console.log("Function a called");
}
a();

// function expression
// defining a function and assigning it to a variable
const b = function () {
  console.log("Function b called");
};

b();

// named function expression
// its same as function expression but the function has a name
const c = function xyz() {
  console.log("Function c called");
};

c();
// xyz(); // this will give an error because the function name is not accessible outside the function expression

// First class functions
// functions can be assigned to variables, passed as arguments to other functions, and returned from functions

// function assigned to a variable
const greet = function (name) {
  return "Hello " + name;
};

console.log(greet("Harry"));

// function passed as an argument to another function
function processUserInput(callback) {
  const name = "Carry Bag";
  console.log(callback(name));
}

processUserInput(greet);

// function returned from another function
// function multiplier(factor){
//     return function(number){
//         return number * factor;
//     }
// }

// const double = multiplier(2);
// console.log(double(5)); // 10

let h = function (param1) {
  return function (xyz) {
    console.log("Inside inner function");
  };
};

console.log(h()());
h()();

const buttoon = document.querySelectorAll(".click");
buttoon.forEach((btn, i) => {
  btn.addEventListener("click", () => clickEvent(i));
});



function clickEvent(i) {
  console.log("button clicked", i + 1);
  if (i === 0) {
    let data = document.createElement("h4");
    data.innerText = `it is first button ${i + 1}`;
    document.body.appendChild(data);
    // document.body.appendChild(document.createElement('h1')).innerText = "You clicked the first button";
  }
}

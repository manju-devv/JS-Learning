// let a = 10;
// const c = 20;
// console.log(a);

// var b = 100;

// block: A block is a set of statements enclosed in curly braces {}. also called as compound statement.
//block scope : means a variable or function is only accessible within the block its defined inside {}

// ex: {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// let, const are block scoped

// shadowing: when a variable declared inside a certain scope has the same name as a
// variable declared in an outer scope, the inner variable shadows the outer one.

//         ex: {
//     let a = 10;
//     {
//         let a = 20; // shadows outer a
//         console.log(a); // 20
//     }
//     console.log(a); // 10
// }

// var a = 100;
// {
//   var a = 10; // shadows outer a
//   let b = 20;
//   var c = 30;
//   console.log(a); // 20
//   console.log(b); // 20
//   console.log(c); // 30
// }
// console.log(a); // 10

// Temporal Dead Zone (TDZ): The temporal dead zone is the time between entering a scope and the point at which a variable declared with let or const is initialized.
// During this time, any attempt to access the variable will result in a ReferenceError.

// const c = 10;
// function test(){
//     const c = 30;
//     console.log(c);
// };
// test();
// console.log(c);

const a = 10;
{
  console.log(a);
  {
    console.log(a);
  }
  console.log(a);
}
console.log(a);

// var a = 10;
// {
//   let a = 20; // ❌ Illegal shadowing
//   console.log(a);
// }
// console.log(a);

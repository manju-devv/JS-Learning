// shallow copying: creating a new array or object and copying the values of
// the original array or object into the new one. This can be done using the spread operator (...) in JavaScript.
// this does not point to the same memory location as the original array or object unless its has nested objects or arrays.

// arr
const lunchMenu = [
  "Greek Salad",
  "Open Sandwich",
  "Parsnip Soup",
  "Flatbread and Dip",
];
const dinnerMenu = ["Lasagne", "Strogonoff", "Tagine", "Katsu Curry"];
const sweetMenu = [
  ["Mixed Berry Ice Cream", "Chocolate"],
  "Chocolate Brownie",
  "Orange Cheesecake",
];

// console.log(...lunchMenu)
// Greek Salad,"Open Sandwich","Parsnip Soup","Flatbread and Dip"

const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu];
eventMenu[8][0] = "Tutti Frutti";
console.log("sweetMenu", sweetMenu);
console.log("eventMenu", eventMenu);

// obj

const salad1 = {
  name: "green",
  ingredients: ["lettuce", "tomato"],
};
const salad2 = { ...salad1 };
salad2.name = "Greek";
salad2.ingredients[0] = "Cucumber";
console.log(salad1);
console.log(salad2);




// const salad1 = {
//   name: "green",
//   ingredients: {
//     veg1: "lettuce",
//     veg2: "tomato",
//   },
// };
// const salad2 = { ...salad1 };
// salad2.name = "Greek";
// salad2.ingredients.veg1 = "Cucumber";
// console.log(salad1);
// console.log(salad2);
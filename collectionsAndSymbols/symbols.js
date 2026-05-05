// symbol: a unique identifier that can be used as a property key in an object
// symbols are not enumerable, meaning they won't show up in for...in loops or Object.keys() calls

const sym1 = Symbol("description");
const sym2 = Symbol("description");

console.log(sym1 === sym2); // false, each symbol is unique

const obj = {
  [sym1]: "value1",
  [sym2]: "value2",
};

console.log(obj[sym1]); // value1
console.log(obj[sym2]); // value2

console.log(obj);


const userNameeee = Symbol();
const user = {
    name: "Benny",
}
user["age"] = 57;
user[userNameeee] = "benny123";
console.log(user);
console.log(user[userNameeee]); // benny123


console.log(Object.keys(user)); 
console.log(Object.values(user)); 
console.log(JSON.stringify(user))
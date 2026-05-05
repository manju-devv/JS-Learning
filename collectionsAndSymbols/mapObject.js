// map object -
// a collection of key-value pairs where keys can be of any type (including objects and functions)
// maps maintain the order of insertion and allow for easy retrieval of values based on keys

const athlete1 = { name: "Alice", age: 50 }
const athlete2 = { name: "Dave", age: 51 }
const athlete3 = { name: "Nicky", age: 49 }

const finishers = new Map();

finishers.set(athlete1, "gold");
finishers.set(athlete2, "silver");
finishers.set(athlete3, "bronze");
// console.log(finishers)

// finishers.forEach((value,key) => console.log(key.name,value))
// console.log(finishers.size);
console.log(finishers.get(athlete1));

// console.log(finishers.has(athlete2)); // true
console.log(finishers.delete(athlete3))
console.log(finishers.has(athlete3)); // false
console.log(finishers)

// insertion order is maintained in maps,
// so when we iterate over the map, the entries will be returned in the order they were added.

// in normal objects, the order of properties is not guaranteed, and it can vary based on the JavaScript engine.
const person = {
    name: 'Micky',
    dob: '200174',
    location: 'Dunwich'
}
person.language = 'English'
person['100'] = 'one hundred'
person['2'] = 'two'

console.log(person)
for (let key in person) {
    console.log(person[key])
}

const a1 = { name: "Alice", averageTime10KmMins: 58.3 };
const a2 = { name: "Dave", averageTime10KmMins: 53.2 };
const a3 = { name: "Micky", averageTime10KmMins: 64.5 };
const a4 = { name: "Judy", averageTime10KmMins: 66.0 };

/* Challenge */

/* 1. Create a map object "athletes" to store the athletes. */
const athelets = new Map();

function addAthlete(athlete, time) {
  /* 2. This function should add athletes to the "athletes" map. */
  athelets.set(athlete, time);
}

function getSummary() {
  /* This function should make the following appear in the console */

  //Alice's average time is 58.3 but today Alice achieved 57.3
  //Dave's average time is 53.2 but today Dave achieved 61.1
  //Micky's average time is 64.5 but today Micky achieved 59.9
  //Judy's average time is 66 but today Judy achieved 61.6
  athelets.forEach((time, athlete) => {
    console.log(
      `${athlete.name}'s average time is ${athlete.averageTime10KmMins} but today ${athlete.name} achieved ${time}`,
    );
  });
}

addAthlete(a1, 57.3);
addAthlete(a2, 61.1);
addAthlete(a3, 59.9);
addAthlete(a4, 61.6);
console.log(athelets);

getSummary();

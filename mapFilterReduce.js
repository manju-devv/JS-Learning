const users = [
  { fname: "thor", lname: "odinson", age: 40 },
  { fname: "tony", lname: "stark", age: 26 },
  { fname: "hulk", lname: "smash", age: 56 },
  { fname: "peter", lname: "parker", age: 26 },
];



const data = users.map(item=>`${item.fname} ${item.lname}`)
console.log(data);


const countNoOfPeopleWithAge = users.reduce((acc,curr) => {
    if(acc[curr.age]){
        acc[curr.age] ++;
    } else {
        acc[curr.age] = 1
    }
    return acc;
},{})

console.log(countNoOfPeopleWithAge);


const filterPeople = users.filter(item => item.age < 40).map(x => x.fname);
console.log(filterPeople);
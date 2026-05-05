// call() - The call() method is a built-in JavaScript function that allows you 
// to invoke a function with a specified 'this' context and 
// individual arguments. It is a powerful tool for controlling the execution 
// context of a function and can be used to borrow methods from other objects.


const politician = {
    name: "Tony",
    age: 46,
};


function disPlayPolitician(situatuion){
    console.log(`${this.name} is ${this.age} years old and committied ${situatuion}`);
}

disPlayPolitician.call(politician,'corruption and black money and is now in jail.')
// getters and setters are special methods that allow you to define how to access and modify the properties of an object. 
// They provide a way to control the behavior of property access and assignment, allowing you to add custom logic when getting or setting a property value.



class Person {
    constructor(name, age) {
        this._name = name; // Using an underscore to indicate a private property
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        if (typeof newName === 'string' && newName.trim() !== '') {
            this._name = newName;
        } else {
            console.error('Invalid name');
        }
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this._age = newAge;
        } else {
            console.error('Invalid age');
        }
    }
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Alice
console.log(person1.age); // 30

person1.name = "Bob"; // Valid name change
person1.age = 35; // Valid age change

console.log(person1.name);





class Holiday {
    #destination;
    constructor(dest,price) {
        this.#destination = dest;
        this.price = price;
    }
    get destination(){
        return this.#destination
    }
    set destination(newDest){
        if(typeof newDest === 'string' && newDest.trim() !== ''){
            this.#destination = newDest;
        } else {
            throw new Error("invalid destination");
        }
    }
}



const japan = new Holiday("Japan", 5000);
console.log(japan.destination);

japan.destination = "Thailand";
console.log(japan.destination);

// Multiple inheritance means:

// Child inherits from MULTIPLE parents

// Example (NOT supported in JS directly):

// Class C extends A, B ❌ (not allowed)




class Gamer {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  incrementScore() {
    this.score++;
  }
}

const dave = new Gamer("Dave", 0);
const sarah = new Gamer("Sarah", 0);
dave.incrementScore();
console.log(dave);
console.log(sarah);

// inheritance

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }
}

// Child class
class Student extends Person {
  constructor(name, course) {
    super(name); // calls parent constructor
    this.course = course;
  }

  study() {
    return `${this.name} is studying ${this.course}`;
  }
}

const s1 = new Student("Manju", "MERN");

console.log(s1.greet()); // from Person
console.log(s1.study()); // from Student

//multi level inheritance

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }
}

class Student extends Person {
  study() {
    return `${this.name} is studying`;
  }
}

class GraduateStudent extends Student {
  research() {
    return `${this.name} is doing research`;
  }
}

const g1 = new GraduateStudent("Manju");

console.log(g1.greet()); // from Person
console.log(g1.study()); // from Student
console.log(g1.research()); // from GraduateStudent






//alertnative way to multiple inheritance using mixins

// A mixin is a way to add properties or methods from one object into another object or class, without using inheritance.

// 👉 In simple words:
// Mixin = copy features into a class

const canEat = {
  eat() {
    return `${this.name} is eating`;
  }
};

const canWalk = {
  walk() {
    return `${this.name} is walking`;
  }
};

function mixin(target, ...sources) {
  Object.assign(target.prototype, ...sources);
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

mixin(Person, canEat, canWalk);

const p1 = new Person("Manju");
console.log(p1.eat());
console.log(p1.walk());




//another

const canStudy = {
  study() {
    return "Studying";
  }
};

const canPlay = {
  play() {
    return "Playing";
  }
};

class Person {}

Object.assign(Person.prototype, canStudy, canPlay);

const p = new Person();
console.log(p.study());
console.log(p.play());




// using both properties and methods


const canDrive = {
  hasLicense: true,   

  drive() {          
    if (this.hasLicense) {
      return `${this.name} is driving 🚗`;
    } else {
      return `${this.name} cannot drive ❌`;
    }
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// apply mixin
Object.assign(User.prototype, canDrive);

const u1 = new User("Manju");

console.log(u1.hasLicense); // true
console.log(u1.drive());    // Manju is driving 🚗




// const canDrive = {
//   drive() {
//     return `${this.name} is driving`;
//   }
// };

// class User {
//   constructor(name) {
//     this.name = name;
//     this.hasLicense = true;
//   }
// }

// Object.assign(User.prototype, canDrive);
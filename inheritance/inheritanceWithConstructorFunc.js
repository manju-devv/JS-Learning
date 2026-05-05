




function Event(name, location, date){
    this.name = name;
    this.location = location;
    this.date = date;
    this.getDetails = function(){
        return `${this.name} is happening at ${this.location} on ${this.date}`;
    }
}


function Concert(name,location,date,headliner){
    Event.call(this,name,location,date); //inherits properties from Event
    this.headliner = headliner;
}


Concert.prototype = Object.create(Event.prototype); //inherits methods from Event
Concert.prototype.constructor = Concert; //sets the constructor property to Concert


const newConcert = new Concert("Rock Fest","New York","2024-08-15","The Rolling Stones");

console.log(newConcert);
console.log(newConcert.getDetails());







//another example


// Parent
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, I am ${this.name}`;
};

// Child
function Student(name, course) {
  Person.call(this, name); // ✅ inherit properties
  this.course = course;
}

// ✅ inherit methods
Student.prototype = Object.create(Person.prototype);

// (optional but good practice)
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  return `${this.name} is studying ${this.course}`;
};

const s1 = new Student("Manju", "MERN");

console.log(s1.greet()); // from Person[parent]
console.log(s1.study()); // from Student

console.log(s1)
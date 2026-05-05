




function Event(name, location, date){
    this.name = name;
    this.location = location;
    this.date = date;
}

Event.prototype.getDetails = function(){
    return `${this.name} is happening at ${this.location} on ${this.date}`;
}

function Concert(name,location,date,headliner){
    Event.call(this,name,location,date); //inherits properties from Event
    this.headliner = headliner;
}

Concert.prototype = Object.create(Event.prototype); //inherits methods from Event
Concert.prototype.constructor = Concert; //sets the constructor property to Concert


Concert.prototype.getDetails = function(){
    const eveDetails = Event.prototype.getDetails.call(this); //calls the parent method to get event details
    return `${eveDetails} Headliner : ${this.headliner}`;
}


const newConcert = new Concert("Rock Fest","New York","2024-08-15","Cancelled");

console.log(newConcert);
console.log(newConcert.getDetails());
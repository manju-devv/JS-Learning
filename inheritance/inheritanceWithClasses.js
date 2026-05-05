


class Event {
    constructor(name, location, date){
        this.name = name;
        this.location = location;
        this.date = date;
    }
    getDetails(){
        return `${this.name} is happening at ${this.location} on ${this.date}`;
    }
}


// const newEvent = new Event("Tech Conference","San Francisco","2024-09-10");
// console.log(newEvent.getDetails());


class Concert extends Event {
    constructor(name, location, date, by) {
        super(name, location, date); // Call the parent class constructor
        this.by = by;
    }
    getDetails() {
        const eventDetails = super.getDetails();
        return `${eventDetails}. The concert is by "${this.by}"`;
    }
}


const newConcert = new Concert("Rock Fest","New York","2024-08-15","The Rolling Stones");
console.log(newConcert.getDetails());











class Event1 {
    constructor(name, location, date) {
        this.name = name
        this.location = location
        this.date = date
    }

    getDetails() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

/*
Challenge:
    1. Set up a class 'TennisMatch' which 
       should take in 'player1' and 'player2' as parameters. 
    2. 'TennisMatch' should inherit properties and methods 
       from 'Event'. 
    3. 'TennisMatch' should have its own method 'getDetails'
       which calls Event's getDetails method to get the 
       basic details of the event. It should return this string:
       ${eventBasics} Match: ${this.player1} vs ${this.player2}
    4. Uncomment my code below to create a new instance of TennisMatch
       and call the getDetails method. 
       Hint.md for help 🛟
*/

class TennisMatch extends Event1 {
    constructor(name, location, date, p1, p2){
        super(name, location, date);
        this.p1 = p1;
        this.p2 = p2;
    }
    getDetails(){
        const eventDetails = super.getDetails();
        return `${eventDetails}, Match: ${this.p1} vs ${this.p2}`
    }
}

const tennisMatch = new TennisMatch("Grand Slam Final", "Wimbledon", "2025-07-15", "J Bloggs", "B Doe")
console.log(tennisMatch.getDetails())
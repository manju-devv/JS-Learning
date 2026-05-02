// construcor function for creating custom objects in JavaScript. It allows you to define a blueprint for 
// creating multiple objects with similar properties and methods.
// blueprint for creating objects


function Gamer(name, score) {
  this.name = name;
  this.score = score;
  this.incrementScore = function () {
    this.score++;
  };
}

Gamer.prototype.details = function(){
    console.log(`Gamer: ${this.name}, Score: ${this.score}`);
}


const alice = new Gamer("Alice", 10);
console.log(alice); 
alice.incrementScore();
console.log(alice);
alice.details();




// challenge


/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
	- 'collectedItemsArr' should hold an array of items. 
       Initialise it to an empty array.
3. Create an 'addItem' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItem method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/
 
 function Character(name){
    this.name = name;
    this.collectedArrItems = []
 }
 
 Character.prototype.addItem = function(item){
    this.collectedArrItems.push(item);
    console.log(`${this.name} now has ${this.collectedArrItems.join(",")}`)
 }
 
 
 const wizard = new Character("wizard");
 const archer = new Character("archer");
 
 console.log(wizard);
 console.log(archer);
 wizard.addItem("wand");
 wizard.addItem("portion");
 archer.addItem("map");
  console.log(wizard);
 console.log(archer);
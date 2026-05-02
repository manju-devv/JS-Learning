// factory function
// A factory function is a function that returns a new object. 
// It can be used to create multiple instances of an object with the same properties and methods.



function gamer(name,score) {
    return {
        name,
        score,
        incrementScore(){
            this.score++;
        }
    }
}



const alince = gamer("Alice", 10);
console.log(alince); 
alince.incrementScore();
console.log(alince);
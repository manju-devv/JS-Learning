// short circuiting with OR operator (||):
// In JavaScript, the OR operator (||) is a logical operator that returns true if at least one of the operands is true. 
// It also has a short-circuiting behavior, which means that if the first operand is true, 
// the second operand will not be evaluated.

//it stops evaluating as soon as it finds a true value.

const jobHunter = {
    name: "John",
    // jobSearchArea: "New York"
};


const workLocation = jobHunter.jobSearchArea || "WorldWide";
console.log(`${jobHunter.name} is looking for a job in ${workLocation}.`); 



const jobHunter1 = {
    name: 'Tom Chant',
    username: 'TChant44',
    workLocation: 'Europe',
    }
    
/*
Challenge:
1. Make it so that if the jobHunter object does not have 
   a name property, the username is used instead.
*/
    
// Complete this line of code 👇
const jobHunterName = jobHunter1.name || jobHunter1.username || "Unknown User"
 
console.log(`Hey ${jobHunterName}!`)
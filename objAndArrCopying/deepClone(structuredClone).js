// structured clone: -- structuredClone() is a built-in function in JavaScript that creates a deep copy of a given value, 
// including objects, arrays, and other complex data structures.



const details = {
    name: "manju",
    languages: ["html", "css", "javascript","react","express"],
    location: {
        city: "banglore",
        address: "no 123, abc street, banglore"
    }
};


const detailsCopy = structuredClone(details);

detailsCopy.languages[0] = "python";
detailsCopy.location.city = "mumbai";

console.log(details);
console.log(detailsCopy);
// currying is a functional programming technique where a function with multiple arguments is 
// transformed into a sequence of functions that each take a single argument.




/*
Challenge:
    1. Curry this function!
    Set up three partially applied functions called 'infoLogger', 
    'warnLogger', and 'errorLogger'. 
    The partially applied functions should have their level ('info', 
    'warn', 'error'). 
    You should be able to call these functions and pass in a message.
    E.g. console.log(warnLogger("Low disk space")) would log: "[WARN] Low disk space".
    🛟 hint.md for help.
*/
const logMessage = level => msg => `[${level.toUpperCase()}] ${msg}`

// Log messages with "info" level

const infoLogger = logMessage("info");
const warnLogger = logMessage("warn");
const errorLogger = logMessage("error");

console.log(infoLogger("Application started"));
console.log(infoLogger("User logged in"));
console.log(warnLogger("Low disk space"));
console.log(warnLogger("High memory usage"));
console.log(errorLogger("Unhandled exception"));
console.log(errorLogger("Failed to save file"));




function calculateVolume(length){
    return function(width){
        return function(height){
            return length * width * height;
        }
    }
}


const vol = calculateVolume(2)(3)(4);

console.log(vol); // Output: 24



// or 

const calculateVolume2 = length => width => height => length * width * height;

const vol2 = calculateVolume2(2)(3)(4);
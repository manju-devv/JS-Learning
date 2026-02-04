//Higher order functions
//a function which takes another function as an argument or returns a func from it.


const data = [3,1,2,4];

const radiusFormula = (radius) => {
    return Math.PI * radius * radius
};

const circumferenceFormula = (radius) => {
    return 2 * Math.PI * radius;
};

const diameter = radius => {
    return 2 * radius;
};


const area = function(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    };
    return output
};


console.log(area(data,radiusFormula));
console.log(area(data,circumferenceFormula));
console.log(area(data,diameter));
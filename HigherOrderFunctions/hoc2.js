
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


Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    };
    return output
};


console.log(data.map(diameter));
// console.log(calculate(data,diameter));
console.log(data.calculate(diameter));
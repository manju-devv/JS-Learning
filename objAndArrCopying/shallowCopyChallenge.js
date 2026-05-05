const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4];
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3];
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8];
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7];

function findPriceExtremes(arr) {
  /*
Challenge:
2. Find the highest number from the array 
   and store it in the const 'highest'. 
3. Find the lowest number from the array 
   and store it in the const 'lowest'. 
*/

  const highest = arr.reduce((val1, val2) => {
    return val2 > val1 ? val2 : val1;
  }, arr[0]);
  //  const lowest = arr.reduce((val1,val2) => {return val2 > val1 ? val1 : val2},arr[0]);
  const lowest = Math.min(...arr);
  console.log(`The highest average share price was ${highest}`);
  console.log(`The lowest average share price was ${lowest}`);
}

/*
Challenge:
1. Call this function with one array holding 
   all of the data from the 4 arrays above.
*/
findPriceExtremes([
  ...averageSharePriceByMonthQ1,
  ...averageSharePriceByMonthQ2,
  ...averageSharePriceByMonthQ3,
  ...averageSharePriceByMonthQ4,
]);

// Object.assign

const studentDetails = {
  firstName: "janaka",
  country: "sri lanka",
  email: "j.siri@totalinternet.com",
  hobbies: [
    ["carrom", "chess", "table tennis"],
    "cricket",
    "hockey",
    "football",
  ],
};

const studentDetailsCopy = {};

Object.assign(studentDetailsCopy, studentDetails);

studentDetailsCopy.hobbies[0][0] = "hide and seek";
console.log(studentDetailsCopy);
console.log(studentDetails);

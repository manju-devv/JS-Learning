

const countdown = (num) => {
    console.log(num);
    if(num <= 1) return;
    countdown(num - 1);
}

countdown(5)



function countUp(start, end) {
    console.log(start);
    if(start === end) return;
    countUp(start+1,end)
}

countUp(2,5);
// So calling countUp(2, 6) should log:
// 2
// 3
// 4
// 5
// 6



//recursion sum of numbers from n to 0



function sumToN(n) {
    if (n <= 0) {
        return 0;
    } else {
        return n + sumToN(n -1)
    }
}


console.log(sumToN(5))




// let sunNum = 0;
// function numbers(n){
//     sunNum += n;
//     if(n === 0) return;
//     numbers(n-1);
// }


// numbers(3);

// console.log(sunNum);





let str = 'SCRIMBA'

function reverseStr(str) {
    // if(str === '') return ''
    if(str.length === 0) return str;
    else {
        return reverseStr(str.slice(1)) + str[0]
    }
}

console.log(reverseStr(str)) 
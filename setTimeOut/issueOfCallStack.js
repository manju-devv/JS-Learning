
//the problem here is that setTimeout ll be waiting in callBack queue until the main thread is empty
//and main thread(call stack) is only emptied after 10 seconds and then event loop sends setTimeout from
//callBack queue to call stack(main thread) so even setTimeout ended after 5sec it has to wait until the call stack is empty


console.log("start");

setTimeout(() => {
    console.log("callback executed")
},5000);

console.log("End");

const start = new Date().getTime();
console.log(start);
let end = start

while(end < start + 10000){
    end = new Date().getTime()
}
console.log("while ended")
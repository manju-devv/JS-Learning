

function handleResize(e){
    console.log("Window resized", e);
}


function throttle(func,delay){
    let timerr = null;
    return function(){
        if(!timerr){
            func.apply(this,arguments);
            timerr = setTimeout(() => {
                timerr = null;
            },delay)
        }
    }
}


const throttleTimeOut = throttle(handleResize,5000);
window.addEventListener("resize",throttleTimeOut);







// function handleResize(e){
//     console.log('resize happened on event: ' + e)
// }

// function throttle(func, delay) {
//     let throttleTimeout = null
//     return (...args)=> {
//        if(!throttleTimeout) {
//            func(...args)
//            throttleTimeout = setTimeout(()=> {
//                throttleTimeout = null
//            }, delay)
//        } 
//     }
// /*
// Challenge:
// 1. Recreate the logic using an arrow function. 
//    🤔 What is the best way to pass arguments remembering 
//    that ideally this throttle function is reusable?
//    🛟 hint.md for help! 
// */
// }
// const throttledHandleResize = throttle(handleResize, 1000)
// window.addEventListener('resize', throttledHandleResize)
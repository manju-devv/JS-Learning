// function x(){
//     for(var i = 1;i <= 5; i++){
//         setTimeout(() => {
//             console.log(i)
//         },i*1000)
//     }
//     console.log("Hello World! Learning SetTimeout Function")
// }

// x();

// the above code if we want to do using var we need to use IIFE(Immediately Invoked Function Expression) to create a new scope for each iteration like below

// function x(){
//     for(var i = 1;i <= 5; i++){
//         (function(i){
//             setTimeout(() => {
//                 console.log(i)
//             },i*1000)
//         })(i)
//     }
//     console.log("Hello World! Learning SetTimeout Function with IIFE")
// }

// or
function z(){
    for(var i = 1;i<=5;i++){
        function closureee(j){
            setTimeout(() => {
                console.log(j);
            },i*1000);
        }
        closureee(i);
    }
}
z();

//using var it prints 6 five times after 1 to 5 seconds respectively because var is function scoped. and it points to 
//the same memory location whose value is 6 after the loop ends. as it forms closure with the outer function x().



function y(){
    for(let i = 1;i <= 5; i++){
        setTimeout(() => {
            console.log(i)
        },i*1000)
    }
    console.log("Hello World! Learning SetTimeout Function with let")
}

y();
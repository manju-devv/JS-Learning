
// setTimeout(() => {
//     console.log("setTimeout called after 5 seconds");
// },5000);


// function x(cb){
//     console.log("inner function called which is accepting parameter ");
//     cb();
// }

// x(function y(){
//     console.log("outer function executed passed as CB!!");
// });


function executeData(){
    let count = 0;
    document.getElementById("counter").addEventListener("click", function abc(){
        document.getElementById("countDisplay").innerText = `Count: ${++count}`;
        console.log("Button clicked", count);
    });
}


executeData();
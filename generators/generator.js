// generator: 


const slidesArr = [
    "1. Intro Slide", 
    "2. The current situation", 
    // "malfunction",
    "3. Setbacks", 
    "4. Plans", 
    "5. A Positive Future"
]


function* generatorSlide(arr){
    for(let item of slidesArr){
        // if (item === 'malfunction') //it ll break and come out
        //     return;
        // else 
        yield item;
    }
}

const generate = generatorSlide(slidesArr);

document.getElementById("butt").addEventListener("click",() => {
    const slide = generate.next();
    if(!slide.done) console.log(slide.value)
    else console.log("you have reached end of slide!!");
});



// function* greet() {
//     console.log("Hi");
//     yield;

//     console.log("How are you?");
//     yield;

//     console.log("Bye");
// }

// const g = greet();

// g.next(); // Hi
// g.next(); // How are you?
// g.next(); // Bye






// /*
// Challenge:
//     1. Create a generator that yields a random hex code on demand.
//     - You might need to research how you can do something infinitely 
//       inside a generator.
//     - See if you can work out how to generate a random hex code.
//     🛟 hint.md for help
// */

// function* colorGenerator() {
//     let color = '#'
//     for (let i = 0; i < 6; i++) {
//         const ranNum = Math.floor(Math.random() * 16)
//         color += '0123456789ABCDEF'[ranNum]
//     }
//     yield color
// } 

// document.getElementById('nextColorButton').addEventListener('click', () => {
//     const generatedColor = colorGenerator()
//     const result = generatedColor.next()
//     const color = result.value
// /*
// Challenge:
//     2. When the "Next Color" button is clicked, update 
//        the textContent and backgroundColor attributes below.
// */
//         document.getElementById('colorText').textContent = color
//         document.getElementById('colorDisplay').style.backgroundColor = color
// })
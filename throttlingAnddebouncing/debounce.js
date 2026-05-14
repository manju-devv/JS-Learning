function debounce(func, delay) {
    let timer;
    return function(e){
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(e);
            nameData.innerText = e.target.value;
        },delay)
    }
}
 
function handleInput(e) {
    console.log('Input detected from element with id ' + e.target.value)
}

document.getElementById('name-input').addEventListener('input', debounce(handleInput, 2000));
const nameData = document.getElementById("place");


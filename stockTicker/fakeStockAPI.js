


export function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        // price: /* return a random number between 0 and 3 to two decimal places */, 
        price: (Math.random()*4).toFixed(2),
        // time: /* return a timestamp in this format: hh/mm/ss */,
        // time: new Date().toTimeString().split(' ')[0],
        time: new Date().toLocaleTimeString(),
    }
}
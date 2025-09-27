'use strict'
// Write a JavaScript program to sum 3 and 5 multiples under 1000.

const multiplesSum = () => {
    let sum = 0; 
    for(let i = 0; i < 1000; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}
console.log(multiplesSum());
'use strict'
// Write a JavaScript function to compute the factors of a positive integer.

function factors(num){
    const factors = [];
    for(let i = 0; i <= num; i++){
        if(num % i === 0){
            factors.push(i);
        }
    }
    return factors;
}

console.log(factors(15));
console.log(factors(16));
console.log(factors(17));
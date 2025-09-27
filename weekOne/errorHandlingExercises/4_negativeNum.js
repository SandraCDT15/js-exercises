'use strict'
// Write a JavaScript function that takes a number as a 
// parameter and throws a custom 'Error' if the number is negative.

function isPositive(num){
    if(num < 0){
        throw new Error('Error: Negative numbers not allowed');
    }
    return num;
}

console.log(isPositive(1));
console.log(isPositive(-1));
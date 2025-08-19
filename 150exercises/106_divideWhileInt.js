'use strict'
// Write a JavaScript program to divide an integer by another 
// integer as long as the result is an integer and return the result.

const keepDividin = (num, div) => {
    while(num % div === 0){
        num = Math.floor(num / div);
    }
    return num;
}

console.log(keepDividin(-12, 2));
console.log(keepDividin(13, 2));
console.log(keepDividin(13, 1));
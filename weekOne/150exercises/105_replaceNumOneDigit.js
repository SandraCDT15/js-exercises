'use strict'
// Write a JavaScript program to find the number of times 
// to replace a given number with the sum of its digits. 
// This is until it converts to a single-digit number

function reduceNum(num){
    let digit;
    let count = 0;
    while(num >= 10){
        digit = 0;
        while(num){
            digit += num % 10;
            num = Math.floor(num / 10);
        }
        count++;
        num = digit;
    }
    return count;
}

console.log(reduceNum(123));
console.log(reduceNum(156));
console.log(reduceNum(8888));
console.log(reduceNum(1999999999));

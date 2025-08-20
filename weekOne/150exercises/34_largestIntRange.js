'use strict'
// The JavaScript program finds the largest number between two given positive integers, ensuring both numbers are within the range of 40 to 60 inclusive.

function findLargest(a, b){
    if(a >= 40 && a <= 60 && b >= 40 && b <= 60) return a > b ? a : b;
    return 'Numbers don´t fit in range';
}

console.log(findLargest(45, 60));
console.log(findLargest(25, 60));
console.log(findLargest(45, 80));
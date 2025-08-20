'use strict'
// This JavaScript program takes three integers as input and determines the largest among them.

function findLargest(a, b, c){
    if(a > b && b > c) return a;
    else if(b > a && a > c) return b;
    else return c;
}

console.log(findLargest(1, 0, 1));
console.log(findLargest(0, -10, -20));
console.log(findLargest(2, 4, 1));
console.log(findLargest(1, 2, 3));

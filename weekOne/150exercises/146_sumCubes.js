'use strict'
// Write a JavaScript program to compute the sum of 
// cubes of all integers from 1 to a given integer.

const sumCubes = n => {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += Math.pow(i, 3);
    }
    return sum;
}

console.log(sumCubes(3));
console.log(sumCubes(4));
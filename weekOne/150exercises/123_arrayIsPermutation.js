'use strict'
// Write a JavaScript program to find out if the members of a given 
// array of integers are a permutation of numbers from 1 to a given integer.

const isPermutation = (arr, num) => {
    for(let i = 1; i <= num; i++){
        if(!arr.includes(i)) return false;
    }
    return true;
}

console.log(isPermutation([1, 2, 3, 4, 5], 5));
console.log(isPermutation([1, 2, 3, 5], 5));

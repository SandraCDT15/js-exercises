'use strict'
// Write a JavaScript program to find the number of sorted 
// pairs formed by arrays of integers. This is such that 
// one element in the pair is divisible by the other one.

function countPairs(arr){
    let count = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
                count++;
            }
        }
    }
    return count;
}

console.log(countPairs([1, 2, 3]));
console.log(countPairs([2, 4, 6]));
console.log(countPairs([2, 4, 16]));
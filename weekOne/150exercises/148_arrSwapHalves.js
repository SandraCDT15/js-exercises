'use strict'
// Write a JavaScript program to swap two halves
//  of a given array of integers of even length.

const swapHalves = arr => {
    for(let i = 0; i < arr.length / 2; i++){
        for(let j = arr.length - 1; j >= arr.length / 2; j--){
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr;
}

console.log(swapHalves([1, 2, 3, 4, 5, 6]));
console.log(swapHalves([6, 5, 4, 3, 2, 1]));
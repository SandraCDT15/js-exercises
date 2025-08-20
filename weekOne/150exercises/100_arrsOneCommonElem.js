'use strict'
// Write a JavaScript program to check if there is at least 
// one element in two given sorted arrays of integers.

const commonEl = (arr1, arr2) => {
    let common = false;
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1.length; j++){

            if(arr1[i] === arr2[j]) common = true;
        }
    }
    return common;
}

console.log(commonEl([1, 2, 3], [3, 4, 5]));
console.log(commonEl([1, 2, 3], [6, 4, 5]));
console.log(commonEl([1, 2, 6, 4, 0], [3, 4, 5, 8, 9]));
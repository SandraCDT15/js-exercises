'use strict'
// Write a JavaScript program to create an array of prefix sums of the given array.

const prefixSum = arr => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr[i] = 0;

        for(let j = i; j >= 0; j--){
            newArr[i] += arr[j];
        }
    }
    return newArr;
}

console.log(prefixSum([1, 2, 3, 4, 5]));
console.log(prefixSum([1, 2, -3, 4, 5]));
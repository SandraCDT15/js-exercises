'use strict'
// Write a JavaScript program to divide a given array of positive integers into two parts. 
// First element belongs to the first part, second element belongs to the second part, and 
// third element belongs to the first part and so on. Now compute the sum of two parts and
//  store it in an array of size two.

function splitSum(arr){
    let result = [0, 0];
    for(let i = 0; i < arr.length; i++){
        i % 2 === 0 ? result[0] += arr[i] : result[1] += arr[i];
    }
    return result;
}

console.log(splitSum([1, 3, 6, 2, 5, 10]));
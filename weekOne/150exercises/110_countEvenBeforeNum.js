'use strict'
// Write a JavaScript program to find the number of even 
// values in sequence before the first occurrence of a given number.

const countEvens = (arr, num) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num) break;
        if(arr[i] % 2 === 0) count++;

    }
    return count;
}

console.log(countEvens([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(countEvens([1, 3, 5, 6, 7, 8], 6));
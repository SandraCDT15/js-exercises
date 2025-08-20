'use strict'
// Write a JavaScript program to find two elements of an array 
// such that their absolute difference is not larger than a given integer.
// However, it is as close as possible to the integer.

function pairClosesDiff(arr, n){
    let diff = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length; j++){

            if(Math.abs(arr[i] - arr[j]) <= n && Math.abs(arr[i] - arr[j]) > diff) {
                diff = Math.abs(arr[i] - arr[j]);
            }
        }
    }
    return diff;
}

console.log(pairClosesDiff([12, 10, 33, 34], 10));
console.log(pairClosesDiff([12, 10, 19, 34], 10));
console.log(pairClosesDiff([12, 10, 33, 34], 24));
console.log(pairClosesDiff([12, 10, 33, 44], 40));
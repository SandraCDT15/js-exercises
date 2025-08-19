'use strict'
// Write a JavaScript program to check whether a given array of
// integers represents a strictly increasing or decreasing sequence.

function arrIncDecreasing(arr){
    function increasing(arr){
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] >= arr[i + 1]) return false;
        }
        return true;
    }
    function decreasing(arr){
        for(let i = 0; i < arr.length -1; i++){
            if(arr[i] <= arr[i + 1]) return false;
        }
        return true;
    }

    return increasing(arr) || decreasing(arr);
}

console.log(arrIncDecreasing([1, 2, 3]));
console.log(arrIncDecreasing([1, 0, 3]));
console.log(arrIncDecreasing([3, 2, 1]));
console.log(arrIncDecreasing([1, 1, 3]));
console.log(arrIncDecreasing([3, 3, 1]));
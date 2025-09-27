'use strict'
// Write a JavaScript function to get all possible subsets
//  with a fixed length (for example 2) combinations in an array.

function getSubsets(arr, n){
    const result = [];

    for(let i = 0; i < arr.length; i++){
        const currentSet = [];
        for(let j = 0; j < n; j++){
            currentSet.push(i + j);
        }
        result.push(currentSet);
    }
    return result;
}

console.log(getSubsets([1, 2, 3], 2));
console.log(getSubsets([1, 2, 3, 4], 2));
console.log(getSubsets([1, 2, 3, 4, 5, 6], 3));
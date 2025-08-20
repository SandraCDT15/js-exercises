'use strict'
// Write a JavaScript program to find the same number of elements in both arrays.

const sameElements = (arr1, arr2) => {
    let count = 0;
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1.length; j++){
            if(arr1[i] === arr2[j]) count++;
        }
    }
    return count;
}

console.log(sameElements([1, 2, 3, 4], [1, 2, 3, 4])); 
console.log(sameElements([1, 2, 3, 4], [1, 2, 3, 5])); 
console.log(sameElements([1, 2, 3, 4], [11, 22, 33, 44]));
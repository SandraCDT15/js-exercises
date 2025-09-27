'use strict'
// The program extracts the middle elements from two arrays, each with a length of 3, and creates a new array containing these middle elements.

function fusionArrs(arr1, arr2){
    const newArr = [arr1[Math.floor(arr1.length / 2)], arr2[Math.floor(arr2.length / 2)]];
    console.log(Math.ceil(arr2.length) / 2);
    return newArr;
}

console.log(fusionArrs([1, 2, 3], [1, 5, 6]));
console.log(fusionArrs([3, 3, 3], [2, 8, 0]));
console.log(fusionArrs([4, 2, 7], [2, 4, 5])) 
'use strict'
// The program compares the first and last elements of an array and sets all other elements to the larger of these two values.

function setAllLargest(arr){
    const largest = arr[0] > arr[arr.length -1] ? arr[0] : arr[arr.length - 1];
    for(let i = 0; i < arr.length; i++){
        arr[i] = largest;
    }
    return arr;
}

console.log(setAllLargest([20, 30, 40]));   
console.log(setAllLargest([-7, -9, 0])); 
console.log(setAllLargest([12, 10, 3]));    
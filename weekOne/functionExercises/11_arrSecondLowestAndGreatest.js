'use strict'
// Write a JavaScript function that takes an array of numbers
// and finds the second lowest and second greatest numbers, respectively.

const secondLowAndGreat = arr => {
    const result = [];
    arr.sort((a, b) => a - b);

    for(let i = 0; i < arr.length; i++){
        if(arr[i + 1] > arr[i]) {
            result.push(arr[i + 1]);
            break;
        }
    }
    for(let i = arr.length - 1; i > 0; i--){
        if(arr[i - 1] < arr[i]){
            result.push(arr[i - 1]);
            break;
        }
    }
    return result;
}

console.log(secondLowAndGreat([1, 2, 3, 4, 5, 6]));
console.log(secondLowAndGreat([1, 1, 2, 3, 4, 4, 5, 5, 6, 6]));
console.log(secondLowAndGreat([-1, 0, 3, 5]));
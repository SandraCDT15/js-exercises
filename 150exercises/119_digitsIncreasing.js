'use strict'
// Write a JavaScript program to check if a given integer has an increasing digit sequence.

const digitsIncreasing = num => {
    const arr = [...num + ''.split('')];

    for(let i = 0; i < arr.length - 1; i++){
        if(Number(arr[i + 1] < arr[i])) return false;
    }
    return true;
}
console.log(digitsIncreasing(1234));
console.log(digitsIncreasing(1243));
console.log(digitsIncreasing(12534));
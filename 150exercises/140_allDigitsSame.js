'use strict'
// Write a JavaScript program to check whether all the 
// digits in a given number are the same or not.

const sameDigits = num => {
    const arr = [...num + ''];

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] !== arr[i + 1]) return false;
    }
    return true;
}

console.log(sameDigits(1234));
console.log(sameDigits(1111));
console.log(sameDigits(22222222220));
console.log(sameDigits(22222222222));
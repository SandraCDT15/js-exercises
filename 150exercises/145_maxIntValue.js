'use strict'
// Write a JavaScript program to find the maximum
//  integer n such that 1 + 2 + ... + n <= a given integer.

const maxSum = num => {
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum = (i * (i + 1)) / 2;
        if(sum > num) return i - 1;
    }
}

console.log(maxSum(11));
console.log(maxSum(15));

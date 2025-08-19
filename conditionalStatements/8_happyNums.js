'use strict'
// According to Wikipedia a happy number is defined by the following process :
//  "Starting with any positive integer, replace the number by the sum of the 
// squares of its digits, and repeat the process until the number equals 1 (where 
// it will stay), or it loops endlessly in a cycle which does not include 1. 
// Those numbers for which this process ends in 1 are happy numbers, while those 
// that do not end in 1 are unhappy numbers (or sad numbers)". 
// Write a JavaScript program to find and print the first 5 happy numbers.

function happyNums(){
    const result = [];

    for (let i = 1; result.length < 5; i++) {
        let num = i;
        const seen = new Set();

        while (num !== 1 && !seen.has(num)) {
            seen.add(num);
            num = num
                .toString()
                .split('')
                .map(d => Number(d) ** 2)
                .reduce((a, b) => a + b, 0);
        }

        if (num === 1) {
            result.push(i);
        }
    }

    return result;

}

console.log(happyNums());
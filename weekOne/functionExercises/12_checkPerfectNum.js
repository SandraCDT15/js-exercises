'use strict'
// Write a JavaScript function that checks whether a number is perfect.
// Note : According to Wikipedia : In number theory, a perfect number is
//  a positive integer that is equal to the sum of its proper positive divisors,
//  that is, the sum of its positive divisors excluding the number itself (also
//  known as its aliquot sum).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

const perfectNum = num => {
    let sum = 0;
    for(let i = 0; i < num || sum > num; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    return sum === num;
}

console.log(perfectNum(6));
console.log(perfectNum(9));
console.log(perfectNum(28));
console.log(perfectNum(496));

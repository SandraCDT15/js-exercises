'use strict'
// Write a JavaScript function that accepts a number as a 
// parameter and checks whether it is prime or not.

const isPrime = num => {
    if(num === 1) return false;
    else if(num === 2) return true;
    else{
        for(let i = 2; i < num; i++){
            if(num % i === 0) return false;
        }
    }
    return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(11));
console.log(isPrime(29));

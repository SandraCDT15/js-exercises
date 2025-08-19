'use strict'
// Write a JavaScript program to find the smallest prime number strictly greater than a given number.

function smallestPrime(num){
    let count = 0;

    for(let i = num + 1; i <= num + 5; i++){
        count = 0;
        for(let j = 1; j <= num; j++){
            if(i % j === 0){
                count++;
            }
        }
        if(count <= 2) return i;
    }
}

console.log(smallestPrime(3));
console.log(smallestPrime(17));
console.log(smallestPrime(19));
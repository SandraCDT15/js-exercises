'use strict'
// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

const sortPrime = num => {
    let count;
    let arr = [];
    for(let i = 1; i <= num; i++){
        count = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                count++;
            }
        }
        if(count <= 2){
            arr.push(i);
        }
    }
    return arr;
}

console.log(sortPrime(5));
console.log(sortPrime(11));
console.log(sortPrime(19));
console.log(2 / 1);
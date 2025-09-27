'use strict'
// Write a JavaScript program to find the maximum number of a given 
// positive integer by deleting exactly one digit of the given number.

function maxInt(num){
    const min = [...num + ''].map(num => Number(num)).sort((a, b) => a -b)[0];
    return (Number((num +'').replace(min, '')));

}

console.log(maxInt(321));
console.log(maxInt(100));
console.log(maxInt(131));
console.log(maxInt(1245));
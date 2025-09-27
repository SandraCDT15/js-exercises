'use strict'
// Write a JavaScript program to find all the possible options 
// to replace the hash in a string (Consists of digits and one
// hash (#)) with a digit to produce an integer divisible by 3.

function makeStrDivisible(str){
    const arr = [...str.replace('#', ' ')];
    let result = [];

    for(let i = 0; i < 10; i++){
        arr[1] = i;
        if((arr[0] + arr[1] + arr[2]) % 3 === 0){
            result.push(arr[0] + arr[1] + arr[2] +'');
        }

    }
    return result;
}

console.log(makeStrDivisible('2#0'));
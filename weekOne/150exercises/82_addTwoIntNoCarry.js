'use strict'
// Write a JavaScript program to add two positive integers without carrying.

function sumNoCarry(a, b){
    let sum = 0;
    let mul = 1;
    while(a > 0 && b > 0){
        sum += mul * ((a + b) % 10);
        console.log((a + b) % 10 );
        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
        mul *= 10
    }
    return sum;
}

console.log(sumNoCarry(222, 911));
console.log(sumNoCarry(200, 900));
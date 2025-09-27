'use strict'
// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

function gdc(a, b){
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gdc(252, 105));
console.log(gdc(336, 360));
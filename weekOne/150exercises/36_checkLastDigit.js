'use strict'
// The program compares the last digits of three given positive integers.

function check(a, b, c){
    if(a > 0 && b > 0 && c > 0) return a % 10 === b % 10 && b % 10 === c % 10
    return false;
}

console.log(check(20, 30, 400));
console.log(check(-20, 30, 400));
console.log(check(20, -30, 44));
console.log(check(12, 22, 42));
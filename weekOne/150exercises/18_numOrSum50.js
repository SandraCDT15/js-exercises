'use strict'

const check50 = (a,b) => a === 50 || b === 50 || a + b === 50;

console.log(check50(20,30));
console.log(check50(10,30));
console.log(check50(50,30));
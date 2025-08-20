'use strict'

const checkLeap = year => year % 4 === 0 && year % 100 === 0 && year % 400 === 0;

console.log(checkLeap(2016));
console.log(checkLeap(2000));
console.log(checkLeap(1700));
console.log(checkLeap(1800));
console.log(checkLeap(100));

'use strict'

const diffWith19 = num => num > 19 ? (num - 19) * 3 : 19 - num;

console.log(diffWith19(12));
console.log(diffWith19(19));
console.log(diffWith19(22));
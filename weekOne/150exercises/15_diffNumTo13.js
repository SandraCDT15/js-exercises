'use strict'

const diff = num => num <= 13 ? 13 - num : (num - 13) * 2;

console.log(diff(32));
console.log(diff(11));
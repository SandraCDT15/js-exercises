'use strict'
// Write a JavaScript function that reverses a number

const reverseNum = num => Number((num + '').split('').reverse().join(''));

console.log(reverseNum(1234));
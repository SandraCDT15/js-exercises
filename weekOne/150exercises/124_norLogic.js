'use strict'
// Write a JavaScript program to create the NOR value of two given booleans.

const notLogic = (a, b) => !a && !b;

console.log(notLogic(false, false));
console.log(notLogic(true, false));
console.log(notLogic(false, true));
console.log(notLogic(true, true));

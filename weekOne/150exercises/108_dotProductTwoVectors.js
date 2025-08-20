'use strict'
// Write a JavaScript program to create the dot products of two given 3D vectors.

const dotProduct = (vec1, vec2) => vec1.reduce((acc, cur, i) => acc += cur * vec2[i], 0);

console.log(dotProduct([1, 2, 3], [1, 2, 3])); 
console.log(dotProduct([2, 4, 6], [2, 4, 6])); 
console.log(dotProduct([1, 1, 1], [0, 1, -1]));
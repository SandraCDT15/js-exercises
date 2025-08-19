'use strict'
// Write a JavaScript program that takes two integers and a divisor. 
// If the given divisor divides both integers, they are similar.

const checkSimilar = (num1, num2, div) => num1 % div === 0 && num2 % div === 0;

console.log(checkSimilar(10, 25, 5));
console.log(checkSimilar(10, 20, 5));
console.log(checkSimilar(10, 20, 4));
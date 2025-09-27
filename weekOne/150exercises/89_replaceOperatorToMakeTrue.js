'use strict'
// Write a JavaScript program to check whether it is possible to replace $ in a given expression
//  x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

const replaceOperand = (num1, num2, result) =>
    num1 + num2 === result ||
    num1 - num2 === result ||
    num1 * num2 === result ||
    num1 / num2 === result;

console.log(replaceOperand(10, 25, 35));
console.log(replaceOperand(10, 25, 250));
console.log(replaceOperand(30, 25, 5));
console.log(replaceOperand(100, 25, 4));
console.log(replaceOperand(100, 25, 25));
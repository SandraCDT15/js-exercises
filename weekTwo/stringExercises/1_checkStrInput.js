"use strict";
// Write a JavaScript function to check whether an 'input' is a string or not.

const checkInput = (str) => typeof str === "string";

console.log(checkInput("hola"));
console.log(checkInput([1, 2, 3]));
console.log(checkInput(false));

'use strict'
// Write a JavaScript function that accepts an argument and return the typeof.

const getType = arg => typeof arg;

console.log(getType("Hello")); 
console.log(getType(42));      
console.log(getType(true));    
console.log(getType(null));    
console.log(getType(undefined));
console.log(getType([]));
console.log(getType({}));   
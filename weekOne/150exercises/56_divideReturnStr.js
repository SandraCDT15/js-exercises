'use strict'
// This JavaScript program divides two positive numbers and formats the result with commas for thousands, millions, etc. 

const divide = (a, b) => b === 0 ? 'Can´t divide by 0' : (a/b).toLocaleString();

console.log(divide(1000000, 107));
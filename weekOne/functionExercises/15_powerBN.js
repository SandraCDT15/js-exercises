'use strict'
// Write a JavaScript function to compute the value of bn where n is the 
// exponent and b is the base. Accept b and n from the user and display the results.

const calculateExp = (b, n) => Math.pow(b, n);

const inputB = Number(prompt('Enter the base'));
const inputN = Number(prompt('Enter the exponent'));

if(!isNaN(inputB) && !isNaN(inputN)){
    const result = calculateExp(inputB, inputN);
    alert(`The result is ${result}`);
} else {
    alert('Input must be numbers');
}
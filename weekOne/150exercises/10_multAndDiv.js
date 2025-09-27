'use strict'

const num1 = Number(prompt('Input first number'));
const num2 = Number(prompt('Input second number'));
const choice = Number(prompt('1.-Multiply \n2.-Divide'));

switch(choice){
    case 1: alert(`Result: ${num1 * num2}`);
    break;
    case 2: alert(`Result ${num1/num2}`);
    break;
    default: alert('Invalid option');
}
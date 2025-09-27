'use strict'

const varName = prompt('Enter the variable name');
const varValue = prompt('Enter the value for the variable');

window[varName] = varValue;

alert(`Variable ${varName} created with value: ${window[varName]}`);
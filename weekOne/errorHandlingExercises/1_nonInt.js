'use strict'
// Write a JavaScript function that takes a number as a
//  parameter and throws a custom 'Error' if the number is not an integer.

function validInt(num){
    if(!Number.isInteger(num)){
        throw new Error ('Invalid number')
    }
    return 'Number is valid';
}

console.log(validInt(12));
console.log(validInt(1.2));

// try {
//     validInt(12);
//     validInt(1.1);
// } catch (error){
//     console.log(error.message);
// }
'use strict'
// Write a JavaScript function that takes a string as a 
// parameter and throws a custom 'Error' if the string is empty.

function isEmpty(str){
    if(str.length === 0){
        throw new Error('The string is empty');
    }
}

try {
    isEmpty('Hola');
    isEmpty('');
} catch(error) {
    console.log('Error', error.message);
}
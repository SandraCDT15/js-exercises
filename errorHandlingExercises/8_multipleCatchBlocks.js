'use strict'
// Write a JavaScript program that shows the use of multiple
//  catch blocks to handle different types of errors separately.

function multipleErrors(num){
    if(!Number.isInteger(num)){
        throw new TypeError('Number must be an integer');
    }

    if(num < 0){
        throw new RangeError('Number must be positive');
    }

    if(value === 25){
        throw new Error('Number can´t specifically be 25');
    }
    return num;
}

try {
    // multipleErrors(1.1);
    // multipleErrors(-1);
    // multipleErrors(25);
    multipleErrors([]);
    multipleErrors(10);
} catch(error) {
    if(error instanceof TypeError){
        console.log(`Caught TypeError: ${error.message}`);
    } else if(error instanceof RangeError) {
        console.log(`Caught RangeError ${error.message}`);
    } else if(error instanceof Error){
        console.log(`Caught general Error ${error.message}`);
    } else{
        console.log(`Caught unknown error ${error}`);
    }
}
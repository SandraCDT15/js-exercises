'use strict'
// Write a JavaScript program that uses a try-catch 
// block to catch and handle a 'ReferenceError' when
//  accessing an undefined variable.

function accessVar(num){
    function createVar(num){
        const otherNum = num;
        return otherNum;
    }

    try {
        console.log(otherNum);
    } catch (error){
        if(error instanceof ReferenceError){
            console.log(`ReferenceError: ${error.message}`);
        } else {
            console.log(`Error: ${error.message}`);
        }
    }
}

accessVar(3);
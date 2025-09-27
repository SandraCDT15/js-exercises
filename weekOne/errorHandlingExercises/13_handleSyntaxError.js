'use strict'
// Write a JavaScript program that uses a try-catch block to 
// catch and handle a 'SyntaxError' when parsing an invalid JSON string.

function parseJSON(jsonStr){
    try {
        const parsedJSON = JSON.parse(jsonStr);

        console.log(`Parsed data: ${parsedJSON}`);
    } catch (error){
        if(error instanceof SyntaxError){
            console.log(`SyntaxError: ${error.message}`);
        } else {
            console.log(`Error: ${error.message}`);
        }
    }
}
parseJSON('{"name": "Rowan Octave", "age": 30}');
parseJSON('{"name": "Rowan Octave", "age": 30,}');
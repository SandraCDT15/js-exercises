'use strict'
// Write a JavaScript program to construct the following pattern, using a nested for loop.

function pattern(){
    let pattern = '';
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            pattern += '*';
            console.log(pattern);
        }
        pattern = '';
    }
}

pattern();
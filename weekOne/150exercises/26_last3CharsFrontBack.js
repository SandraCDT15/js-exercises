'use strict'
// This JavaScript program creates a new string from a given string by taking its last three characters and appending them both at the front and back.

function addChars(str){
    if(str.length >= 3){
        return str.slice(-3) + str + str.slice(-3);
    }
    return false;
}
console.log(addChars('abc'));
console.log(addChars('ab'));
console.log(addChars('Swift'));
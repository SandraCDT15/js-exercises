'use strict'
// Write a JavaScript program to change the 
// capitalization of all letters in a given string.

const changeCap = str => {
    let result = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            result += str[i].toLowerCase();
        }
        else{
            result += str[i].toUpperCase();
        }
    }
    return result;
}

console.log(changeCap('w3resource'));
console.log(changeCap('Germany'));
'use strict'
// This JavaScript program capitalizes the first letter of each word in a given string.

function capitalizeLetter(str){
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

console.log(capitalizeLetter('Write a JavaScript program to capitalize the first letter of each word of a given string'));
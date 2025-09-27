'use strict'
// This JavaScript program scans a given string to determine if the characters 'a' and 'b' are separated by exactly three characters.

function abSeparated(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a') return str[i + 4] === 'b';
        else if(str[i] === 'b') return str[i + 4] === 'a';
    }
}

console.log(abSeparated('Chainsbreak'));
console.log(abSeparated('pane borrowed'));
console.log(abSeparated('abCheck'));
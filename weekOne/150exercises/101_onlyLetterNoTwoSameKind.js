'use strict'
// Write a JavaScript program to check whether a given string 
// contains only Latin letters and no two uppercase and no
// two lowercase letters are in adjacent positions.

function checkLetters(str){
    for(let i = 0; i < str.length - 1; i++){
        if(!((str[i] >= 'A' && str[i] <= 'Z') && (str[i + 1] >= 'a' && str[i + 1] <= 'z')
        || ((str[i] >= 'a' && str[i] <= 'z') && (str[i + 1] >= 'A' && str[i + 1] <= 'Z')))){
            return false;
    }
    }
    return true;
}

console.log(checkLetters('Abc'));
console.log(checkLetters('AbCdDD'));
console.log(checkLetters('AbCdFg'));
console.log(checkLetters('AbC0'));
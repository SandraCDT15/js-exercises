'use strict'
// This JavaScript program creates a new string from a given string by swapping the positions of the first and last characters.

function swap(str){
    if(str.length <= 1){
        return str;
    }        
    return str[str.length -1] + str.slice(1, -1) + str[0];
}
console.log(swap('a'));
console.log(swap('ab'));
console.log(swap('abc'));
console.log(swap('Sandra'));
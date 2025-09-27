'use strict'
// Write a JavaScript function to find the first not repeated character.

const nonRepeated = str =>{
    for(let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            return str[i];
                }
    }
}

console.log(nonRepeated('abacddbec'));
console.log(nonRepeated('aabcde'));

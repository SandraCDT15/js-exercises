'use strict'
// Write a JavaScript function to extract unique characters from a string.

function uniqueChars(str){
    const unique = [...new Set([...str])].join('');
    return unique;
}

console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"));
console.log(uniqueChars('Sandra'));


// function uniqueChars(str){
//     const result = [];
//     for(let i = 0; i < str.length; i++){
//         if(!result.includes(str[i])){
//             result.push(str[i]);
//         }
//     }
//     return result.join('');
// }
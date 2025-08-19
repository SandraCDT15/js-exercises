'use strict'
// Write a JavaScript function to get the number of occurrences of each letter in a specified string.

const countLetters = str => {
    const count = {};

    for(let i = 0; i < str.length; i++){
        count[str[i]] = (count[str[i]] || 0) + 1; 
    }
    return count;
}

console.log(countLetters('Sandra'));
console.log(countLetters('Citlali'));
console.log(countLetters('hello world this is a message'));
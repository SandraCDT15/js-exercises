'use strict'
// Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word into upper case.

const capitalization = str => {
    const arr = str.split(' ');
    const newStr = arr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    return newStr;
}

console.log(capitalization('the quick brown fox'));
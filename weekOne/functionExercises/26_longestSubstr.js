'use strict'
// Write a JavaScript function to find the longest substring
//  in a given string without repeating characters.

const longestSubstr = str => {
    let result = str;

    for (let i = 0; i < result.length; i++) {
        if (result.indexOf(result[i]) !== result.lastIndexOf(result[i])) {
            result = result.slice(i + 1);
            i = -1;
        }
    }
    return result;
};

console.log(longestSubstr('google.com'));
console.log(longestSubstr('example.com'));
console.log(longestSubstr('Sandra'));
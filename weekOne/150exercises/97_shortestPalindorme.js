'use strict'
// Write a JavaScript program to find the shortest possible string. 
// This can be converted into a string and converted into a palindrome 
// by adding characters to the end of it.

const shortestPalindrome = str => {
    let i = 0;
    let tempStr = str;
    while(tempStr !== [...tempStr].reverse().join('')){

        for(let j = i; j >= 0; j--){
            tempStr += str[j];
        }
        if(tempStr === [...tempStr].reverse().join('')) return tempStr;
        else {
            tempStr = str;
            i++;
        }

    }
}

console.log(shortestPalindrome('122'));
console.log(shortestPalindrome('abcddc'));
console.log(shortestPalindrome('sandra'));
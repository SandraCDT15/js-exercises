'use strict'
// Write a JavaScript function that returns the longest palindrome in a given string.

function palindromicSubs(str){
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    let longest = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substr = str.slice(i, j);
            if (isPalindrome(substr) && substr.length > longest.length) {
                longest = substr;
            }
        }
    }

    return longest;
}

console.log(palindromicSubs("babad"));
console.log(palindromicSubs("cbbd"));  
console.log(palindromicSubs("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));
console.log(palindromicSubs("abracadabra"));

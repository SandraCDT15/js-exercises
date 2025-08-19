'use strict'
// Write a JavaScript function that checks whether a passed string is a palindrome or not?

const isPalindrome = str => str === str.split('').reverse().join('');

console.log(isPalindrome('madam'));
console.log(isPalindrome('nursesrun'));
console.log(isPalindrome('fox'));
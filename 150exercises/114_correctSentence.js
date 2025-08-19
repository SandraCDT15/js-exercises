'use strict'
// Write a JavaScript program to check whether a given string represents 
// a correct sentence or not. A string is considered a correct sentence 
// if it starts with a capital letter and ends with a full stop (.).

const correcSentence = str => str[0] >= 'A' && str[0] <= 'Z' && str.endsWith('.');

console.log(correcSentence("This tool will help you write better English and efficiently corrects texts."));
console.log(correcSentence("This tool will help you write better English and efficiently corrects texts")); 
console.log(correcSentence("this tool will help you write better English and efficiently corrects texts."));
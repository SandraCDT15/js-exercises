'use strict'
// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
function nextChar(str) {
  let strArr = str.split(""); 
  for(let i = 0; i < strArr.length; i++) { 
    let n = strArr[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26; 
    strArr[i] = String.fromCharCode(n + 'a'.charCodeAt());  
  }
  return strArr.join("");
}

console.log(nextChar("abcdxyz"));
'use strict'
// Write a JavaScript function that generates a string ID (specified length) of random characters.

function generateStr(n){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let newStr = '';
    for(let i = 0; i < n; i++){
        const index = Math.floor(Math.random() * characters.length)
        newStr += characters[index];
    }
    return newStr;
}

console.log(generateStr(10));
console.log(generateStr(25));
console.log(generateStr(3));
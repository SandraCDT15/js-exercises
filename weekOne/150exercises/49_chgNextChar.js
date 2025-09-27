'use strict'
// This JavaScript program replaces each character in a string with the next character in the alphabet.

function changeChar(text) {
    let s = text.split('');

    for (let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case ' ':
                break;
            case 'z':
                s[i] = 'a';
                break;
            case 'Z': 
                s[i] = 'A';
                break;
            default:
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }
    }

    return s.join('');
}

console.log(changeChar("PYTHON"));
console.log(changeChar("W3R"));
console.log(changeChar("php"));
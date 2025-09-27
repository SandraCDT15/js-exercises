'use strict'
// This JavaScript program counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVowels('Python'));
console.log(countVowels('w3resources.com'));
'use strict'
// Write a JavaScript program to remove all characters from a given string that appear more than once.

const removeRepetition = str =>{
    const arr = [...str];

    for(let i = 0; i < arr.length; i++){
        if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
            arr[i] = '';
        } 
    }
    return arr.join('');
}

console.log(removeRepetition('Sandra'));
console.log(removeRepetition('abcdabc'));
console.log(removeRepetition('12341'));
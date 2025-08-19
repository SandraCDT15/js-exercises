'use strict'
// This JavaScript program checks a set of three numbers. If all three numbers are the same, it returns 30. If two numbers are the same, it returns 40. Otherwise, it returns 20.

function sameNum(a, b, c){
    if(a === b && b === c) return 30;
    else if(a === b || a === c || b === c) return 40;
    else return 20;
}

console.log(sameNum(8,8,8));
console.log(sameNum(8,8,18));
console.log(sameNum(8,7,18));
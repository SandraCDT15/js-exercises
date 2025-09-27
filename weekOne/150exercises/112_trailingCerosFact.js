'use strict'
// Write a JavaScript program to find the number of trailing 
// zeros in the decimal representation of the factorial of a given number.

const trailinCeros = num =>{
    let count = 0;
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial *= i;
    }
    while(factorial % 10 === 0){
        count++;
        factorial /= 10;
        console.log(factorial);
    }
    return count;
}

console.log(trailinCeros(8));
console.log(trailinCeros(9));
console.log(trailinCeros(10));
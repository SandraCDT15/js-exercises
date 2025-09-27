'use strict'
// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.

const swapElem = num => {
    const arr = [...num + ''];
    for(let i = 0; i < arr.length; i = i + 2){
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return Number(arr.join(''));
}

console.log(swapElem([15]));
console.log(swapElem([1234]));
console.log(swapElem([123456]));
'use strict'
// The program takes an array of three integers and rotates its elements to the left, meaning the first element moves to the end, the second element moves to the first position, and the third element moves to the second position.

function rotateLeft(arr){
    let rotated = [];
    for(let i = 0; i < arr.length; i++){
        if(i === arr.length - 1) rotated[i] = arr[0];
        else rotated[i] = arr[i + 1];
    }
    return rotated;
}

console.log(rotateLeft([3, 4, 5]));
console.log(rotateLeft([0, -1, 2]));
console.log(rotateLeft([7, 6, 5])); 
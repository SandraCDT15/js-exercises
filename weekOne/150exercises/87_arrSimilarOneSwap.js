'use strict'
// Write a JavaScript program to determine if two arrays of integers of the same length are similar.

function similarSwap(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    let similar = false;

    for(let i = 0; i < arr1.length - 1; i++){

        for(let j = i + 1; j < arr1.length; j++){
            [arr1[i], arr1[j]] = [arr1[j], arr1[i]];

            similar = arr1.reduce((acc, cur, i) => cur === arr2[i] && acc === true ? true : false ,true );

            if(similar) return true;
            else [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
        }
    }
    return false;
}

console.log(similarSwap([1, 2, 3, 4], [3, 1, 2, 4]));
console.log(similarSwap([1, 2, 3, 4], [3, 2, 1, 4]));
console.log(similarSwap([10, 20, 30], [10, 20, 30]));
console.log(similarSwap([10, 20, 30], [30, 1, 20]));
console.log(similarSwap([10, 20, 30, 40], [10, 30, 20, 40]));
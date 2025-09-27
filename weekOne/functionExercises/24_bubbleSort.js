'use strict'
// Write a JavaScript function to apply the Bubble Sort algorithm.

function bubbleSort(arr){
    let swap = true;

    while(swap){
        swap = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
                swap = true;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); 
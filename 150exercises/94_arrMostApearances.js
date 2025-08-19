'use strict'
// Write a JavaScript program to find the number appearing most frequently in a given array of integers.

function mostAppearances(arr){
    let count = 0;
    let prevCount = 0;
    let num;

    for(let i = 0; i < arr.length; i++){
        if(arr.lastIndexOf(arr[i]) !== i){

            for(let j = 0; j < arr.length; j++){
                if(arr[j] === arr[i]) count++;
            }
            if(count > prevCount){
                prevCount = count;
                count = 0;
                num = arr[i];
            }
        }
    }
    return num;
}

console.log(mostAppearances([1, 2, 3, 2, 2, 8, 1, 9]));
console.log(mostAppearances([1, 2, 3, 2, 2, 8, 1, 9, 3, 3, 3]));
console.log(mostAppearances([1, 2, 3, 2, 2, 4, 8, 4, 1, 9, 1, 2, 3, 4,]));

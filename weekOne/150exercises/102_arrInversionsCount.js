'use strict'
//Write a JavaScript program to find the number of inversions of a given array of integers.
//Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

const inversionsArr = arr => {
    let count = 0;

    for(let i = 0; i < arr.length -1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j] && i < j) count ++;
        }
    }
    return count;
}
console.log(inversionsArr([0, 3, 2, 5, 9]));   
console.log(inversionsArr([1, 5, 4, 3]));     
console.log(inversionsArr([10, 30, 20, -10]));  
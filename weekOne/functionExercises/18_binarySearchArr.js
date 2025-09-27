'use strict'
// Write a function for searching JavaScript arrays with binary searches.

function binarySearch(arr, targ){
    let low = 0;
    let high = arr.length - 1;
    let count = 0;

    while(low <= high){
        const mid = Math.floor((low + high) / 2);
        count++;
        console.log(count);

        if(arr[mid] === targ){
             return mid;
        }
        else if(arr[mid] < targ){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([6, 12, 17, 23, 38, 44, 77, 84, 90], 45));
console.log(binarySearch([6, 12, 17, 23, 38, 45, 77, 84, 90], 45));
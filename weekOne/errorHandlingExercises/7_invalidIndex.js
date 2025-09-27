'use strict'
// Write a JavaScript program that uses a try-catch block to catch
//  and handle a 'RangeError' when accessing an array with an invalid index.

function accessElem(arr, index){
    try {
        if(index >= arr.length){
            throw new Error('Index out of bounds');
        }
        console.log(`Element: ${arr[index]}`);
    } catch (error){
        console.log(`Error ${error.message}`);
    }
}

accessElem([1, 2, 3], 3)
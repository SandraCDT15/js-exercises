'use strict'
// Write a JavaScript function that takes an array as a 
// parameter and throws a custom 'Error' if the array is empty.

function isEmpty(arr){
    if(arr.length === 0){
        throw new Error('Array is empty');
    }
}

try{
    isEmpty([1, 2, 3]);
    isEmpty([]);
} catch (error){
    console.log('Error', error.message);
}
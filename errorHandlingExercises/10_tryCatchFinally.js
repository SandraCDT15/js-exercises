'use strict'
// Write a JavaScript program that demonstrates the use of the
//  'try-catch-finally' statement to catch and handle an error,
//  and then execute some cleanup code in the 'finally' block.

function test(num){
    try {
        if(typeof num !== 'number'){
            throw new TypeError('Argument must be a number');
        } else {
            console.log(`The number is ${num}`);
        }
    } catch (error){
        console.log(`Error ${error.message}`);
    } finally{
        console.log('Thanks for trying this test function');
    }
}

console.log(test('o'));
console.log(test(1));
console.log(test('1'));
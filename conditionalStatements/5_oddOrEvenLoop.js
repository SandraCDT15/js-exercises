'use strict'
// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, 
// it checks if the current number is odd or even, and displays a message on the screen.

const oddLoop = () => {
    for(let i = 0; i <= 15; i++){
        console.log(`${i} is ${i % 2 === 0 ? 'even' : 'odd'}`);
    }
}

oddLoop();
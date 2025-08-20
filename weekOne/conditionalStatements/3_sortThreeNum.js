'use strict'
// Write a JavaScript conditional statement to sort three numbers.

function sortNum(a, b, c){
    let sorted = true;
    while(sorted){
        sorted = false;
        if(a < b){
            [a, b] = [b, a];
            sorted = true;
        }
        if(b < c){
            [b, c] = [c, b];
            sorted = true;
        }
    }

    return console.log(a, b, c);
}

sortNum(1, 2, 3);
sortNum(0, -1, 4);
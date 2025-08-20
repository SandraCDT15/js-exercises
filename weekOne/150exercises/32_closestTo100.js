'use strict'
// This JavaScript program compares two numerical values and determines which one is closest to 100.

function checkClosest(a, b){
    if(a === b) return false;
    else{
        if(Math.abs(100 - a) < Math.abs(100 - b)) return a;
        else return b;
    }
}

console.log(checkClosest(90, 89));
console.log(checkClosest(-90, -89));
console.log(checkClosest(90, 90));
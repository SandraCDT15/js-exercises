'use strict'
// Write a JavaScript conditional statement to find the largest of five numbers.

function largest(a, b, c, d, e){
    if(a > b && b > c && c > d && d > e){
        console.log(`The largest is ${a}`);
    } else if(b > a && b > c && b > d && b > e){
        console.log(`The largest is ${b}`);
    } else if(c > a && c > b && c > d && c > e){
        console.log(`The largest is ${c}`);
    }else if(d > a && d > b && d > c && d > e){
        console.log(`The largest is ${d}`);
    } else {
        console.log(`The largest is ${e}`);
    }
}

largest(1, 2, 3, 4, 5);
largest(2, 3, 4, 5, 1);
largest(3, 4, 5, 2, 1);
largest(4, 5, 3, 2, 1);
largest(5, 4, 3, 2, 1);
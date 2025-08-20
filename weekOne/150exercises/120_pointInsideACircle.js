'use strict'
// Write a JavaScript program to check if a point lies strictly inside the circle.

// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)

function pointInside(x, y, r, a, b){
    const dist = Math.sqrt(Math.pow(a - x, 2) + Math.pow(b - y, 2));
    return dist < r;
}

console.log(pointInside(2, 4, 6, 0, 0));
console.log(pointInside(6, 8, 6, 0, 0));
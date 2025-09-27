'use strict'
// Write a JavaScript program to find the types of a given angle.

function angleType(angle){
    if(angle > 0 && angle < 90) return 'Acute angle';
    else if (angle === 90) return 'Right angle';
    else if (angle > 90 && angle < 180) return 'Obtuse angle';
    else if(angle === 180) return 'Straight angle';
    else return 'Angle mut be between 0 and 180';
}

console.log(angleType(47));
console.log(angleType(90));
console.log(angleType(145));
console.log(angleType(180));
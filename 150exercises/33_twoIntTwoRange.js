'use strict'
// This JavaScript program checks if two given numbers fall within either the range 40 to 60 or the range 70 to 100, inclusive. 

const checkRange = (a, b) => (a >= 40 && a <= 60 || a >= 70 && a <= 100) && (b >= 40 && b <= 60 || b >= 70 && b <= 100);

console.log(checkRange(44, 56));
console.log(checkRange(70, 95));
console.log(checkRange(50, 69));
console.log(checkRange(39, 70));
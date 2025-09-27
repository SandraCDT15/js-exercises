'use strict'
// This JavaScript program calculates the sum of two given integers. If the sum falls within the range of 50 to 80 (inclusive), it returns 65; otherwise, it returns 80.

const sum = (a, b) => a + b >= 50 && a + b <= 80 ? 65 : 80;

console.log(sum(30, 20));
console.log(sum(90, 80));
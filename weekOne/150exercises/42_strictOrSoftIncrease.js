'use strict'
// This JavaScript program checks whether three given numbers are increasing in strict or soft mode. In strict mode, the numbers must strictly increase, like 10, 15, 31. In soft mode, the numbers can increase but may have equal adjacent values, like 24, 22, 31 or 22, 22, 31.

function increasing(a, b, c){
    if(b > a && c > b) return 'strict mode';
    else if (c > b && c > a) return 'soft mode';
    else return 'undefined';
}

console.log(increasing(10, 15, 31));
console.log(increasing(24, 22, 31));
console.log(increasing(50, 21, 15));
console.log(increasing(10, 10,10));
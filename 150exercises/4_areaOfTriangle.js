'use strict'

const side = [5, 6, 7];
const s = (side[0] + side[1] + side[2])/2;

console.log(Math.sqrt(s * ((s-side[0]) * (s-side[1]) * (s-side[2]))));
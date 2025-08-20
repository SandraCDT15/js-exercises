'use strict'
// Write a JavaScript function that accepts a list of country 
// names as input and returns the longest country name as output.
const longestName = arr => arr.reduce((acc, cur) => cur.length > acc.length ? acc = cur : acc,'');

console.log(longestName(["Australia", "Germany", "United States of America"]));
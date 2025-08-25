"use strict";
// Write a JavaScript function to check whether a string is a Pangram or not.

const isPangram = (str) => {
  const set = new Set();
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/i.test(str[i])) {
      set.add(str[i]);
    }
  }
  return set.size === 26;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Waltz, bad nymph, for quick jigs vex."));
console.log(isPangram("The five boxing wizards jump quickly."));
console.log(isPangram("The boxing wizards jump quickly."));

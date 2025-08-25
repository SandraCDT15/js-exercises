"use strict";
// Write a JavaScript function to find the length of the longest subsequence
//  present between two sequences. It is important to understand that a subsequence
// is a sequence that appears in a similar relative order, but is not necessarily contiguous.

const longestSubs = (str1, str2) => {
  if (!str1.length || !str2.length) return 0;

  if (str1[0] === str2[0]) {
    return 1 + longestSubs(str1.slice(1), str2.slice(1));
  } else {
    return Math.max(
      longestSubs(str1.slice(1), str2),
      longestSubs(str1, str2.slice(1))
    );
  }
};

console.log(longestSubs("abcda", "abcdef"));
console.log(longestSubs("abcda", "acbad"));
console.log(longestSubs("pqr", "pqr"));

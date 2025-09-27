'use strict'
// The program checks if a specified character is present in a given string between the 2nd and 4th positions (i.e., indices 1 to 3). 

const checkChar = (str, char) => str.includes(char) && str.indexOf(char) >= 1 && str.indexOf(char) <= 3;

console.log(checkChar('Python', 'y'));
console.log(checkChar('JavaScript', 'a'));
console.log(checkChar('Console', 'o'));
console.log(checkChar('Console', 'C'));
console.log(checkChar('Console', 'e'));

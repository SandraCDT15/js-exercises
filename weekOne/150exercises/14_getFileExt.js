'use strict'

const getExt = fileName => fileName.slice(fileName.indexOf('.') + 1);

console.log(getExt('14_getFileExt.js'));
console.log(getExt('system.php'));
console.log(getExt('abc.java'));
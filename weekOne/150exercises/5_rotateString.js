'use strict'

let str = 'w3resource ';

setInterval(() => {
    str = str.slice(-1) + str.slice(0, -1);
console.log(str);
},100);
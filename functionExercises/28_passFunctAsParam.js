'use strict'
// Write a JavaScript program to pass a 'JavaScript function' as a parameter.

function greet(name){
    return console.log(`Hello ${this.name}`);
}

function greatings(name, greet){
    greet(name);
}

greatings('Sandra', greet);
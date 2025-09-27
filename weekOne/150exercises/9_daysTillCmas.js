'use strict'

const today = new Date();
const xmas = new Date(today.getFullYear(), 11, 25);
const milisToDay = 1.15741e-8;

console.log((Math.ceil((xmas.getTime() - today.getTime())*milisToDay)) + ' days till Christmas!');
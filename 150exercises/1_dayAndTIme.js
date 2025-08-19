'use strict'

const today = new Date();
const day = today.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

let time;

if(hour === 0){
    time = 'Midnight';
} else if (hour === 12){
    time = 'Noon';
} else {
    time = hour >= 12 ? 'PM' : 'AM';
}

console.log(`Today is: ${daylist[day]}`);
console.log(`Current time: ${hour >= 12 ? hour - 12 : hour}:${minute}:${second} ${time}`);
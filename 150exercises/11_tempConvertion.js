'use strict'

const celToFar = temp => console.log(`${temp}°C is ${(temp * 9/5) + 32}°F`);
const farToCel = temp => console.log(`${temp}°F ${(temp - 32) * 5/9}°C`);

celToFar(60);
farToCel(45);


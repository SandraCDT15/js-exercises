'use strict'

for(let i = 2014; i < 2050; i++){
    const date = new Date(i, 0, 1);
    if(date.getDay() === 0){
        console.log(i);
    }
}


'use strict'
// Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the
//  sum of the cubes of its digits is equal to the number itself. For example, 
// 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371

function armstrongNums(){
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            for(let k = 0; k < 10; k++){
                let pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
                let sum = i * 100 + j * 10 + k;

                if(pow === sum){
                    console.log(pow);
                }
            }
        }
    }
    
}

armstrongNums();
'use strict'

function primeFactor(num){
    function isPrime(n){
        let count = 0;
        for(let i = 1; i <= n; i++){
            if(n % i === 0) count++;
            if(count > 2) return false;
        }
        return true;
    }

    let result = [];

    for(let i = 2; i <= num; i++){
        if(isPrime(i) && num % i === 0 && !result.includes(i)){
            result.push(i);
            num /= i;
        }
    }
    return result;
}

console.log(primeFactor(100));
console.log(primeFactor(101));
console.log(primeFactor(104));
console.log(primeFactor(105));
'use strict'
// Write a JavaScript function to convert an amount into  coins.

function converToCoins(amount, coins){
    const result = [];
    let left = amount;

    coins.sort((a, b) => b - a);

    for(let i = 0; i < coins.length; i++){

        while(amount >= coins[i]){
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
}

console.log(converToCoins(46, [25, 10, 5, 2, 1]));
console.log(converToCoins(46, [10, 25, 1, 5, 2]));
console.log(converToCoins(148, [25, 10, 5, 2, 1]));
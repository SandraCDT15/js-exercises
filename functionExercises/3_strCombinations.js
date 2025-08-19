'use strict'
// Write a JavaScript function that generates all combinations of a string

function strCombinations(str) {
    const combinations = [''];

    for (let i = 0; i < str.length; i++) {
        const newCombos = [];
        for (const combo of combinations) {
            newCombos.push(combo + str[i]);
            console.log(combo);
        }
        console.log(newCombos);
        combinations.push(...newCombos);
    }

    return combinations.filter(c => c !== '');
}

console.log(strCombinations("abc"));
console.log(strCombinations('dog'));
console.log(strCombinations('abcd'));
console.log(strCombinations('abcde'));

// function strCombinations(str){
//     const combinations = [''];
//     let temp = '';

//     for(let i = 1; i <= str.length; i++){
//         for(let j = 0; j <= str.length; j++){

//             for(let k = 0; k < str.length; k++){
//                 if(!combinations.includes(temp + str[k]) && temp.length - 1 <= i){
//                     temp += str[k];
//                 }
//             }
//             if(!combinations.includes(temp)){
//                 combinations.push(temp);
//                 temp = '';
//             }
//         }
//     }
//     return combinations;
// }

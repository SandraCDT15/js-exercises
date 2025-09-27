'use strict'
// Write a JavaScript program that uses a try-catch block 
// to catch and handle an 'EvalError' when evaluating an invalid expression.

function evalExpression(exp){
    try {
        const result = eval(exp);

        console.log(`Result: ${result}`);
    } catch (error) {
        if(error instanceof EvalError){
            console.log(`EvalError: ${error.message}`);
        } else {
            console.log(`Error: ${error.message}`);
        }
    }
}

console.log(evalExpression('30 + 30'));
console.log(evalExpression('30 +'));
'use strict'

const num = Math.ceil(Math.ceil(Math.random() * 10));

const guess = Number(prompt('Guess the number between 1 and 10'));

if(guess === num){
    alert('Matched');
} else{
    alert(`Not Matched: ${num}`);
}

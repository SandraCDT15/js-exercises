'use strict'
// Write a JavaScript program to check whether a matrix is a diagonal matrix or not.

function diagonalMatrix(matrix){
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            if(i !== j && matrix[i][j] !== 0) return false;
        }
    }
    return true;
}


console.log(diagonalMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));
console.log(diagonalMatrix([[1, 0, 0], [0, 2, 3], [0, 0, 3]]));
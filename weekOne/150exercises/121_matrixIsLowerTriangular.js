'use strict'
// Write a JavaScript program to check whether a given 
// matrix is lower triangular or not.A square matrix is 
// called lower triangular if all the entries above the main diagonal are zero.

const isLowerTriangular = matrix => {
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            if(i < j && matrix[i][j] !== 0) return false;
        }
    }
    return true;
}

console.log(isLowerTriangular([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(isLowerTriangular([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));
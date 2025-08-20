'use strict'
// Write a JavaScript program to simplify a given absolute path for a file in Unix-style.

function simplifyPath(path){
    let arr = path.split('/');
    let newPath = '';

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '.') arr[i] = '';
        
        if(arr[i] === '..'){
            for(let j = i - 1; j >= 0; j--){
                if(arr[j] !== ''){
                    arr[j] = '';
                    break;
                }
            }
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== '' && arr[i] !== '..'){
            newPath += `/${arr[i]}`
        }
    }
    return newPath;
}

console.log(simplifyPath('/a/././../b/c/..'));
console.log(simplifyPath("/home/var/./www/../html//sql/"));
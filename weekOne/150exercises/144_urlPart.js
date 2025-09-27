'use strict'
// Write a JavaScript program to break an URL address 
// and put its parts into an array. Note: url structure 
// ://.org[/] and there may be no part in the address.

function destructureURL(url){
    let arr = url.replaceAll(':', '').replace('.com', '').split('/');
    let newPath = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== ''){
            newPath.push(arr[i]);
        }
    }
    return newPath;
}

console.log(destructureURL("https://www.w3resource.com/javascript-exercises/"));
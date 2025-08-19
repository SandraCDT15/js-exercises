'use strict'
// Write a JavaScript program that uses a try-catch block
//  to catch and handle a `URIError` when decoding an invalid URI.

function decodeUri(uri){
    try {
        const decoded = decodeURI(uri);
        console.log(`Decoded URI: ${decoded}`);
    } catch(error){
        if(error instanceof URIError){
            console.log(`URIError: ${error.message}`);
        } else {
            console.log(`Error: ${error.message}`);
        }
    }
}

decodeUri('https://example.com/');
decodeUri('https://example.com/%%invalidURI');
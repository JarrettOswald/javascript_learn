"use strict";

function sum(x){
    return function(y){
        return x * y;
    };
}

const count = sum(5)(2);

console.log(count);
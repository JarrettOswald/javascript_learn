"use strict";


function sum(a, b) {
    return a * b;
}

console.log(sum(5,9));

const arr = [7,9,99,7];

console.log(sum(...arr));

const word = "Hello";

const arrChar = [...word];

const arrChar2 = Array.from(word);

console.log(arrChar);

console.log(arrChar2);

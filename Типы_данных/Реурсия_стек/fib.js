'use strict';

function fib(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const count = fib(7);

console.log(count);


function fib2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i < n; i++){
        let c = a + b ;
        a = b;
        b = c;
    }

    return b;
}

const count2 = fib(7);

console.log(count2);
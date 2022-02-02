'use strict';


function sumTo(n) {
    if (n == 1) {
        return 1;
    }
    return n + sumTo(n - 1);
}

const sum1 = sumTo(3);

console.log(sum1);


const sum2 = sumTo(100);

console.log(sum2);
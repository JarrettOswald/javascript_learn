'use strict';

function sayHello() {
    console.log("Hello!");
}

const timerId = setTimeout(sayHello, 1000);
console.log(timerId);
clearTimeout(timerId);
console.log(timerId);

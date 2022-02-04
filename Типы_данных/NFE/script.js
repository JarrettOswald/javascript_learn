'use strict';


const sayHi = function () {
    console.log("Hello!");
};


console.log(sayHi.name); // Контекстное имя


const sayWord = function (word, ...more) {
    console.log(word);
};


function sayHello() {
    console.log('Hello!');

    sayHello.count++;
}

sayHello.count = 0;


let sayHi2 = function func(who) {
    console.log(`Hello, ${who}`);
};

sayHi2("Name");
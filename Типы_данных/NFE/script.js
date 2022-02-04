'use strict';


const sayHi = function(){
    console.log("Hello!");
};


console.log(sayHi.name); // Контекстное имя


const sayWord = function(word, ...more){
    console.log(word);
};

console.log(sayWord.length); //«length» содержит количество параметров функции
'use strict';

// setInterval(() => console.log("hello!"), 1000);

/*

Напишите функцию printNumbers(from, to) , которая выводит число каждую секунду,
начиная от from и заканчивая to .
Сделайте два варианта решения.
1. Используя setInterval .
2. Используя рекурсивный setTimeout .

*/

// function printNumbers(form, to) {

//     let timer = setInterval(()=>{
//         if (++form== to){
//             clearInterval(timer);
//         }
//         console.log(form);
//     },1000);
// }

function printNumbers(form, to){
    let timerId = setTimeout(function tick() {
        console.log(form);
        timerId = setTimeout(tick,1000);
        if(form == to){
            clearInterval(timerId);
        }
        form++;
    },1000);
}



printNumbers(5, 9);
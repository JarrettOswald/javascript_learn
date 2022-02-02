'use strict';

/*
Проверка на пустоту

Напишите функцию isEmpty(obj) , которая возвращает true , если у объекта нет
свойств, иначе false .
*/

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

function isEmpty(obj) {
    return Object.keys(obj).length == 0 ? true : false;
}
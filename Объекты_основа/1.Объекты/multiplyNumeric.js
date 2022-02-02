'use strict';

/*
Создайте функцию multiplyNumeric(obj) , которая умножает все числовые свойства
объекта obj на 2 .
*/

const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);

multiplyNumeric(menu);

function multiplyNumeric(menu) {
    for (let prop in menu) {

        let value = menu[prop];
        if (Number.isFinite(value)) {
            menu[prop] = value * 2;
        }
    }
}

console.log(menu);
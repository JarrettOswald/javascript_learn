'use strict';

//Напишите функцию printList(list) , которая выводит элементы списка по одному.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function printList(list) {
    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }

}

// printList(list);


function printListRevers(list) {

    if (list.next) {
        printListRevers(list.next);
    }

    console.log(list.value);
}

printListRevers(list);
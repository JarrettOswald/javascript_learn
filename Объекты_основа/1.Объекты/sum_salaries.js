'use strict';

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum .

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumSalaries(obj) {
    let sum = 0;
    for (let salaries of Object.values(obj)) {
        sum += salaries;
    }
    return sum;
}

const sum = sumSalaries(salaries);
console.log(sum);
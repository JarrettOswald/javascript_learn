'user strict';

const user = {
    name:"Ivan",
    surname:"Drago",
    arr:[2,5,9,9,7,9],
};

// Object.assign() - поверхностное клонирование

let copyUser = Object.assign({},user);

copyUser.name = 'copy';
console.log(user);

copyUser.arr.push(26);
console.log(user);


// JSON.parse(JSON.stringify(object)) - глубокое клонирование

copyUser = JSON.parse(JSON.stringify(user));

copyUser.name = 'copy';
copyUser.arr.push(88);
console.log(user);
console.log(copyUser);


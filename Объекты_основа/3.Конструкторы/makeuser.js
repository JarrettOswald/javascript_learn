'use strict';

function makeUser(){
    return {
        name: "USER",
        ref : this,
    };
}

let user = new makeUser();

console.log(user.ref.name);
/*
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только
собственных свойств. Данная функция не должна возвращать значение.*/

let person = {
    age: 25,
    name: 'Ivan',
    location: 'Russia',
    intro: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    }
}

function iterator(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

iterator(person);
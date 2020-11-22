/*
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного
объекта свойство с данным именем. Функция должна возвращать true или false.*/

let car = {
    model: 'BMW',
    year: 2018,
    price: 1800000,
    func: function () {
        console.log('GO');
    }
}

function isKey(str, obj) {
    return obj[str] !== undefined && typeof obj[str] !== "function";
}

console.log(isKey('price', car));
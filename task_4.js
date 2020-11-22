//===================================Родительский класс ElectraDevice=============================================

function ElectraDevice () {
    this.power = false;
}

ElectraDevice.prototype.onOff = function (onOrOff) {
    if (onOrOff === 'on') {
        this.power = true;
        console.log(`Электроприбор включен`);
    }
    else if (onOrOff === 'off') {
        this.power = false;
        console.log('Электроприбор выключен');
    }
}

//====================================Дочерний класс Washer============================================

function Washer (name, powerConsumption, maxLoad) {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.maxLoad = maxLoad;
}

Washer.prototype = new ElectraDevice();

//Переопределение onOff
Washer.prototype.onOff = function (onOrOff) {
    if (onOrOff === 'on') {
        this.power = true;
        console.log(`Стиральная машина ${this.name} включена`);
    }
    else if (onOrOff === 'off') {
        this.power = false;
        console.log(`Стиральная машина ${this.name} выключена`);
    }
}

//Собственный метод Washer
Washer.prototype.wash = function (washTimeMinute) {
    if (this.power === true) {
        console.log(`Положите вещи в машинку. Внимание, максимальная загрузка ${this.maxLoad} кг!`);
        console.log(`Время стирки ${washTimeMinute} минут, потребляемая мощность ${this.powerConsumption} Вт`);
    } else {
        console.log('Сначала включите стиральную машину');
    }
}

//==================================Дочерний класс Fridge==============================================

function Fridge (name, powerConsumption, volume) {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.volume = volume;
}

Fridge.prototype = new ElectraDevice();

//Переопределение onOff
Fridge.prototype.onOff = function (onOrOff) {
    if (onOrOff === 'on') {
        this.power = true;
        console.log(`Холодильник ${this.name} включен`);
    }
    else if (onOrOff === 'off') {
        this.power = false;
        console.log(`Холодильник ${this.name} выключен`);
    }
}

//Собственный метод Fridge
Fridge.prototype.freeze = function (freezeTimeMinute) {
    if (this.power === true) {
        console.log(`Положите продукты в холодильник. Внимание, максимальный объём ${this.volume} л!`);
        console.log(`Время охлаждеия ${freezeTimeMinute} минут, потребляемая мощность ${this.powerConsumption} Вт`);
    } else {
        console.log('Сначала включите холодильник');
    }

}

//=====================================Создание объектов===========================================

const washer1 = new Washer('Samsung', 1100, 9);
const washer2 = new Washer('LG', 1000, 7);

const fridge1 = new Fridge('Bosch', 100, 280);
const fridge2 = new Fridge('Haier', 150, 380);

//=====================================Тестовые кейсы===========================================

// Кейс 1
washer1.wash(50);
fridge1.freeze(30);

console.log('======================================================================')

//Кейс 2
washer1.wash(50);
washer1.onOff('on');
washer1.wash(50);
washer1.onOff('off');
washer1.wash(50);

console.log('======================================================================')

//Кейс 3
washer1.onOff('on');
washer1.wash(50);
washer2.onOff('on');
washer2.wash(70);

fridge1.onOff('on');
fridge1.freeze(30);
fridge2.onOff('on');
fridge2.freeze(40);
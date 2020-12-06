//===================================Родительский класс ElectraDevice=============================================

function ElectraDevice () {
    this.power = false
}

// Метод сделан не совсем правильно, т.к. состояние (вкл\выкл) является свойством, присущим объекту, по логике оно должно браться из самого объекта, а не приходить извне. У вас как раз есть подходящее для этого свойство - power. Исправила родительский метод, а также дочерние, т.к. там та же проблема
ElectraDevice.prototype.onOff = function () {
    if (!this.power) {
        this.power = true;
        console.log(`Электроприбор включен`);
    }
    else {
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
Washer.prototype.onOff = function () {
    if (!this.power) {
        this.power = true;
        console.log(`Стиральная машина ${this.name} включена`);
    }
    else {
        this.power = false;
        console.log(`Стиральная машина ${this.name} выключена`);
    }
}

//Собственный метод Washer
Washer.prototype.wash = function (washTimeMinute) {
    if (this.power) { // Можно упростить и убрать === true, т.к. this.power и так переменная логичнского типа
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
    if (!this.power) {
        this.power = true;
        console.log(`Холодильник ${this.name} включен`);
    }
    else {
        this.power = false;
        console.log(`Холодильник ${this.name} выключен`);
    }
}

//Собственный метод Fridge
Fridge.prototype.freeze = function (freezeTimeMinute) {
    if (this.power) {
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
washer1.onOff();
washer1.wash(50);
washer1.onOff();
washer1.wash(50);

console.log('======================================================================')

//Кейс 3
washer1.onOff();
washer1.wash(50);
washer2.onOff();
washer2.wash(70);

fridge1.onOff();
fridge1.freeze(30);
fridge2.onOff();
fridge2.freeze(40);
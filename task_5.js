//===================================Родительский класс ElectraDevice=============================================

class ElectraDevice {
    constructor() {
        this.power = false;
    }

    // Тут та же проблема с этим методом, что в предыдущем задании. Исправила
    onOff() {
        if (!this.power) {
            this.power = true;
            console.log(`Электроприбор включен`);
        }
        else {
            this.power = false;
            console.log('Электроприбор выключен');
        }
    }
}

//====================================Дочерний класс Washer============================================

class Washer extends ElectraDevice {
    constructor(name, powerConsumption, maxLoad) {
        super();
        this.name = name;
        this.powerConsumption = powerConsumption;
        this.maxLoad = maxLoad;
    }
    onOff() {
        if (!this.power) {
            this.power = true;
            console.log(`Стиральная машина ${this.name} включена`);
        }
        else {
            this.power = false;
            console.log(`Стиральная машина ${this.name} выключена`);
        }
    }
    wash(washTimeMinute) {
        if (this.power) {
            console.log(`Положите вещи в машинку. Внимание, максимальная загрузка ${this.maxLoad} кг!`);
            console.log(`Время стирки ${washTimeMinute} минут, потребляемая мощность ${this.powerConsumption} Вт`);
        } else {
            console.log('Сначала включите стиральную машину');
        }
    }
}

//==================================Дочерний класс Fridge==============================================

class Fridge extends ElectraDevice {
    constructor(name, powerConsumption, volume) {
        super();
        this.name = name;
        this.powerConsumption = powerConsumption;
        this.volume = volume;
    }
    onOff() {
        if (!this.power) {
            this.power = true;
            console.log(`Холодильник ${this.name} включен`);
        }
        else {
            this.power = false;
            console.log(`Холодильник ${this.name} выключен`);
        }
    }
    freeze(freezeTimeMinute) {
        if (this.power) {
            console.log(`Положите продукты в холодильник. Внимание, максимальный объём ${this.volume} л!`);
            console.log(`Время охлаждеия ${freezeTimeMinute} минут, потребляемая мощность ${this.powerConsumption} Вт`);
        } else {
            console.log('Сначала включите холодильник');
        }
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
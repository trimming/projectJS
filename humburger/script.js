'use strict';
class Hamburger {
    constructor(size, stuffing, topping) {
        this._size = size;
        this._stuffing = stuffing;
    }
    addTopping(topping) {

    } // Добавить добавку }
    removeTopping(topping) {

    } // Убрать добавку }
    getToppings(topping) {

    } // Получить список добавок }
    getSize() {
        return this._size._name;
    } // Узнать размер гамбургера }
    getStuffing() {
        return this._stuffing._name;
    } // Узнать начинку гамбургера }
    calculatePrice() {
        return this._size._price + this._stuffing._price;
    } // Узнать цену }
    calculateCalories() {
        return this._size._calories + this._stuffing._calories;
    } // Узнать калорийность }
}

class Size {
    constructor({ price, calories, name }) {
        this._price = price;
        this._calories = calories;
        this._name = name;
    }
}
class Stuffing {
    constructor({ price, calories, name }) {
        this._price = price;
        this._calories = calories;
        this._name = name;
    }
}
let small = {
    price: 50,
    calories: 20,
    name: 'Маленький',
}
let big = {
    price: 100,
    calories: 40,
    name: 'Большой',
}
let withCheese = {
    price: 10,
    calories: 20,
    name: 'с сыром',
}
let withSalad = {
    price: 20,
    calories: 5,
    name: 'с салатом',
}
let withPotato = {
    price: 15,
    calories: 10,
    name: 'с картошкой',
}
let paprika = {
    price: 15,
    calories: 0,
}
let mayonnaise = {
    price: 20,
    calories: 5,
}
let sizeHumburger = new Size(big);
console.log(sizeHumburger);
let stuffingHumburger = new Stuffing(withPotato);
console.log(stuffingHumburger);
let userHumburger = new Hamburger(sizeHumburger, stuffingHumburger);
console.log(userHumburger);
console.log(userHumburger.calculatePrice());
console.log(userHumburger.calculateCalories());
console.log(`${userHumburger.getSize()} ${userHumburger.getStuffing()}`);
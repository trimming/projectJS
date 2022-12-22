'use strict';
class Hamburger {
    constructor(size, stuffing) {
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
        return this._size;
    } // Узнать размер гамбургера }
    getStuffing() {
        return this._stuffing;
    } // Узнать начинку гамбургера }
    calculatePrice() {

    } // Узнать цену }
    calculateCalories() {

    } // Узнать калорийность }
}

class Size {
    constructor(price, calories) {
        this._price = price;
        this._calories = calories;
    }
}
let small = {
    price: 50,
    calories: 20,
}
let big = {
    price: 100,
    calories: 40,
}
let withCheese = {
    price: 10,
    calories: 20,
}
let withSalad = {
    price: 20,
    calories: 5,
}
let withPotato = {
    price: 15,
    calories: 10,
}
let paprika = {
    price: 15,
    calories: 0,
}
let mayonnaise = {
    price: 20,
    calories: 5,
}
userHumburger = 
'use strict';
class Hamburger {
    constructor(size, stuffing, topping) {
        this._size = size;
        this._stuffing = stuffing;
        this._topping = [];
    }
    addTopping(topping) {
        this._topping = topping;
    } // Добавить добавку }
    removeTopping(topping) {
        if (!Array.isArray(topping)) {
            let index;
            for (let i = 0; i < this._topping.length; i++) {
                if (this._topping[i]._name === topping._name) {
                    index = i;
                }
            }
            this._topping.splice(index, 1);
        } else {
            this._topping = [];
        }
    } // Убрать добавку }
    getToppings() {
        let listToppings = '';
        this._topping.forEach(topping => {
            listToppings += topping._name;
        });
        return listToppings;
    } // Получить список добавок }
    getSize() {
        return this._size._name;
    } // Узнать размер гамбургера }
    getStuffing() {
        return this._stuffing._name;
    } // Узнать начинку гамбургера }
    calculatePrice() {
        let toppingPrice = 0;
        if (this._topping != []) {
            this._topping.forEach(topping => {
                toppingPrice += topping._price;
            });
        }
        return this._size._price + this._stuffing._price + toppingPrice;
    } // Узнать цену }
    calculateCalories() {
        let toppingCalories = 0;
        if (this._topping != []) {
            this._topping.forEach(topping => {
                toppingCalories += topping._calories;
            });
        }
        return this._size._calories + this._stuffing._calories + toppingCalories;
    } // Узнать калорийность }
}

class Composition {
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
    name: ' посыпан приправой',
}
let mayonaise = {
    price: 20,
    calories: 5,
    name: ' полит майонезом',
}
let sizeHumburger = new Composition(big);

let stuffingHumburger = new Composition(withPotato);

let toppingHumburger = [new Composition(paprika), new Composition(mayonaise)];

let userHumburger = new Hamburger(sizeHumburger, stuffingHumburger);

userHumburger.addTopping(toppingHumburger);
console.log(userHumburger);
console.log(`${userHumburger.getSize()} ${userHumburger.getStuffing()} ${userHumburger.getToppings()}`);
userHumburger.removeTopping(toppingHumburger[0]);
console.log(`${userHumburger.getSize()} ${userHumburger.getStuffing()} ${userHumburger.getToppings()}`);
console.log(userHumburger.calculatePrice());
console.log(userHumburger.calculateCalories());
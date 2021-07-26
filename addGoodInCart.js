'use strict';

class GoodAddCart {
    constructor([image, title, price, color, size, quantity = 1]) {
        this._image = image;
        this._title = title;
        this._price = price;
        this._color = color;
        this._size = size;
        this._quantity = quantity;
    }
    getPrice() {
        return this._price * this._quantity;
    }
    render() {
        return `<div class="shoppingCart_card">
        <div class="shoppingCart_item">
            <img src=${this._image} alt="card" class="cartImg">
            <div class="shoppingCart_product">
                <div class="shoppingCart_productName">${this._title}</div>
                <div class="shoppingCart_productDescript">
                    <div class="shoppingCart_priceLine">Price:<span>$${this._price}</span></div>
                    <div>Color: ${this._color}</div>
                    <div>Size: ${this._size}</div>
                    <div class="shoppingCart_quantityLine">Quantity:<span>${this._quantity}</span></div>
                </div>
            </div>
        </div>
        <img class="shoppingCart_close" src="img/close.svg" alt="close">
    </div>`;
    }
}
class GoodCart {
    constructor(container) {
        this._goods = [];
        this._$goodsListContainer = container;
    }
    add(good) {
        this._goods.push(good);
    }
    renderGoodsCart() {
        let goodsList = this._goods.map(
            item => item.render()
        ).join('');
        this._$goodsListContainer.insertAdjacentHTML('afterbegin', goodsList);
    }

    totalCostGoods() {
        let goodsCost = 0;
        this._goods.forEach(item => {
            goodsCost += item.getPrice();
        });
        return goodsCost;
    }
}
/*const cart = new GoodCart([
    new GoodAddCart("img/card2.png", "ELLERY X M'O CAPSULE", 52.00, "Red", "XL", 2),
    new GoodAddCart("img/card1.png", "ELLERY X M'O CAPSULE", 62.00, "Red", "XL", 5),
    new GoodAddCart("img/card3.png", "T-SHIRT", 112.00, "Green", "L", 2),

], document.querySelector('.cartLeft'))*/

const cart = new GoodCart(document.querySelector('.cartLeft'));



//cart.renderGoodsCart();

fetch('https://raw.githubusercontent.com/trimming/catalog/for_projectJS/arrCatalog.json')
    .then((response) => {
        return response.json()

    })
    .then((response) => {
        response.forEach(newGood => {
            cart.add(new GoodAddCart(newGood));
        })

        cart.renderGoodsCart();
    })
    .catch((err) => {
        console.log('Error')
    });
console.log(cart.totalCostGoods());

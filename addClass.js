'use strict';
class Good {
    constructor(image, title, text, price) {
        this._image = image;
        this._title = title;
        this._text = text;
        this._price = price;
    }
    render() {
        return `<div class="card">
        <img src=${this._image} alt="foto">
        <h5 class="card_heading">${this._title}</h5>
        <p class="card_text">${this._text}</p>
        <h6 class="card_price">$${this._price}</h6>
    </div>`;
    }
    getPrice() {
        return this._price;
    }
}



class GoodList {
    constructor(goods, container) {
        this._goods = goods;
        this._$goodsListContainer = container;
    }
    renderGoodsList() {
        let goodsList = this._goods.map(
            item => item.render()
        ).join('');
        this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }
    totalCostGoods() {
        let goodsCost = 0;

        this._goods.forEach(item => {
            goodsCost += item.getPrice();
        });

        return goodsCost;
    }
}
const list = new GoodList([
    new Good("img/card1.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 52.00),
    new Good("img/catalog_card2.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 52.00),
    new Good("img/card3.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 52.00),
    new Good("img/card4.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 52.00),
    new Good("img/catalog_card5.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 52.00),
    new Good("img/catalog_card6.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 52.00),
    new Good("img/catalog_card7.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 52.00),
    new Good("img/catalog_card8.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 52.00),
    new Good("img/catalog_card9.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 52.00)

], document.querySelector('.cards_block'))

list.renderGoodsList();

class GoodAddCart extends Good {
    constructor(image, title, price, quantity = 1) {
        super(image, title, price);
        this._quantity = quantity;
    }
    getPrice() {
        return this._price * this._quantity;
    }
    render() {
        return `<div class="card">
        <img src=${image} alt="foto">
        <h5 class="card_heading">${title}</h5>
        <p class="quantity">${quantity}</p>
        <h6 class="card_price">$${price}</h6>
        <p class
    </div>`;
    }
}
const cart = new GoodList([
    new GoodAddCart("img/card1.png", "ELLERY X M'O CAPSULE", 52.00, 2),
    new GoodAddCart("img/catalog_card7.png", "ELLERY X M'O CAPSULE", 52.00, 2),
    new GoodAddCart("img/catalog_card8.png", "ELLERY X M'O CAPSULE", 52.00, 3)

], document.querySelector('.cart'))

console.log(list.totalCostGoods());

class GoodCart {
    constructor(goodaddcart) {
        this._goodaddcart = goodaddcart;
    }
    removeGoods() {

    }

}
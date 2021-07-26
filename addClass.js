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
        this._$goodsListContainer.insertAdjacentHTML('afterbegin', goodsList);
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

/*class GoodAddCart extends Good {
    constructor(image, title, price, color, size, quantity = 1) {
        super(image, title, price);
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
            <img src=${this._image} alt="card">
            <div class="shoppingCart_product">
                <div class="shoppingCart_productName">${this._title}</div>
                <div class="shoppingCart_productDescript">
                    <div class="shoppingCart_priceLine">Price:<span>$${this._price}</span></div>
                    <div>Color: ${this._color}</div>
                    <div>Size: ${this.size}</div>
                    <div class="shoppingCart_quantityLine">Quantity:<span>${this._quantity}</span></div>
                </div>
            </div>
        </div>
        <img class="shoppingCart_close" src="img/close.svg" alt="close">
    </div>`;
    }
}
const cart = new GoodCart([
    new GoodAddCart("img/card1.png", "ELLERY X M'O CAPSULE", 52.00, "Red", "XL", 2),

], document.querySelector('.shoppingCart'))

//console.log(cart.totalCostGoods());

cart.renderGoodsCart();

class GoodCart {
    constructor(goods, container) {
        this._goods = goods;
        this._$goodsListContainer = container;
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
}*/
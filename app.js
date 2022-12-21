'use strict';
class Good {
    constructor(image, title, text, price) {
        this._image = image;
        this._title = title;
        this._text = text;
        this._price = price;
    }
    getPrice() {
        return this._price;
    }
    render() {
        return `<div class="b-card">
    <div class="b-card__wrap">
        <img class="b-card__img" src=${this._image} alt="model">
        <div class="b-card__wrapBtn">
            <button class="b-card__button" data-type=${this._title}><img src="images/cart.svg"
                    data-type=${this._title} alt="cart">Add
                to
                Cart</button>
        </div>
    </div>
    <div class="b-card__info">
        <h4 class="b-card__infoItem">${this._title}</h4>
        <p class="b-card__infoText">${this._text}</p>
        <p class="b-card__infoPrice">$<span class="b-card__price">${this._price}</span></p>
    </div>
</div>`;
    }
}

class GoodInCart extends Good {
    constructor(title, price, quantity = 1) {
        super(title, price);

        this._quantity = quantity;
    }
    getPrice() {
        return this._price * this._quantity;
    }
    render() {
        return `<div class = "b-menu__cartItem">
        <span class="productName">${this._title}</span>
        <div>
            <span id = "${this._title}" class = "productQuantity">${this._quantity}</span>
            <span>шт.</span>
        </div>   
        <div>
            <span>$</span>
            <span class = "productPrice">${this._price}</span>                    
        </div>    
        <div>
            <span>$</span>
            <span class = "productMulti" type = "${this._title}" >{product.multi}</span>                    
        </div>    
    </div>`;
    }
}

class GoodList {
    constructor(goods, container) {
        this._goods = goods;
        this._$goodsListContainer = container;
        //this._total = total;
    }
    renderGoodsList() {
        let goodsList = this._goods.map(
            item => item.render()
        ).join('');
        this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }
    // getTotal() {
    //     this._goods.forEach(good => {

    //     });
    // }
}


const list = new GoodList([
    new Good({ image: "images/card_1.png", title: "Product 01", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00" }),
    new Good({ image: "images/card_7.jpg", title: "Product 02", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "65.00" }),
    new Good({ image: "images/card_3.png", title: "Product 03", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "47.50" }),
    new Good({ image: "images/card_4.png", title: "Product 04", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "82.00" }),
    new Good({ image: "images/card_8.jpg", title: "Product 05", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "58.00" }),
    new Good({ image: "images/card_9.jpg", title: "Product 06", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "99.99" }),
    new Good({ image: "images/card_10.jpg", title: "Product 07", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "112.00" }),
    new Good({ image: "images/card_11.jpg", title: "Product 08", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00" }),
    new Good({ image: "images/card_12.jpg", title: "Product 09", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00" }),
], document.querySelector('.filter__cards'));

const cart = new GoodList([
    new GoodInCart("Product 01", "52.00"),
    new GoodInCart("Product 02", "65.00"),
    new GoodInCart("Product 03", "47.50"),
    new GoodInCart("Product 04", "82.00"),
    new GoodInCart("Product 05", "58.00"),
    new GoodInCart("Product 06", "99.99"),
    new GoodInCart("Product 07", "112.00"),
    new GoodInCart("Product 08", "52.00"),
    new GoodInCart("Product 09", "52.00"),

], document.querySelector('.b-menu__cartProduct'));


list.renderGoodsList();

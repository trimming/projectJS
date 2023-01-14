'use strict';
class Good {
    constructor({ image, title, text, price }) {
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
    constructor({ _image: image, _title: title, _text: text, _price: price }, quantity = 1) {
        super({ image, title, text, price });
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
    constructor(container) {
        this._goods = [];
        this._$goodsListContainer = container;
        this._total = 0;
    }
    add(good) {
        this._goods.push(good);
    }
    remove(index) {
        this._goods.splice(index, 1);
    }
    renderGoodsList() {
        let goodsList = this._goods.map(
            good =>
                good.render()
        ).join('');
        this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }
    getTotal() {
        this._goods.forEach(good => {
            this._total += +good._price;
        });
        console.log(this._total);
    }
}

const list = new GoodList(document.querySelector('.filter__cards'));
const cart = new GoodList(document.querySelector('.b-menu__cartProduct'));


fetch('https://raw.githubusercontent.com/trimming/projectJS/lesson-3/goodsList.json')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        response.forEach((newGood) => {
            list.add(new Good(newGood));
        });
        list.renderGoodsList();
        list.getTotal();

    })
    .then(() => {
        list._goods.forEach((newGoodInCart) => {
            cart.add(new GoodInCart(newGoodInCart));
        });
        cart.renderGoodsList();
        console.log(cart._goods);

    })
    .then(() => {
        let indexGood = 1;
        cart._goods.forEach(goodInCart => {
            if (cart._goods.indexOf(goodInCart) === indexGood) {
                cart.remove(indexGood);
            }
        });
        console.log(cart._goods);
    })
    .catch((err) => {
        alert('ошибка');
    })





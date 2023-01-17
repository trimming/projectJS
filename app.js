'use strict';
//Счетчик товаров в корзине.
const cartCountEl = document.querySelector('.b-menu__quantityCart');
//Иконка корзины в верхнем меню.
const openCartEl = document.querySelector('.b-menu__rightCart');
//Список товаров в корзине, которые выбрал пользователь.
const cartListEl = document.querySelector('.b-menu__cart');

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
            <button class="b-card__button" data-type="${this._title}"><img src="images/cart.svg"
                    data-type="${this._title}" alt="cart">Add
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
        <img class = "productClose" src="images/close.svg">        
    </div>`;
    }
    rerender(title) {
        let goodsInCart = document.querySelectorAll('.productName');
        goodsInCart.forEach(good => {
            if (good.innerText === title) {
                good.parentElement.remove();
            }
        });
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
    remove(title) {
        this._goods.forEach((good) => {
            if (good._title === title) {
                good.rerender(good._title);
            }
        });
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
        let getAllButtonsFromCards = document.querySelectorAll('.b-card__button');

        getAllButtonsFromCards.forEach((button) => {
            button.addEventListener('click', addedProduct);
        });

        function addedProduct(event) {
            const productTittle = event.target.getAttribute('data-type');
            addedProductToCart(productTittle);
        }
        function addedProductToCart(productTittle) {
            changeCartCount();
            addProductToUserCart(productTittle);
            renderProductInCart(productTittle);
        }

        openCartEl.addEventListener('click', () => {
            cartListEl.classList.add('b-menu__cart_active')
        });

        function changeCartCount() {
            cartCountEl.style.background = '#F16D7F';
            cartCountEl.textContent++;
        }
        let userCart = {};
        function addProductToUserCart(productTittle) {
            if (!(productTittle in userCart)) {
                userCart[productTittle] = 1;
            } else {
                userCart[productTittle]++;
            }
        }
        //     list._goods.forEach((newGoodInCart) => {

        //         if (newGoodInCart._title == getUserProduct) {
        //             cart.add(new GoodInCart(newGoodInCart));
        //             cart.renderGoodsList();
        //         }
        //     });
        // });
        // });
    })
    .then(() => {
        let titleGood;
        let allGoodsInCart = document.querySelectorAll('.productClose');
        allGoodsInCart.forEach((good) => {
            good.addEventListener('click', (event) => {
                titleGood = event.target.parentElement.children[0].innerText;
                console.log(titleGood);
                cart.remove(titleGood);
            });
        });

    })
    .catch((err) => {
        alert('ошибка');
    })





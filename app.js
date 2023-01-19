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
    constructor({ image, title, text, price }, quantity = 1) {
        super({ image, title, text, price });
        this._quantity = quantity;
    }
    getPrice() {
        return this._price * this._quantity;
    }
    changeQuantity(productTitle) {
        return this._quantity++;

    }
    render() {
        return `
        <div class = "b-menu__cartItem">
            <span class="productName" id = "${this._title}">${this._title}</span>
            <div>
                <span id = "${this._title}" class = "productQuantity">${this._quantity}</span>
                <span>шт.</span>
            </div>   
            <div>
                <span>$</span>
                <span class = "productPrice" id = "${this._title}">${this._price}</span>                    
            </div>    
            <div>
                <span>$</span>
                <span class = "productMulti" type = "${this._title}" >${this._price}</span>                    
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
    renderGoodsList(productTitle) {
        let goodsList = this._goods.map(
            (good) => {
                if (!(good._quantity) || productTitle === good._title) {
                    return good.render()
                } else good.changeQuantity(productTitle);
            }).join('');
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

        const getAllButtonsFromCards = document.querySelectorAll('.b-card__button');
        getAllButtonsFromCards.forEach((button) => {
            button.addEventListener('click', (event) => {
                const productTitle = event.target.getAttribute('data-type');
                addedProductToCart(productTitle);
            });
        });

        function addedProductToCart(productTitle) {
            changeCartCount();
            addProductToUserCart(productTitle);
            renderProductInCart(productTitle);
        }

        function changeCartCount() {
            cartCountEl.style.background = '#F16D7F';
            cartCountEl.textContent++;
        }

        let userCart = {};
        function addProductToUserCart(productTitle) {
            if (!(productTitle in userCart)) {
                userCart[productTitle] = 1;
            } else {
                userCart[productTitle]++;
            }
        }

        function renderProductInCart(productTitle) {
            let productInCart = document.querySelector(`.productName[id = "${productTitle}"]`);
            if (productInCart) {
                changeProductQuantity(productTitle);
                getSumForProduct(productTitle);
            } else {
                renderNewProductInCart(productTitle);
            }
        }

        function renderNewProductInCart(productTitle) {
            response.forEach((newGoodInCart) => {

                if (newGoodInCart.title === productTitle) {
                    cart.add(new GoodInCart(newGoodInCart));
                }
            });
            cart.renderGoodsList(productTitle);

        }

        function changeProductQuantity(productTitle) {
            const productQuantityEl = document.querySelector(`.productQuantity[id = "${productTitle}"]`);
            productQuantityEl.textContent++;
        }

        function getSumForProduct(productTitle) {
            const productTotalEl = document.querySelector(`.productMulti[type = "${productTitle}"]`);
            const productPriceEl = document.querySelector(`.productPrice[id = "${productTitle}"]`);
            let productTotalPrice = (userCart[productTitle] * productPriceEl.textContent).toFixed(2);
            productTotalEl.textContent = productTotalPrice;
        }
    })
    .then(() => {


        openCartEl.addEventListener('click', () => {
            cartListEl.classList.toggle('b-menu__cart_active')
        });


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





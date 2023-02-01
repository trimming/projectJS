'use strict';

//Счетчик товаров в корзине.
const cartCountEl = document.querySelector('.b-menu__quantityCart');
//Иконка корзины в верхнем меню.
const openCartEl = document.querySelector('.b-menu__rightCartIcon');
//Список товаров в корзине, которые выбрал пользователь.
const cartListEl = document.querySelector('.b-menu__cart');
//Общая стоимость товаров в корзине.
const cartTotalEl = document.querySelector('.cartTotal');
//Кнопка поиска товаров по каталогу.
const searchBtnEl = document.querySelector('.search-button');
//Поле ввода поиска по сайту.
const searchInput = document.querySelector('.goods-search');


class Good {
    constructor({ image, title, text, price }) {
        this.image = image;
        this.title = title;
        this.text = text;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    render() {
        return `<div class="b-card">
    <div class="b-card__wrap">
        <img class="b-card__img" src=${this.image} alt="model">
        <div class="b-card__wrapBtn">
            <button class="b-card__button" data-type="${this.title}"><img src="images/cart.svg"
                    data-type="${this.title}" alt="cart">Add
                to
                Cart</button>
        </div>
    </div>
    <div class="b-card__info">
        <h4 class="b-card__infoItem">${this.title}</h4>
        <p class="b-card__infoText">${this.text}</p>
        <p class="b-card__infoPrice">$<span class="b-ard__price">${this.price}</span></p>
    </div>
</div>`;
    }
}

class GoodInCart extends Good {
    constructor({ image, title, text, price }, quantity = 1) {
        super({ image, title, text, price });
        this.quantity = quantity;
    }
    getPrice() {
        return this.price * this.quantity;
    }
    changeQuantity() {
        return this.quantity++;

    }
    render() {
        return `
        <div class = "b-menu__cartItem">
            <span class="productName" id = "${this.title}">${this.title}</span>
            <div>
                <span id = "${this.title}" class = "productQuantity">${this.quantity}</span>
                <span>шт.</span>
            </div>   
            <div>
                <span>$</span>
                <span class = "productPrice" id = "${this.title}">${this.price}</span>                    
            </div>    
            <div>
                <span>$</span>
                <span class = "productMulti" type = "${this.title}" >${this.price}</span>                    
            </div>        
            <img class = "productClose" data-type = "${this.title}"src="images/trash.png">        
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
        this._filteredGoods = [];
        this._$goodsListContainer = container;
        this._total = 0;
    }
    getGoods() {
        return this._goods;
    }
    add(good) {

        this._goods.push(good);
        this._filteredGoods.push(good);
    }
    remove(title) {

        this._filteredGoods.forEach((good) => {
            if (good.title === title) {
                good.rerender(good.title);
                good.quantity = 1;
            }
        });

        this._filteredGoods = this._goods.filter(goodsInCart =>
            !(goodsInCart.title === title));

        console.log(this._$goodsListContainer);
        console.log(this._filteredGoods);
        console.log(this._goods);

    }
    renderGoodsList(productTitle) {
        if (!productTitle) {
            this._$goodsListContainer.textContent = '';
        }
        let goodsList = this._filteredGoods.map(
            (good) => {
                if (!(good.quantity) || productTitle === good.title) {
                    return good.render()
                } else good.changeQuantity(productTitle);
            }).join('');
        this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }
    filter(value) {
        let regExp = new RegExp(value, 'i');
        this._filteredGoods = this._goods.filter(good =>
            regExp.test(good.title));
        this.renderGoodsList();
    }
    getTotal() {
        this._goods.forEach(good => {
            this._total += +good.price;
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

        openCartEl.addEventListener('click', () => {
            cartListEl.classList.toggle('b-menu__cart_active')
        });

        /**
         * Функция добавляет товар в корзину.
         */
        function addGoodInCart() {
            const getAllButtonsFromCards = document.querySelectorAll('.b-card__button');
            getAllButtonsFromCards.forEach((button) => {
                button.addEventListener('click', (event) => {
                    const productTitle = event.target.getAttribute('data-type');
                    addedProductToCart(productTitle);
                });
            });
            /**
             * Функция принимает пераметр название продукта по которому произошел клик добавления в корзину.
             * @param {string} productTitle Название продукта, который хотим добавить в корзину. 
             */
            function addedProductToCart(productTitle) {
                changeCartCount();
                addProductToUserCart(productTitle);
                renderProductInCart(productTitle);
                addTotalPriceProducts();
                removeGoodToCart();
            }
            /**
             * Функция меняет фон счетчика товаров в корзине и увеличивает его при клике.
             */
            function changeCartCount() {
                cartCountEl.style.background = '#F16D7F';
                cartCountEl.textContent++;
            }

            let userCart = {};
            /**
             * Функция добавляет в объект userCart свойства с названиями продуктов, которые добавляем в корзину со значением их количества. 
             * @param {string} productTitle Название продукта, который хотим добавить в корзину. 
             */
            function addProductToUserCart(productTitle) {
                if (!(productTitle in userCart)) {
                    userCart[productTitle] = 1;
                } else {
                    userCart[productTitle]++;
                }
            }
            /**
             * Функция определяет есть ли товар в корзине или нет и определяет дальнейшее действие.
             * @param {string} productTitle Название продукта, который хотим добавить в корзину. 
             */
            function renderProductInCart(productTitle) {
                let productInCart = document.querySelector(`.productName[id = "${productTitle}"]`);
                if (productInCart) {
                    changeProductQuantity(productTitle);
                    getSumForProduct(productTitle);
                } else {
                    renderNewProductInCart(productTitle);
                }
            }
            /**
             * Функция отрисовывает новый добавленный товар в корзину.
             * @param {string} productTitle Название продукта, который хотим добавить в корзину. 
             */
            function renderNewProductInCart(productTitle) {
                list._goods.forEach((newGoodInCart) => {
                    if (newGoodInCart.title === productTitle) {
                        cart.add(new GoodInCart(newGoodInCart));
                    }
                });
                cart.renderGoodsList(productTitle);
            }
            /**
             * Функция меняет количество продукта добавленнго в корзину.
             * @param {string} productTitle Название продукта, который хотим добавить в корзину. 
             */
            function changeProductQuantity(productTitle) {
                const productQuantityEl = document.querySelector(`.productQuantity[id = "${productTitle}"]`);
                productQuantityEl.textContent++;
            }
            /**
             * Функция считает общую стоимость продукта добавленного в корзину.
             * @param {string} productTitle Название продукта, который хотим добавить в корзину. 
             */
            function getSumForProduct(productTitle) {
                const productTotalEl = document.querySelector(`.productMulti[type = "${productTitle}"]`);
                const productPriceEl = document.querySelector(`.productPrice[id = "${productTitle}"]`);
                let productTotalPrice = (userCart[productTitle] * productPriceEl.textContent).toFixed(2);
                productTotalEl.textContent = productTotalPrice;
            }
            /**
             * Функция считает общую стоимость продуктов добавленных в корзину.
             */
            function addTotalPriceProducts() {
                const productsTotalPriceEl = document.querySelectorAll('.productMulti');

                let total = 0;
                productsTotalPriceEl.forEach((totalPrice) => {
                    total += Number(totalPrice.innerHTML);
                });
                cartTotalEl.textContent = total;
            }
            function removeGoodToCart() {
                const allGoodsInCart = document.querySelectorAll('.productClose');

                allGoodsInCart.forEach((good) => {
                    good.addEventListener('click', (event) => {
                        const titleGood = event.target.getAttribute('data-type');

                        cart.remove(titleGood);
                    });
                });
            }

        }


        addGoodInCart();

        searchBtnEl.addEventListener('click', () => {
            list.filter(searchInput.value);
            addGoodInCart();
        });

    })
    .catch((err) => {
        alert('ошибка');
    })




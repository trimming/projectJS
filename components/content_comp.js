Vue.component('content_comp', {
    props: ['goods'],
    template: ` <div class="content">
    <header class="header__catalog">
        <div class="header__menu">
            <div class="b-menu container">
                <div class="b-menu__left">
                    <a href="index.html"><img src="images/logo.svg" alt="logo"></a>

                    <input type="text" class="goods-search">
                    <button class="search-button" type="button"><img src="images/search.svg"
                            alt="search"></button>
                </div>
                <div class="b-menu__right">
                    <a href="product.html"><img src="images/burger.svg" alt="bar"></a>
                    <a href="registration.html"><img src="images/user.svg" alt="user"></a>
                    <div class="b-menu__rightCart">
                        <a class="b-menu__rightCartIcon"><img src="images/cart.svg" alt="cart"></a>
                        <span class="b-menu__quantityCart"></span>
                        <div class="b-menu__cart">
                            <div class="b-menu__cartWrap">
                                <span>Наименование <br> товара</span>
                                <span>Количество</span>
                                <span>Цена за шт.</span>
                                <span>Итого</span>
                                <span>Удалить</span>
                            </div>
                            <div class="b-menu__cartProduct">
                            </div>
                            <div class="b-menu__cartWrap">
                                <span>Товаров в корзине на сумму:</span>
                                <div>
                                    <span>$</span>
                                    <span class="cartTotal">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__heading">
            <div class="b-heading container">
                <div class="b-heading__left"><a href="#">NEW ARRIVALS</a></div>
                <div class="b-heading__right">
                    <a href="#">HOME</a>
                    <span>/</span>
                    <a href="#">MEN</a>
                    <span>/</span>
                    <a href="#">NEW ARRIVALS</a>
                </div>
            </div>
        </div>
    </header> 
    <filter_comp :goods="goods"></filter_comp>
    <div class="advantage">
        <div class="container advantage__content">
            <div class="b-advantageItem">
                <img src="images/truck.svg" alt="truck">
                <h4 class="b-advantageItem__heading">Free Delivery</h4>
                <p class="b-advantageItem__text">Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.</p>
            </div>
            <div class="b-advantageItem">
                <img src="images/percent.svg" alt="percent">
                <h4 class="b-advantageItem__heading">Sales & discounts</h4>
                <p class="b-advantageItem__text">Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.</p>
            </div>
            <div class="b-advantageItem">
                <img src="images/crown.svg" alt="crown">
                <h4 class="b-advantageItem__heading">Quality assurance</h4>
                <p class="b-advantageItem__text">Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.</p>
            </div>
        </div>
    </div>
</div>`,

})

Vue.component('filter_comp', {
    props: ['goods'],
    template: `<div class="filter container">
    <nav class="filter__nav">
        <div class="filter__navLeft">
            <a class="filter__text" href="#">FILTER</a>
            <img class="filter__img" src="images/filter.svg" alt="bar">
            <div class="b-filter__hidden b-filter__hidden_active">
                <img class="b-filter__hiddenImg" src="images/filter_red.svg" alt="bar">
                <div class="b-filter__hiddenCategory">
                    <h5 class="b-filter__hiddenItem">CATEGORY</h5>
                    <ul>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Bags</a></li>
                        <li><a href="#">Denim</a></li>
                        <li><a href="#">Hoodies & Sweatshirts</a></li>
                        <li><a href="#">Jackets & Coats</a></li>
                        <li><a href="#">Polos</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Sweaters & Knits</a></li>
                        <li><a href="#">T-Shirts</a></li>
                        <li><a href="#">Tanks</a></li>
                    </ul>
                </div>
                <div class="b-filter__hiddenCategory">
                    <h5 class="b-filter__hiddenItem">BRAND</h5>
                </div>
                <div class="b-filter__hiddenCategory">
                    <h5 class="b-filter__hiddenItem">DESIGNER</h5>
                </div>
            </div>
        </div>
        <div class="nav__center">
            <div>
                <a class="nav__category" href="#">TRENDING NOW</a>
                <img src="images/check.svg" alt="check">
            </div>
            <div class="nav__size">
                <a class="nav__category" href="#">SIZE</a>
                <img src="images/check.svg" alt="check">
                <div class="b-sizePop b-nav__sizePop">
                    <div class="b-sizePop__item"><input type="checkbox" name="size">XS
                    </div>
                    <div class="b-sizePop__item"><input type="checkbox" name="size">S
                    </div>
                    <div class="b-sizePop__item"><input type="checkbox" name="size">M
                    </div>
                    <div class="b-sizePop__item"><input type="checkbox" name="size">L
                    </div>
                </div>
            </div>
            <div>
                <a class="nav__category" href="#">PRICE</a>
                <img src="images/check.svg" alt="check">
            </div>
        </div>
    </nav>
    <div class="filter__cards">
        <card_comp v-for="good in goods" :good="good"></card_comp>
    </div>
    <nav class="nav__low">
        <a href="#"><img src="images/code_left.svg" alt="code"></a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">.....</a>
        <a href="#">20</a>
        <a href="#"><img src="images/code_right.svg" alt="code"></a>
    </nav>
</div>`
})

Vue.component('card_comp', {
    props: ['good'],
    template: `<div class="b-card">
    <div class="b-card__wrap">
        <img class="b-card__img" :src="good.image" alt="model">
        <div class="b-card__wrapBtn">
            <button class="b-card__button" data-type="${this.title}"><img src="images/cart.svg"
                    data-type="${this.title}" alt="cart">Add
                to
                Cart</button>
        </div>
    </div>
    <div class="b-card__info">
        <h4 class="b-card__infoItem">{{ good.title }}</h4>
        <p class="b-card__infoText">{{ good.text }}</p>
        <p class="b-card__infoPrice">$<span class="b-ard__price">{{ good.price }}</span></p>
    </div>
</div>`
})
Vue.component('goods_list_comp', {
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
        <card_comp v-for="good in goods" :good="good" :key="good.id" v-on:add="addToCart"></card_comp>
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
    </div>`,
    methods: {
        addToCart(id) {
            this.$emit('add', id)
        }
    }
})

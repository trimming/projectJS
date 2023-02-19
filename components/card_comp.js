Vue.component('card_comp', {
    props: ['good'],
    template: `<div class="b-card">
    <div class="b-card__wrap">
        <img class="b-card__img" :src="good.image" alt="model">
        <div class="b-card__wrapBtn">
            <button class="b-card__button">
                <img src="images/cart.svg" alt="cart">
                Add to Cart
            </button>
        </div>
    </div>
    <div class="b-card__info">
        <h4 class="b-card__infoItem">{{ good.title }}</h4>
        <p class="b-card__infoText">{{ good.text }}</p>
        <p class="b-card__infoPrice">$<span class="b-ard__price">{{ good.price }}</span></p>
    </div>
</div>`
})
'use strict';
const goods = [
    { image: "images/card_1.png", title: "Product 01", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00" },
    { image: "images/card_7.jpg", title: "Product 02", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "65.00" },
    { image: "images/card_3.png", title: "Product 03", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "47.50" },
    { image: "images/card_4.png", title: "Product 04", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "82.00" },
    { image: "images/card_8.jpg", title: "Product 05", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "58.00" },
    { image: "images/card_9.jpg", title: "Product 06", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "99.99" },
    { image: "images/card_10.jpg", title: "Product 07", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "112.00" },
    { image: "images/card_11.jpg", title: "Product 08", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00" },
    { image: "images/card_12.jpg", title: "Product 09", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00" },
];

const $goodList = document.querySelector('.filter__cards');

const renderGoodsItem = ({ image, title, text, price }) => {
    return `<div class="b-card">
    <div class="b-card__wrap">
        <img class="b-card__img" src=${image} alt="model">
        <div class="b-card__wrapBtn">
            <button class="b-card__button" data-type=${title}><img src="images/cart.svg"
                    data-type=${title} alt="cart">Add
                to
                Cart</button>
        </div>
    </div>
    <div class="b-card__info">
        <h4 class="b-card__infoItem">${title}</h4>
        <p class="b-card__infoText">${text}</p>
        <p class="b-card__infoPrice">$<span class="b-card__price">${price}</span></p>
    </div>
</div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(item => renderGoodsItem(item)).join('');
    $goodList.insertAdjacentHTML('beforeend', goodsList);

}
renderGoodsList(goods);
'use strict';
const goods = [
    { image: "img/card1.png", title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00" },
    { image: "img/catalog_card2.png", title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00" },
    { image: "img/card3.png", title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00" },
    { image: "img/card4.png", title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00" },
    { image: "img/catalog_card5.png", title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00" },
    { image: "img/catalog_card6.png", title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00" },
    { image: "img/catalog_card7.png", title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00" },
    { image: "img/catalog_card8.png", title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00" },
    { image: "img/catalog_card9.png", title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00" },

];

const $goodList = document.querySelector('.cards_block');

const renderGoodsItem = ({ image, title, text, price }) => {
    return `<div class="card">
    <img src=${image} alt="foto">
    <h5 class="card_heading">${title}</h5>
    <p class="card_text">${text}</p>
    <h6 class="card_price">${price}</h6>
</div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(item => renderGoodsItem(item)).join('');
    $goodList.insertAdjacentHTML('beforeend', goodsList);

}
renderGoodsList();
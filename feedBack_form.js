'use strict';
//Элемент формы поле ввода имени пользователя.
const inputNameEl = document.getElementById('subscribeName');
//Элемент формы поле ввода телефона пользователя.
const inputPhoneEl = document.getElementById('subscribePhone');
//Элемент формы поле ввода электронной почты пользователя.
const inputEmailEl = document.getElementById('subscribeEmail');
//Элемент кнопки отправки формы.
const buttonFeedbackEl = document.querySelector('.b-feedbackBlock__button');

let regExpName = new RegExp('[a-zA-z]+', 'i');
let regExpPhone = new RegExp('\+7\(\d{3}\)\d{3}-\d{4}');
let regExpEmail = new RegExp('^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$');


buttonFeedbackEl.addEventListener('click', validForm);

function validForm(input, regex) {
    if (!(regex.test(input.textContent))) {
        input.style.border = '#E05C6E';
    }
}
validForm(inputNameEl, regExpName);
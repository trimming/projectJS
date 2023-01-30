'use strict';
//Элемент формы поле ввода имени пользователя.
const inputNameEl = document.getElementById('subscribeName');
//Элемент формы поле ввода телефона пользователя.
const inputPhoneEl = document.getElementById('subscribePhone');
//Элемент формы поле ввода электронной почты пользователя.
const inputEmailEl = document.getElementById('subscribeEmail');
//Элемент кнопки отправки формы.
const buttonFeedbackEl = document.querySelector('.b-feedbackBlock__button');

let regExpName = new RegExp('^(\\s?[a-zA-z]+\\s?)+$', 'gmi');
let regExpPhone = new RegExp('\\+7\\(\\d{3}\\)\\d{3}-\\d{4}');
let regExpEmail = new RegExp('^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$');

console.log(inputNameEl);
buttonFeedbackEl.addEventListener('click', () => {
    console.log(inputNameEl.value);
    if (!(regExpName.test(inputNameEl.value))) {
        inputNameEl.style.border = 'solid 3px #E05C6E';
        inputNameEl.insertAdjacentHTML('afterend', '<span style = "color:#E05C6E">Имя должно содержать только буквы!</span>')
    } else {

    }
});



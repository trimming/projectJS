'use strict';

//Элемент кнопки отправки формы.
const buttonFeedbackEl = document.querySelector('.b-feedbackBlock__button');

let name = {
    element: document.getElementById('subscribeName'),
    regex: /^([a-zA-Z\s?]+)$/mi,
    message: '<span class = "subscribe" id = "nameMessage" style = "color:#E05C6E">Имя должно содержать только буквы!</span>',
    id: "nameMessage"
}
let phone = {
    element: document.getElementById('subscribePhone'),
    regex: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
    message: '<span class = "subscribe" id = "phoneMessage" style = "color:#E05C6E">Телефон должен быть формата +7(000)000-0000!</span>',
    id: "phoneMessage"
}
let email = {
    element: document.getElementById('subscribeEmail'),
    regex: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
    message: '<span class = "subscribe" id = "emailMessage" style = "color:#E05C6E">Почта введена не корректно!</span>',
    id: "emailMessage"
}

class UserInput {
    constructor({ element, regex, message, id }) {
        this.element = element;
        this.regex = regex;
        this.message = message;
        this.id = id;
    }
    testInput() {
        console.log(this.element);
        console.log(this.regex);
        if (!(this.regex.test(this.element.value))) {
            this.element.style.border = 'solid 3px #E05C6E';
            this.element.insertAdjacentHTML('afterend', `${this.message}`);
            this.element.style.background = '#ffd9d9'
        } else if (document.querySelector(`.subscribe[id = "${this.id}"]`)) {
            const messageEl = document.querySelector(`.subscribe[id = "${this.id}"]`);
            messageEl.style.display = 'none';
            this.element.style.border = 'solid 3px #6bf556';
            this.element.style.background = '#c8fcc0'
        } else {
            this.element.style.border = 'solid 3px #6bf556';
            this.element.style.background = '#c8fcc0'
        }
    }
}

const form = new UserInput(email);
buttonFeedbackEl.addEventListener('click', () => {
    form.testInput();
});


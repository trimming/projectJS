Vue.component('message-comp', {
    props: ['message'],
    template: `<div>
        <p v-if="message">нет данных</p>
    </div>`
})
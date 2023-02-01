'use strict';
const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: ''
    },
    methods: {
        makeGETRequest() {
            fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    console.log(response);
                })
        }
    },
    mounted() {
        this.makeGETRequest()
    }

});

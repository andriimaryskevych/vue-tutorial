new Vue({
    el: '#vue-app',
    data: {
        title: 'Vue tutor',
        wage: 10,
    },
    methods: {
        changeWage(amount) {
            this.wage += amount;
        }
    }
});

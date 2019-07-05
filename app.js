new Vue({
    el: '#vue-app',
    data: {
        title: 'Vue tutor',
        name: 'Andrii',
    },
    methods: {
        greet(time) {
            return `Hello and good ${time}, ${this.name}`;
        },
    }
});

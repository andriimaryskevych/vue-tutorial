new Vue({
    el: '#vue-app',
    data: {
        title: 'Vue tutor',
        name: 'Andrii',
        url: 'https://www.youtube.com/',
        classes: ['one', 'two'],
    },
    methods: {
        greet(time) {
            return `Hello and good ${time}, ${this.name}`;
        },
    }
});

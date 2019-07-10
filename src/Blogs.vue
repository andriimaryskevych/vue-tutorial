<template>
    <div class='blogs'>
        <div v-for='post in posts' :key='post.id'>
            <h3>{{ post.title }}</h3>
            <p>{{ post.body | snippet}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Blogs',
    data() {
        return {
            posts: [],
        }
    },
    methods: {
        changeTitle() {
            this.blogTitle += 'a';
        },
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(response => {
                console.log(response);

                this.posts = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
}
</script>


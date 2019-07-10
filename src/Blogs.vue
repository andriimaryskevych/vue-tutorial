<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle">Change title</button>
    </div>
</template>

<script>
export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'Blogs',
        }
    },
    methods: {
        changeTitle() {
            this.blogTitle += 'a';
        },
    },
    beforeCreate() {
        alert('Before create hook');
    },
    created() {
        alert('Created hook');
    },
    beforeUpdate() {
        alert('Before update');
    }
}
</script>


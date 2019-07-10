<template>
    <div class="blogs">
        <h2></h2>
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
    beforeCreate() {
        console.log('Before create hook');
    },
    created() {
        console.log('Created hook');
    },
}
</script>


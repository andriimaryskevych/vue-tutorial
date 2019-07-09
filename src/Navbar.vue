<template>
    <nav>
        <h2>Menu</h2>

        <li><a href="">Home</a></li>
        <li><a href="">Acout</a></li>
        <li><a href="">Contact</a></li>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {}
    }
}
</script>

<style>
    nav {
        text-align: center;
    }

    nav ul {
        padding: 0;
    }

    nav li {
        display: inline-block;
        list-style-type: none;
        margin: 0;
    }
</style>

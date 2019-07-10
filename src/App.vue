<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <Navbar />
        <AllFriends :friends="friends" />
        <OnlineFriends :friends="friends" />
    </div>
</template>

<script>
import Navbar from './Navbar';
import AllFriends from './AllFriends';
import OnlineFriends from './OnlineFriends';

export default {
    name: 'app',
    components: {
        Navbar,
        AllFriends,
        OnlineFriends,
    },
    data () {
        return {
            title: 'My first Vue.js App',
            friends: [
                { name: 'Mario', online: true },
                { name: 'Abigale', online: false },
                { name: 'Den', online: true },
                { name: 'Mark', online: false },
                { name: 'Olena', online: true },
            ],
        }
    }
}
</script>

<style>
h1 {
    color: #444;
    font-weight: normal;
    text-align: center;
}
</style>

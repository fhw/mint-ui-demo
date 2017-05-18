<template>
    <div id="app">
        <router-view name="b"></router-view>
        <!-- <topnav></topnav> -->
        <img src="./assets/logo.png">
        <!-- <router-link to="/hello">Hello</router-link> -->
        <!-- <router-link to="/topnav">topnav</router-link> -->
        <router-view name="a"></router-view>
    </div>
</template>
<script>
import topnav from './components/topnav.vue'
export default {
    name: 'app',
    components: {
        topnav
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
}
</style>

<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-bottom></my-bottom>
  </div>
</template>
<script>
  import bottom from '@/components/common/Bottom'
  import myHeader from '@/components/common/Header'

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      'my-bottom': bottom,
      'my-header': myHeader
    },
    methods: {}
  }
</script>
<style>
  body, html {
    width: 100%;
    height: 100%;
  }

  #app {
    font-family: 'Microsoft YaHei UI', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    background: #fff;
  }

  hr {
    margin: 5px 10px;
    border: 1px solid #f5f5f5;
  }

  a{
    text-decoration: none;
  }
</style>

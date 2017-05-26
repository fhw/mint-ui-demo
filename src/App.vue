<template>
    <div id="app">
        <div class="top-header">
            <mt-header fixed title="豆瓣电影">
                <mt-button icon="back" slot="left" v-if='hasBackBtn()' @click='goBack'>返回</mt-button>
                <router-link to="/search" slot="right">
                    <mt-button icon="search"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <router-view></router-view>
        <router-view name='itSwipe'></router-view>
        <hr>
        <router-view name='top250Swipe'></router-view>
    </div>
</template>
<script>
export default {
    name: 'app',
    methods: {
        hasBackBtn: function() {
            var nowRouterPath;
            nowRouterPath = this.$router.currentRoute.path;
            if (nowRouterPath == '/' || nowRouterPath == '') {
                return false;
            } else {
                return true;
            }
        },
        goBack: function() {
            this.$router.go(-1);
        }
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
    height: 100%;
    width: 100%;
    background: #fff;
}

.top-header {
    width: 100%;
    height: 40px;
}

.top-header h1 {
    font-family: YouYuan;
    font-size: 20px;
    letter-spacing: 4px;
}

hr {
    margin: 5px 10px;
    border: 1px solid #f5f5f5;
}

</style>

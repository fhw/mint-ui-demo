<template>
    <div id="app">
        <div class="contrainer">
            <mt-header fixed title="豆瓣电影">
                <router-link to="/" slot="left" v-if='hasBackBtn()'>
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <router-link to="/search" slot="right">
                    <mt-button icon="search"></mt-button>
                </router-link>
            </mt-header>
            <router-view></router-view>
        </div>
        <router-view name='itSwipe'></router-view>
        <!-- <router-view name="searchMovie"></router-view> -->
    </div>
</template>
<script>
export default {
    name: 'app',
    methods:{
        hasBackBtn:function () {
            var nowRouterPath;
            nowRouterPath=this.$router.currentRoute.path;
            if (nowRouterPath=='/'||nowRouterPath=='') {
                return false;
            }else {
                return true;
            }
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
}

.contrainer {
    width: 100%;
    height: 100%;
}
</style>

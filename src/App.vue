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


    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab-container1">

        <router-view name='itSwipe'></router-view>
        <hr>
        <router-view name='top250Swipe'></router-view>
        <router-view name='listTabBar'></router-view>

      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">


      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">


      </mt-tab-container-item>
    </mt-tab-container>


    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tab-container1" @click.native="goHome">
        <img slot="icon" src="">
        主页



      </mt-tab-item>
      <mt-tab-item id="tab-container2" @click.native="goInTheaterList">
        <img slot="icon" src="">
        热映



      </mt-tab-item>
      <mt-tab-item id="tab-container3" @click.native="goTop25List">
        <img slot="icon" src="">
        top250



      </mt-tab-item>
      <!--<mt-tab-item id="tab-container4" @click.native="goUsBoxList">-->
        <!--<img slot="icon" src="">-->
        <!--北美票房榜-->



      <!--</mt-tab-item>-->
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data(){
      return {
        selected: 'tab-container1'
      }
    },
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        console.log(val)
      },
    },
    methods: {
      hasBackBtn: function () {
        var nowRouterPath;
        nowRouterPath = this.$router.currentRoute.path;
        if (nowRouterPath == '/' || nowRouterPath == '') {
          return false;
        } else {
          return true;
        }
      },
      goBack: function () {
        this.$router.go(-1);
      },
      goHome:function(){
        this.$router.push({path: '/'});
      },
      goInTheaterList: function () {
        this.$router.push({path: '/movie/movieList/in_theaters'});
      },
      goTop25List: function () {
        this.$router.push({path: '/movie/movieList/top250'});
      },
//      goUsBoxList: function () {
//        this.$router.push({path: '/movie/movieList/us_box'});
//      }
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

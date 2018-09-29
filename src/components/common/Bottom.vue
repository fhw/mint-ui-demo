<template>
  <div class="app-bottom">
    <!-- <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tab-container1" @click.native="goHome">
        <img slot="icon" src="./../../assets/images/home.png">主页
      </mt-tab-item>
        <mt-tab-item id="tab-container2" @click.native="goInTheaterList">
          <img slot="icon" src="./../../assets/images/hot.png">热映
      </mt-tab-item>
          <mt-tab-item id="tab-container3" @click.native="goTop25List">
            <img slot="icon" src="./../../assets/images/top.png">TOP250
      </mt-tab-item> -->
    <!--<mt-tab-item id="tab-container4" @click.native="goUsBoxList">-->
    <!--<img slot="icon" src="">-->
    <!--北美票房榜-->
    <!--</mt-tab-item>-->
    <!-- </mt-tabbar> -->
    <mu-bottom-nav>
      <mu-bottom-nav-item title="主页" icon="restore"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="热映" icon="favorite"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="TOP250" icon="location_on"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'tab-container1'
    }
  },
  methods: {
    goHome: function () {
      this.$router.push({
        path: '/'
      })
    },
    goInTheaterList: function () {
      this.$router.push({
        path: '/movie/movieList/in_theaters'
      })
    },
    goTop25List: function () {
      this.$router.push({
        path: '/movie/movieList/top250'
      })
    }
    //      goUsBoxList: function () {
    //        this.$router.push({path: '/movie/movieList/us_box'});
    //      }
  }
}
</script>

<style lang="scss" scoped>
.app-bottom {
  width: 100%;
  position: fixed;
  bottom: 0
}
</style>

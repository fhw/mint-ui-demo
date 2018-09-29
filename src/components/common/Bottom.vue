<template>
  <div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tab-container1" @click.native="goHome">
        <img slot="icon" src="./../../assets/images/home.png">主页
      </mt-tab-item>
      <mt-tab-item id="tab-container2" @click.native="goInTheaterList">
        <img slot="icon" src="./../../assets/images/hot.png">热映
      </mt-tab-item>
      <mt-tab-item id="tab-container3" @click.native="goTop25List">
        <img slot="icon" src="./../../assets/images/top.png">TOP250
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

<style scoped>

</style>

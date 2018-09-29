<template>
  <div class="top-header">
    <mu-appbar color="primary">
      <mu-button icon slot="left" @click='openSlideNav = true'>
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      豆瓣电影
      <mu-button icon slot="right" @click="toSearch">
        <mu-icon value="search"></mu-icon>
      </mu-button>
    </mu-appbar>
    <slider-nav :open-slide-nav.sync="openSlideNav"></slider-nav>
  </div>
</template>

<script>
import SliderNav from './SliderNav'
export default {
  components: {
    SliderNav
  },
  data () {
    return {
      openSlideNav: false
    }
  },
  computed: {
    hasBackBtn () {
      const nowRouterPath = this.$route.path
      return !(nowRouterPath === '/' || nowRouterPath === '')
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    toSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped>
.top-header {
  width: 100%;
  /* height: 40px; */
}
</style>

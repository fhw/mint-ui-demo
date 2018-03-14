<template>
  <div class="top-header">
    <mt-header fixed title="豆瓣电影">
      <mt-button icon="back" slot="left" v-if='hasBackBtn()' @click='goBack'>返回</mt-button>
      <router-link to="/search" slot="right">
        <mt-button icon="search"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
  export default {
    methods: {
      hasBackBtn: function () {
        let nowRouterPath;
        nowRouterPath = this.$router.currentRoute.path;
        return !(nowRouterPath === '/' || nowRouterPath === '');
      },
      goBack: function () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .top-header {
    width: 100%;
    height: 40px;
  }

  .top-header h1 {
    font-size: 20px;
    letter-spacing: 4px;
  }
</style>

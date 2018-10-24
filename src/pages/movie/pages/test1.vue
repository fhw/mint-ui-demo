<template>
  <div>
    <mt-button type="default">test1</mt-button>
    <a href="/movie.html/test2">test2</a>
    <router-view></router-view>
  </div>
</template>
<script>
import { Button } from 'mint-ui'
export default {
  components: {
    MtButton: Button
  },
  created () {
    console.log('222')
  }
}
</script>
<style lang="scss" scoped>
</style>

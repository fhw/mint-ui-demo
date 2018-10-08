<template>
    <div>
        test1
        <router-link to="/test2">test2</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  created () {
    console.log('222')
  }
}
</script>
<style lang="scss" scoped>
</style>

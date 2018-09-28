<template>
  <div>
    <keep-alive>
      <!--<router-view name='itSwipe'></router-view>-->
      <it-swipe></it-swipe>
    </keep-alive>
    <hr>
    <keep-alive>
      <top-swipe></top-swipe>
    </keep-alive>
    <!--<router-view name='listTabBar'></router-view>-->
  </div>
</template>

<script>
import inTheaterSwipe from '@/components/inTheaterSwipe'
import top250Swipe from '@/components/top250Swipe'

export default {
  name: 'home',
  data () {
    return {
      selected: 'tab-container1'
    }
  },
  components: {
    'itSwipe': inTheaterSwipe,
    'topSwipe': top250Swipe
  }
}
</script>

<style scoped>

</style>

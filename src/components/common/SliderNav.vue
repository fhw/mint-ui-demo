<template>
    <div>
        <mu-drawer :open.sync="open" left :docked="false" @update:openSlideNav="open = $event">
            <mu-list dense>
                <mu-list-item button @click="slideNavTo('/')">
                    <mu-list-item-action>
                        <mu-icon value="home"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>首页</mu-list-item-title>
                </mu-list-item>
            </mu-list>
            <mu-divider shallow-inset></mu-divider>
            <mu-list dense>
                <mu-list-item button @click="slideNavTo('/movie/movieList/in_theaters')">
                <mu-list-item-action>
                        <mu-icon value="whatshot"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>热映</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button @click="slideNavTo('/movie/movieList/top250')">
                <mu-list-item-action>
                        <mu-icon value="format_list_numbered"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>TOP250</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </mu-drawer>
    </div>
</template>
<script>
export default {
  props: {
    openSlideNav: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      open: this.openSlideNav,
      listOpen: 'stared'
    }
  },
  methods: {
    slideNavTo (to) {
      this.open = false
      this.$router.push(to)
    }
  },
  watch: {
    openSlideNav (val) {
      this.open = this.openSlideNav
    },
    open (val) {
      this.$emit('update:openSlideNav', val)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

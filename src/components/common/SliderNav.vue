<template>
    <div>
        <mu-drawer :open.sync="open" left :docked="false" @update:openSlideNav="open = $event">
            <mu-list>
                <mu-list-item button>
                    <mu-list-item-title>Menu Item 1</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Menu Item 2</mu-list-item-title>
                </mu-list-item>
                <mu-list-item @click="open = false" button>
                    <mu-list-item-title>Close</mu-list-item-title>
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
      open: this.openSlideNav
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
